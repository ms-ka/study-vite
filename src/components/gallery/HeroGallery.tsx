import React from "react";
import HeroCard from "./HeroCard";
import IHero from "../../lesson/lesson05/data";
import './heroGallery.css'

//Interfejs IHero - Definiuje strukturę dla każdego bohatera.
interface HeroGalleryProps {
  data: IHero[]
}

//data to props
export default function HeroGallery({ data }: HeroGalleryProps) {
  return (
    <section className="grid-container">
      {/* mapowanie - Teraz HeroGallery iteruje po heroes, a każdy element jest przekazywany jako pojedynczy HeroCard. */} 
      {data.map((hero) => (
        <HeroCard
          key={hero.id}
          isDark={hero.isDark}
          name={hero.name}
          image={hero.image}
          age={hero.age}
          weapons={hero.weapons}
        />
      ))}
    </section>
  )
}

