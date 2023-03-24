import React, { useEffect, useState } from "react";
import TeacherCard from "./Teachers/TeacherCard";
import { Line, Column } from "../Layouts/layouts";
import "./SearchBar.css";

export default function SearchResult({ teacherList }) {
  const [filter, setFilter] = useState("Raiting");

  const [list, setList] = useState(teacherList);

  useEffect(() => {
    if (teacherList) {
      const sortedList = [...list];
      switch (filter) {
        case "Raiting":
          sortedList.sort((a, b) => b.raiting - a.raiting);

          break;
        case "Price":
          sortedList.sort((a, b) => a.price - b.price);
      }
      setList(sortedList);
    }
  }, [filter]);

  return (
    <Column>
      {list ? (
        <>
          <Line className={"filterResult"}>
            <label>Order By: </label>
            <select
              name="filterInput"
              id="filterInput"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              defaultValue={{ filter }}
            >
              <option value="Raiting">Raiting</option>
              <option value="Price">Price</option>
            </select>
          </Line>
          <Line className="searchResultContainer">
            {list.map((teacher, index) => {
              return <TeacherCard teacher={teacher} key={index} />;
            })}
          </Line>
        </>
      ) : (
        "No teacher to show"
      )}
    </Column>
  );
}
