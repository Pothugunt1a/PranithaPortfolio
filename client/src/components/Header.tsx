import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { headerVariants, staggerContainer, fadeUpVariants, getReducedMotionVariants } from "@/lib/animations";
import logoPath from "@assets/ChatGPT Image Sep 26, 2025, 08_47_28 PM_1758937680951.png";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  
  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' }
  ];

  const variants = prefersReducedMotion ? getReducedMotionVariants(headerVariants) : headerVariants;
  const navVariants = prefersReducedMotion ? getReducedMotionVariants(staggerContainer) : staggerContainer;
  const itemVariants = prefersReducedMotion ? getReducedMotionVariants(fadeUpVariants) : fadeUpVariants;

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('hero')}
              className="p-2 hover-elevate transition-all duration-300 hover:scale-105"
              data-testid="button-logo"
              aria-label="Go to hero section"
            >
              <img 
                src={logoPath} 
                alt="PP Logo" 
                className="h-10 w-10 object-contain"
              />
            </Button>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.div key={item.section} variants={itemVariants}>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.section)}
                  data-testid={`button-nav-${item.section}`}
                  className="hover-elevate transition-all duration-200 hover:scale-105 hover:text-primary"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </motion.nav>
          
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}