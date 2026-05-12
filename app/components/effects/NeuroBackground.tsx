'use client'

import { useEffect, useRef } from 'react'

export function NeuroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const devicePixelRatio = Math.min(window.devicePixelRatio, 2)
    let gl: WebGLRenderingContext | null = null
    let uniforms: Record<string, WebGLUniformLocation | null> = {}
    const pointer = { x: 0, y: 0, tX: 0, tY: 0 }

    function createShader(
      gl: WebGLRenderingContext,
      sourceCode: string,
      type: number
    ) {
      const shader = gl.createShader(type)
      if (!shader) return null

      gl.shaderSource(shader, sourceCode)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }

      return shader
    }

    function createShaderProgram(
      gl: WebGLRenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader
    ) {
      const program = gl.createProgram()
      if (!program) return null

      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program))
        return null
      }

      return program
    }

    function getUniforms(gl: WebGLRenderingContext, program: WebGLProgram) {
      const result: Record<string, WebGLUniformLocation | null> = {}
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)

      for (let i = 0; i < uniformCount; i++) {
        const info = gl.getActiveUniform(program, i)
        if (!info) continue
        result[info.name] = gl.getUniformLocation(program, info.name)
      }

      return result
    }

    function initShader() {
      const currentCanvas = canvasRef.current
      if (!currentCanvas) return null

      const vsSource = `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;

        void main() {
          vUv = .5 * (a_position + 1.);
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `

      const fsSource = `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
          return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        vec3 getColor(float t) {
          float index = mod(t, 5.0);
          int i0 = int(floor(index));
          float blend = fract(index);

          vec3 color0, color1;

          if (i0 == 0) {
            color0 = vec3(0.58, 0.0, 0.83);
            color1 = vec3(1.0, 1.0, 1.0);
          } else if (i0 == 1) {
            color0 = vec3(1.0, 1.0, 1.0);
            color1 = vec3(1.0, 0.0, 0.0);
          } else if (i0 == 2) {
            color0 = vec3(1.0, 0.0, 0.0);
            color1 = vec3(0.0, 0.4, 1.0);
          } else if (i0 == 3) {
            color0 = vec3(0.0, 0.4, 1.0);
            color1 = vec3(0.0, 1.0, 0.3);
          } else {
            color0 = vec3(0.0, 1.0, 0.3);
            color1 = vec3(0.58, 0.0, 0.83);
          }

          return mix(color0, color1, smoothstep(0.0, 1.0, blend));
        }

        float neuro_shape(vec2 uv, float t, float p) {
          vec2 sine_acc = vec2(0.);
          vec2 res = vec2(0.);
          float scale = 8.;

          for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer);
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2 - .07 * p);
          }

          return res.x + res.y;
        }

        void main() {
          vec2 uv = .5 * vUv;
          uv.x *= u_ratio;

          vec2 pointer = vUv - u_pointer_position;
          pointer.x *= u_ratio;
          float p = clamp(length(pointer), 0., 1.);
          p = .5 * pow(1. - p, 2.);

          float t = .001 * u_time;
          vec3 base = vec3(0.106);
          vec3 activeColor = getColor(t * 0.3);

          float noise = neuro_shape(uv, t, p);
          noise = smoothstep(0.6, 1.0, noise);

          vec3 color = mix(base, activeColor, noise);

          gl_FragColor = vec4(color, 1.0);
        }
      `

      const webgl = (
        currentCanvas.getContext('webgl') ||
        currentCanvas.getContext('experimental-webgl')
      ) as WebGLRenderingContext | null

      if (!webgl) return null

      gl = webgl

      const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER)
      const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER)
      if (!vertexShader || !fragmentShader) return null

      const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader)
      if (!shaderProgram) return null

      uniforms = getUniforms(gl, shaderProgram)

      const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
      const vertexBuffer = gl.createBuffer()
      if (!vertexBuffer) return null

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

      gl.useProgram(shaderProgram)

      const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position')
      gl.enableVertexAttribArray(positionLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      return gl
    }

    function getParentRect() {
      const currentCanvas = canvasRef.current
      const parentEl = currentCanvas?.parentElement
      if (!currentCanvas || !parentEl) return null

      return {
        canvas: currentCanvas,
        parentEl,
        rect: parentEl.getBoundingClientRect(),
      }
    }

    function resizeCanvas() {
      if (!gl) return

      const data = getParentRect()
      if (!data) return

      const { canvas, rect } = data

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    function updateMousePosition(clientX: number, clientY: number) {
      const data = getParentRect()
      if (!data) return

      const { rect } = data
      pointer.tX = clientX - rect.left
      pointer.tY = clientY - rect.top
    }

    function onPointerMove(e: PointerEvent) {
      updateMousePosition(e.clientX, e.clientY)
    }

    function onTouchMove(e: TouchEvent) {
      if (!e.targetTouches[0]) return
      updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
    }

    function render() {
      if (!gl) return

      const data = getParentRect()
      if (!data) return

      const { rect } = data

      pointer.x += (pointer.tX - pointer.x) * 0.5
      pointer.y += (pointer.tY - pointer.y) * 0.5

      gl.uniform1f(uniforms.u_time, performance.now())

      const px = rect.width ? pointer.x / rect.width : 0.5
      const py = rect.height ? 1 - pointer.y / rect.height : 0.5

      gl.uniform2f(uniforms.u_pointer_position, px, py)
      gl.uniform1f(
        uniforms.u_scroll_progress,
        window.scrollY / (2 * window.innerHeight)
      )
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      frameRef.current = requestAnimationFrame(render)
    }

    const initialParent = canvas.parentElement
    if (!initialParent) return

    if (initShader()) {
      resizeCanvas()
      initialParent.addEventListener('pointermove', onPointerMove)
      initialParent.addEventListener('touchmove', onTouchMove, { passive: true })
      window.addEventListener('resize', resizeCanvas)
      render()
    }

    return () => {
      initialParent.removeEventListener('pointermove', onPointerMove)
      initialParent.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', resizeCanvas)

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full z-0"
      aria-hidden="true"
    />
  )
}
