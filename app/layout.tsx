import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {/* esto es parte del layout */}
        {children}
        <footer className="flex justify-center">Hecho con ❤️ de Kratos</footer>
      </body>
    </html>
  );
}
