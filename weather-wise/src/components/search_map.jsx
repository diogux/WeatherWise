import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import wordsData from "../data/Distritos.json";

export default function SearchBar({ placeholder, onLocationChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWords = wordsData.filter((word) =>
    word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

 const handleSearch = () => {
  // Check if the searchTerm exists in the wordsData array
  const foundWord = wordsData.find(word => word.toLowerCase() === searchTerm.toLowerCase());
  
  if (foundWord) {
    // Pass selected value to parent component
    onLocationChange(foundWord);
  } else {
    setSearchTerm("");
  }
};

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        list="words"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="px-3 py-2 w-80 border-indigo-600"
        placeholder={placeholder}
      />
      <datalist id="words">
        {filteredWords.map((word, index) => (
          <option key={index} value={word} />
        ))}
      </datalist>
      <Button className="px-3 py-2" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </Button>
    </div>
  );
}
