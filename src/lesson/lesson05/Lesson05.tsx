import HeroGallery from "../../components/gallery/HeroGallery";
import { heroes } from "./data";
import "./lesson05.css";


function Lesson05(): JSX.Element {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React map() components</p>
      {/* przekazanie w HeroGallery w props datę importowania */}
      <HeroGallery data={heroes}/>
    </div>
  );
}

export default Lesson05;
