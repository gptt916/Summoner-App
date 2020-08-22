import React, { useState } from "react";
import { Search } from "carbon-components-react";

const SearchBar = ({ doSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      doSearch(input);
    }
  };

  return (
    <Search
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
