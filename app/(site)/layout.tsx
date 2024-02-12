import '../globals.css';
import Header from "@/components/header/header";
import Footer from '@/components/footer/footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: "BEKI",
  description: "Blog and Portfolio website",
}

const Rootlayout = ({ children }: {children : React.ReactNode}) => (
  <html lang="en">
      <body>
          <ThemeProvider>
              <div className="main">
                  {/* <div className="gradient" /> */}
              </div>

              <main className="app">
                  <Header />
                    {children}
                  <Footer />
              </main>
          </ThemeProvider>
      </body>
  </html>
)

export default Rootlayout;