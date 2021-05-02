import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <section className="search" style={{ marginTop: "20px" }}>
      <form>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Search character"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
