import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'form 미쳤다',
  description: 'shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
