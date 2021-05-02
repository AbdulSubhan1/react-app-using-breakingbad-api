import Characteritems from "./Characteritems";
import spinner from "../img/spinner.gif";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  ) : (
    <section className="cards">
      {items.map((item) => {
        return <Characteritems key={item.char_id} item={item}></Characteritems>;
      })}
    </section>
  );
};

export default CharacterGrid;
