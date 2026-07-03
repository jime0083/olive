import React, { useEffect, useRef, useState } from 'react';
import './AnimatedHeading.css';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  animateOnLoad?: boolean;
  triggerAnimation?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  tag: Tag = 'h2',
  animateOnLoad = false,
  triggerAnimation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  // 外部からのトリガー制御
  useEffect(() => {
    if (triggerAnimation !== undefined && triggerAnimation) {
      setIsVisible(true);
    }
  }, [triggerAnimation]);

  useEffect(() => {
    // triggerAnimationが指定されている場合は、Intersection Observerを使用しない
    if (triggerAnimation !== undefined) {
      return;
    }

    if (animateOnLoad) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }

    const currentRef = headingRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOnLoad, triggerAnimation]);

  const characters = text.split('');

  return (
    <Tag
      ref={headingRef as any}
      className={`animated-heading ${className} ${isVisible ? 'animated-heading--visible' : ''}`}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className="animated-heading__char"
          style={{
            transitionDelay: `${index * 0.05}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading;
