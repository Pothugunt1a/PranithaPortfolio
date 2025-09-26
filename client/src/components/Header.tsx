import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold hover-elevate"
            data-testid="button-logo"
          >
            Pranitha Pothuguntla
          </Button>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => scrollToSection(item.section)}
                data-testid={`button-nav-${item.section}`}
                className="hover-elevate"
              >
                {item.label}
              </Button>
            ))}
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}