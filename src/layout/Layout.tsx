import styles from './layout.module.css'
import { Outlet } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

//Layout pokazuję jaka część strony jest zmienialna

export default function Layout() {
  return (
    <>
    {/* header wyświetla nagłówek */}
    <Header/>
      {/* main będzie elastyczne, zmienne, z różnymi komponentami z routera */}
      <main className={styles.main}>
        {/* importuję Outlet z biblioteki, na miejscu Outlet będą pojawiały się nie zmienne komponenty */}
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}
