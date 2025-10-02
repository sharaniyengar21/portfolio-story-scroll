"use client";
import { useEffect, useState } from 'react';

export default function ProgressIndicator() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalHeight = scrollHeight - clientHeight;
      const scrolled = (scrollTop / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2 h-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="bg-blue-500 dark:bg-blue-400 w-full transition-all duration-150"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
}
