import './globals.css'


export const metadata = {
  title: 'Nathan Ferreira',
  description: 'My web resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
