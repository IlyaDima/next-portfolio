import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
