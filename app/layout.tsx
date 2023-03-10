import '../styles/globals.css';

import { Assistant } from '@next/font/google';
import Navbar from "../components/ui-components/navbar";
import Footer from 'components/ui-components/footer';

const assistant = Assistant({ subsets: ['latin'] });

export const metadata = {
  colorScheme: 'dark',
  creator: "Drew Beamer",
  keywords: ['web development', 'front-end development', 'software engineering', 'react', 'next.js', 'javascript', 'responsive design', 'birds', 'bird photography', 'student', 'developer'],
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${assistant.className}`}>
        <Navbar />
        <main className='flex justify-center sm:min-h-[calc(100vh-0.75rem-44px)] min-h-[calc(100vh-1.5rem-76px)]'>
          <div className='mt-4 sm:mt-12 px-8 sm:px-0 w-full sm:w-[540px]'>
            {children}
          </div>
        </main>
        <Footer />
      </body >
    </html >


  )
}
