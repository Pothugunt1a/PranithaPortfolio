
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypingAnimation({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "",
  showCursor = true 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeWriter = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeWriter);
        }
      }, speed);

      return () => clearInterval(typeWriter);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed, prefersReducedMotion]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (isTyping || prefersReducedMotion) && (
        <motion.span
          className="inline-block ml-1"
          animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
          transition={prefersReducedMotion ? {} : {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
