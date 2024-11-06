import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
