interface IHeroCardProps {
  isDark: boolean
  name: string
  age: number
  image: string
  weapons: string[]
}

//funkcja jakie wartości chce otrzymać moj obiekt
function HeroCard({ isDark, name, age, image, weapons }: IHeroCardProps) {
  //zwrot
  return (
    <article className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>
        {name} is {age} years old
      </p>
      <img src={image} alt="" />
      <p>
        Hero weapons{weapons.map((weapon, index) => (
          <span className="weapon" key={index}>|{weapon}</span>
        ))}
      </p>
    </article>
  );
}
export default HeroCard;
