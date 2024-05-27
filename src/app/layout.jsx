import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Global Food Business',
  description: 'We are a company dedicated to the international trade of agri-food products, with more than 25 years of experience in the market.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
          <link rel="shortcut icon" href='/imgs/favicon.ico' sizes="180x180"/>
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
