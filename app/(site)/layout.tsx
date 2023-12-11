import '../globals.css';
import Header from "@/components/header/Header";
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: "BEKI",
  description: "My web design",
  icon: "http://shacman.mn/wp-content/uploads/2023/12/pngtree-letter-b-logo-png-png-image_2978124.png"
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