import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherCard from "./Teachers/TeacherCard";
import { Line } from "../Layouts/layouts";

export default function MyTeachers() {
  const [MyTeachers, setMyTeachers] = useState([]);
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    const getMyTeachers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4006/api/v1/teachers/getmyteachers",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);
        if (
          response.data.myTeachers &&
          response.data.myTeachers.teacherId.length > 0
        ) {
          setMyTeachers(response.data.myTeachers.teacherId);
          setMessage("");
        } else {
          setMessage("There is no myTeachers");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMyTeachers();
  }, []);

  return (
    <Line>
      {MyTeachers
        ? MyTeachers.map((teacher, index) => {
            return (
              <TeacherCard
                teacher={teacher}
                key={index}
                myTeachers={MyTeachers}
                setmyTeachers={setMyTeachers}
              />
            );
          })
        : message}
    </Line>
  );
}
