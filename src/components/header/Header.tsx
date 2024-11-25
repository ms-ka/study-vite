import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    /* header ma być stały, niezmienny */
  
  <header className={styles.header}>
    {/* <NavLink>: Pochodzi z biblioteki react-router-dom. Służy do nawigacji między różnymi routami (ścieżkami URL) w aplikacji SPA. */}
    {/* nawigowanie do linku */}
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      // przyjmuje funkcję, która zwraca klasę CSS w zależności od stanu linku. Jeśli isActive true przypisywana jest klasa stylów, jeśli false, to pusta klasa '' 
      to={"/"}>Lessons</NavLink>
      {/* nawigacja prowadzi do ścieżki 'to=' o nazwie ' ' */}
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"fetch-dog"}>Fetch dog</NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"hero-gallery"}>Hero gallery</NavLink>
    {/* tylko jeśli dany link jest aktywny, czyli isActive jest true to włączane są style z css */}
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"gender-form"}>Gender form</NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"cat-fact"}>CatFact</NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"products"}>Products</NavLink>  
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"login"}>Login</NavLink>  
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"cart"}>Cart</NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? styles.linkActive : "")}
      to={"store"}>Store</NavLink>
  </header>
  )
// Jeśli link pasuje do aktualnego adresu URL (jest aktywny), dodawana jest klasa linkActive, co pozwala wyróżnić aktywny link wizualnie (np. innym kolorem).
// Jeśli link nie jest aktywny, klasa linkActive nie jest przypisywana.
// Każdy link przekierowuje użytkownika do określonego adresu URL: /, /fetch-dog, lub /hero-gallery.
// Mechanizm nawigacji działa bez przeładowania strony dzięki funkcjom react-router-dom.
}
