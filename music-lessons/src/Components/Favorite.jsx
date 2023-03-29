import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherCard from "./Teachers/TeacherCard.jsx";
import { Line } from "../Layouts/layouts";
export default function Favorite() {
  const [favoriteList, setFavoriteList] = useState();
  const [meassage, setMeassage] = useState("loading...");

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4006/api/v1/teachers/getfavorites`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response && response.data.favorites.teacherId.length > 0) {
          setFavoriteList(response.data.favorites.teacherId);
          setMeassage("");
        } else {
          setMeassage("There is no favorites");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFavorites();
  }, []);

  return (
    <Line>
      {favoriteList
        ? favoriteList.map((teacher, index) => {
            return (
              <TeacherCard
                teacher={teacher}
                key={index}
                favoriteList={favoriteList}
                setFavoriteList={setFavoriteList}
              />
            );
          })
        : meassage}
    </Line>
  );
}
