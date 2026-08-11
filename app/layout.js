import './globals.css';
import { SiteShell } from '../components/site-shell';

export const metadata = {
  title: 'Amir Imtiaz | AI-Native Technical Builder',
  description: 'Portfolio and project work for Amir Imtiaz, an AI-native technical builder focused on product, data, and intelligent systems.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
