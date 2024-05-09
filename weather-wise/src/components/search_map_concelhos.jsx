import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import wordsData from "../data/ConcelhosApenas.json";

export default function SearchBar({ placeholder, onLocationChange }) {
  // Function to remove diacritics from a string
  const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Create an array of words without diacritics
  const wordsWithoutDiacritics = wordsData.map((word) =>
    removeDiacritics(word)
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWords = wordsData.filter((word) =>
    removeDiacritics(word.toLowerCase()).includes(
      removeDiacritics(searchTerm.toLowerCase())
    )
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      handleClear();
    }
  };

  const handleSearch = () => {
    // Check if the searchTerm exists in the wordsData array
    const foundWord = wordsData.find(
      (word) =>
        removeDiacritics(word.toLowerCase()) ===
        removeDiacritics(searchTerm.toLowerCase())
    );

    if (foundWord) {
      // Pass selected value to parent component
      onLocationChange(foundWord);
    } else {
      setSearchTerm("");
    }
  };

  const handleClear = () => {
    setSearchTerm("");
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
        {wordsWithoutDiacritics.map((word, index) => (
          <option key={index} value={word} />
        ))}
      </datalist>
      <Button
        className="px-3 py-2 bg-black/20"
        onClick={() => {
          handleSearch();
          handleClear();
        }}
      >
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
