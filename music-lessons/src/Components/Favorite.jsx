import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Favorite() {
  // const [favorites, setFavorites] = useState();

  // useEffect(() => {
  //   const getFavorites = async () => {
  //     // console.log(localStorage.getItem("user"));
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:4006/api/v1/teachers/getfavorites`,
  //         localStorage.getItem("user"),
  //         {
  //           headers: {
  //             Authorization: "Bearer " + localStorage.getItem("token"),
  //           },
  //         }
  //       );
  //       // console.log(response.data);
  //       // setFavorites()
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getFavorites();
  // }, []);

  return <div>Favorite</div>;
}
