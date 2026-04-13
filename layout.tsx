import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Torres Compra Cash',
  description: 'Compramos casas en Puerto Rico. Ofertas cash. Cierre rápido.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
