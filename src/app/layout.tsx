  import type { Metadata } from 'next'
  import "./globals.css";// for tailwind css 
  import { Toaster } from "react-hot-toast";
  export const metadata: Metadata = {
    title: 'React App',
    description: 'Web site created with Next.js.',
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
        </head>
        <body style={{ overflow: 'hidden', width: '100%' }}>
          <Toaster position="top-right" reverseOrder={false} />
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }