import React, { useEffect, useState } from "react";
import TeacherCard from "./Teachers/TeacherCard";
import { Line, Column } from "../Layouts/layouts";
import "./SearchBar.css";
import axios from "axios";

export default function SearchResult({ teacherList }) {
  const [filter, setFilter] = useState("Raiting");
  const [list, setList] = useState();

  useEffect(() => {
    if (list) {
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

  useEffect(() => {
    if (teacherList) {
      setList(teacherList);
    }
  }, [teacherList]);

  useEffect(() => {
    const CheckFavorite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4006/api/v1/teachers/getfavorites`,
          localStorage.getItem("user"),
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log("response: ", response);
      } catch (err) {
        console.log(err);
      }
    };

    CheckFavorite();
  }, []);

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
        "No teachers to show"
      )}
    </Column>
  );
}
