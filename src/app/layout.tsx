import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio Story Scroll',
  description: 'High-end personal portfolio with story-scroll theme.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
