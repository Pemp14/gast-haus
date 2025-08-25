"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1;
const cooldownTime = 0.1;

const useMorphingText = (texts: string[]) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [wordStartTime, setWordStartTime] = useState(Date.now());
  
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>();

  // Время показа каждого слова (в миллисекундах)
  const wordTimings = [
    1500, // "Welcome" - 1.5 секунды
    1000, // "to" - 1 секунда  
    2000, // "Gast Haus" - 2 секунды
  ];

  const setStyles = useCallback((fraction: number) => {
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (!current1 || !current2) return;

    // Текущий и следующий текст
    const currentText = texts[currentTextIndex] || '';
    const nextText = texts[currentTextIndex + 1] || texts[currentTextIndex];

    if (fraction === 0) {
      // Показываем только текущий текст
      current1.textContent = currentText;
      current2.textContent = nextText;
      current1.style.opacity = '1';
      current1.style.filter = 'blur(0px)';
      current2.style.opacity = '0';
      current2.style.filter = 'blur(8px)';
    } else {
      // Морфинг между текстами
      current1.textContent = currentText;
      current2.textContent = nextText;
      
      current1.style.opacity = `${Math.pow(1 - fraction, 0.4)}`;
      current1.style.filter = `blur(${Math.min(8 / (1 - fraction) - 8, 100)}px)`;
      
      current2.style.opacity = `${Math.pow(fraction, 0.4)}`;
      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    }
  }, [texts, currentTextIndex]);

  useEffect(() => {
    if (isComplete) return;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - wordStartTime;
      const currentWordTiming = wordTimings[currentTextIndex] || 1000;

      if (elapsed >= currentWordTiming) {
        // Время показа текущего слова истекло
        if (currentTextIndex < texts.length - 1) {
          // Переходим к следующему слову
          setCurrentTextIndex(prev => prev + 1);
          setWordStartTime(now);
          setMorphProgress(0);
        } else {
          // Все слова показаны
          setIsComplete(true);
          return;
        }
      } else if (elapsed >= currentWordTiming - morphTime * 1000) {
        // Начинаем морфинг за 1 секунду до конца
        const morphElapsed = elapsed - (currentWordTiming - morphTime * 1000);
        const progress = Math.min(morphElapsed / (morphTime * 1000), 1);
        setMorphProgress(progress);
      } else {
        // Просто показываем текущий текст
        setMorphProgress(0);
      }

      setStyles(morphProgress);
      animationRef.current = requestAnimationFrame(animate);
    };

    setWordStartTime(Date.now());
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentTextIndex, morphProgress, isComplete, setStyles, texts.length, wordTimings]);

  // Инициализация
  useEffect(() => {
    setStyles(0);
  }, [setStyles]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
}

const Texts: React.FC<Pick<MorphingTextProps, "texts">> = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

const MorphingText: React.FC<MorphingTextProps> = ({ texts, className }) => (
  <div
    className={cn(
      "relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);

export { MorphingText };