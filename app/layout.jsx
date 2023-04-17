import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Next 13 tutorial',
  description: 'Based on Next 13 crash course by Traversy Media',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
