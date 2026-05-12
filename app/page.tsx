import { ProposalHero } from "./components/sections/HeroBlock";
import { ProposalIntro } from "./components/sections/IntroBlock";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { ProposalAbout } from "./components/sections/ProposalAbout";
import { ProposalTask } from "./components/sections/ProposalTask";
import { ProposalStructure } from "./components/sections/ProposalStructure";
import { ProposalOptions } from "./components/sections/ProposalOptions";
import { ProposalSteps } from "./components/sections/ProposalSteps";
import { ProposalProcess } from "./components/sections/ProposalProcess";
import { FundCard } from "./components/cards/FundCard";
import { Button } from './components/ui/Button'
import { HeroSectionHome } from "./components/sections/HeroSectionHome";
import Link from "next/link";

export default function HomePage() {
  const proposalDate = "12 мая 2026";
  const clientName = "Илона";
  const brandName = "Литрес";

  return (
    <main>
      {/* <ProposalHero
        date={proposalDate}
        clientName={clientName}
        brandName={brandName}
        backgroundImage="/hero-client.jpg"
      /> */}
      <FundCard
          fundName="Коммерческое предложение"
          fundDescription="На разработку сайта под ключ для партнерского проекта Литрес"
          imageSrc="/assets/bg.png"
          imageAlt="Фоновое изображение"
          href="https://t.me/kirrish"
        />
      {/* <ProposalAbout/> */}
      <ProposalTask />
      <ProposalStructure />
      <MarqueeSection 
        logoSet="stack"
        text="Используем проверенный стек для&nbsp;дизайна, разработки и&nbsp;контента"
      />
      {/* <ProposalOptions /> */}
      <ProposalSteps />
      {/* <ProposalProcess /> */}
      {/* <ProposalIntro /> */}
      <MarqueeSection 
        logoSet="clients"
        text="Нас выбирают за&nbsp;скорость, прозрачность и&nbsp;результат"
      />
      <HeroSectionHome />
    </main>
  );
}