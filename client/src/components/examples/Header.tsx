import Header from '../Header';

export default function HeaderExample() {
  const mockScrollToSection = (section: string) => {
    console.log(`Scrolling to section: ${section}`);
  };

  return <Header scrollToSection={mockScrollToSection} />;
}