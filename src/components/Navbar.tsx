"use client";
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Determine which section is currently in view
      let currentSection = 'hero';
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPos >= offsetTop - window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });
      setActive(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 flex h-14 items-center justify-between">
        <span className="font-semibold text-lg">My Portfolio</span>
        <ul className="flex space-x-4 text-sm">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={
                  active === sec.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'hover:underline'
                }
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
