export function BottomFade() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 h-16"
      style={{
        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 100%)',
        maskImage: 'linear-gradient(to top, black 10%, transparent 100%)',
        backdropFilter: 'blur(6px)',
      }}
    />
  )
}