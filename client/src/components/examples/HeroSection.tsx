import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const mockScrollToSection = (section: string) => {
    console.log(`Scrolling to section: ${section}`);
  };

  return <HeroSection scrollToSection={mockScrollToSection} />;
}