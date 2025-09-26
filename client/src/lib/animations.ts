import { useEffect, useRef, useState } from 'react';
import { Variants } from 'framer-motion';

// Base animation configurations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    progress: 1.0,
  },
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],
    spring: [0.34, 1.56, 0.64, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  delay: {
    base: 0.1,
    stagger: 0.08,
    staggerSlow: 0.15,
  },
};

// Header animations
export const headerVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: animationConfig.ease.smooth,
    },
  },
};

// Hero section animations
export const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      delay: 0.1,
    },
  },
};

export const heroImageVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateY: 15,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: animationConfig.duration.slow,
      ease: animationConfig.ease.spring,
      delay: 0.3,
    },
  },
};

// Staggered container animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animationConfig.delay.stagger,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animationConfig.delay.staggerSlow,
    },
  },
};

// Fade up animations for cards and content
export const fadeUpVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: animationConfig.ease.smooth,
    },
  },
};

// Scale in animations for cards
export const scaleInVariants: Variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: animationConfig.ease.spring,
    },
  },
};

// Experience timeline animations
export const timelineCardVariants: Variants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -50 : 50,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: animationConfig.duration.slow,
      ease: animationConfig.ease.spring,
    },
  },
};

// Timeline path drawing animation
export const timelinePathVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// Timeline dot animations
export const timelineDotVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: index * 0.3,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

// Progress bar animations
export const progressVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: animationConfig.duration.progress,
      ease: animationConfig.ease.smooth,
      delay: 0.2,
    },
  }),
};

// Blur to sharp text animations
export const blurVariants: Variants = {
  hidden: {
    filter: 'blur(4px)',
    opacity: 0.8,
  },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: animationConfig.duration.slow,
      ease: animationConfig.ease.smooth,
    },
  },
};

// 3D hover effects for project cards
export const projectCardHover = {
  scale: 1.02,
  rotateX: 5,
  rotateY: 5,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

// Contact section split animations
export const contactSplitVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const contactCardVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

// Footer animations
export const footerVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: animationConfig.ease.smooth,
      staggerChildren: 0.05,
    },
  },
};

// Image mask wipe animation
export const imageMaskVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.6,
      ease: animationConfig.ease.smooth,
    },
  },
};

// Utility function to get reduced motion variants
export const getReducedMotionVariants = (variants: Variants): Variants => {
  const reducedVariants: Variants = {};
  
  Object.keys(variants).forEach(key => {
    if (key === 'visible') {
      reducedVariants[key] = {
        opacity: 1,
        transition: { duration: 0.01 },
      };
    } else if (key === 'hidden') {
      reducedVariants[key] = {
        opacity: 0,
      };
    } else {
      reducedVariants[key] = variants[key];
    }
  });
  
  return reducedVariants;
};

// Custom hook for intersection observer
export const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};