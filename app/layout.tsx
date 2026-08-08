import Navbar from "@/components/Navbar"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}