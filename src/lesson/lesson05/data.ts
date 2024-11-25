interface IHero {
  id: number
  name: string
  age: number
  isDark: boolean
  image: string
  weapons: string[]
}

export const heroes: IHero[] = [
  {
    id:1,
    name: "Gandalf",
    age: 1400,
    isDark: false,
    image: "https://thetolkien.forum/wiki-asset/?pid=2170&d=1628260741",
    weapons: ["magic stick", "sword"],
  },
  {
    id:2,
    name: "Saruman",
    age: 1200,
    isDark: true,
    image: "https://static.wikia.nocookie.net/lotr/images/e/ef/Saruman.jpg",
    weapons: ["magic stick", "palantir"],
  },

  {
    id:3,
    name: "Gimli",
    age: 200,
    isDark: false,
    image: "https://static.posters.cz/image/750/art-photo/gimli-i142873.jpg",
    weapons: ["hammer", "axe"],
  },
  {
    id:4,
    name: "Witch-king",
    age: 1500,
    isDark: true,
    image:
      "https://www.blacksbricks.de/images/product_images/original_images/witchkingff5.jpg",
    weapons: ["sword", "dragon", "dark magic"],
  },
  {
    id:5,
    name: "Aragorn",
    age: 150,
    isDark: false,
    image: "https://static.wikia.nocookie.net/lotr/images/b/ba/Anduril.jpg",
    weapons: ["sword"],
  },
];
export default IHero;