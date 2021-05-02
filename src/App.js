import axios from "axios";
import { useEffect, useState } from "react";
import CharacterGrid from "./component/CharacterGrid";
import Header from "./component/Header";
import Search from "./component/Search";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}
