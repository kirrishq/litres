type LogoItem = {
  srcLight: string
  srcDark?: string
  alt: string
}

type LogoSet = {
  stack: LogoItem[]
  clients: LogoItem[]
  partners: LogoItem[]
}

export const marqueeLogos: LogoSet = {
  stack: [
    {
      srcLight: 'assets/stack-logos/figma.svg',
      srcDark: 'assets/stack-logos/figma.svg',
      alt: 'Figma',
    },
    {
      srcLight: 'assets/stack-logos/adobe.svg',
      srcDark: 'assets/stack-logos/adobe-white.svg',
      alt: 'Adobe',
    },
    {
      srcLight: 'assets/stack-logos/tilda.png',
      srcDark: 'assets/stack-logos/tilda-white.png',
      alt: 'Tilda',
    },
    {
      srcLight: 'assets/stack-logos/webflow.svg',
      srcDark: 'assets/stack-logos/webflow.svg',
      alt: 'Webflow',
    },
    {
      srcLight: 'assets/stack-logos/react.svg',
      srcDark: 'assets/stack-logos/react.svg',
      alt: 'React',
    },
    {
      srcLight: 'assets/stack-logos/next.svg',
      srcDark: 'assets/stack-logos/next-white.svg',
      alt: 'Next.js',
    },
  ],
  clients: [
    {
      srcLight: 'assets/clients-logos/stoli.svg',
      srcDark: 'assets/clients-logos/stoli.svg',
      alt: 'Stoli',
    },
    {
      srcLight: 'assets/clients-logos/two-tails.svg',
      srcDark: 'assets/clients-logos/two-tails-light.svg',
      alt: 'Два Хвоста',
    },
    // {
    //   srcLight: 'assets/clients-logos/lyna-plus.png',
    //   srcDark: 'assets/clients-logos/lyna-plus-light.png',
    //   alt: 'Lyna Plus',
    // },
    {
      srcLight: 'assets/clients-logos/getanalyst.svg',
      srcDark: 'assets/clients-logos/getanalyst-light.svg',
      alt: 'GetAnalyst',
    },
    {
      srcLight: 'assets/clients-logos/soha-smm.svg',
      srcDark: 'assets/clients-logos/soha-smm-light.svg',
      alt: 'SOHA SMM',
    },
    {
      srcLight: 'assets/clients-logos/koh-i-noor.svg',
      srcDark: 'assets/clients-logos/koh-i-noor.svg',
      alt: 'KOH-I-NOOR',
    },
    {
      srcLight: 'assets/clients-logos/lvc.svg',
      srcDark: 'assets/clients-logos/lvc-light.svg',
      alt: 'Legacy Vision Capital',
    },
    {
      srcLight: 'assets/clients-logos/nexa-ai.svg',
      srcDark: 'assets/clients-logos/nexa-ai-light.svg',
      alt: 'NEXA AI',
    },
    {
      srcLight: 'assets/clients-logos/vulkan-nova-rus.svg',
      srcDark: 'assets/clients-logos/vulkan-nova-rus.svg',
      alt: 'Вулкан Нова Рус',
    },
    {
      srcLight: 'assets/clients-logos/torsunov.svg',
      srcDark: 'assets/clients-logos/torsunov.svg',
      alt: 'Доктор Торсунов',
    }
  ],
  partners: [
    {
      srcLight: '/partners/partner-a.svg',
      srcDark: '/partners/partner-a-dark.svg',
      alt: 'Partner A',
    },
    {
      srcLight: '/partners/partner-b.svg',
      srcDark: '/partners/partner-b-dark.svg',
      alt: 'Partner B',
    },
  ],
}