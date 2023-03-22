import React from "react";
import { Line, Column } from "../Layouts/layouts";
import SearchBar from "../Components/SearchBar";
import SearchResult from "../Components/SearchResult";
import "../Components/SearchBar.css";

export default function Searchpage() {
  return (
    <Column>
      <Line>
        <SearchBar />
      </Line>
      <Line>
        <SearchResult />
      </Line>
    </Column>
  );
}
