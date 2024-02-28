import "./globals.css";
import styles from "../styles/global.module.scss";
import StoreProvider from "../redux/StoreProvider";
import Navbar from '../components/navbar/Navbar'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'


export const metadata = {
  title: "Crypto Admin Dashboard",
  description: "Crypto Coin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
     
        <body className={styles.main}>
          <div className={styles.main}>
            <Navbar />

            <div className={styles.container}>
              <div className={styles.menuContainer}>
                <Menu />
              </div>
              <div className={styles.contentContainer}>{children}</div>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
