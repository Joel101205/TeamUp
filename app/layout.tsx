import Navbar from "@/components/Navbar"
import "./global.css"
import { AuthProvider } from "@/context/AuthContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AuthProvider>
          <Navbar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}