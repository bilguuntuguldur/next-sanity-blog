import '../globals.css';
import Header from "@/components/header/Header";
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: "Laim.prosperity",
  description: "Passive house design",
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