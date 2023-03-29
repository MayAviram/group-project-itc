import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherCard from "./Teachers/TeacherCard";
import { Line } from "../Layouts/layouts";

// import Modal from "../Modal";

export default function MyTeachers() {
  const [MyTeachers, setMyTeachers] = useState([]);

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
        setMyTeachers(response.data.myTeachers);
        console.log(response.data.myTeachers);
      } catch (err) {
        console.log(err);
      }
    };
    getMyTeachers();
  }, []);
  return (
    <Line className=" searchResultContainer">
      {MyTeachers.teacherId &&
        MyTeachers.teacherId.map((MyTeacher, index) => (
          <TeacherCard key={index} teacher={MyTeacher} />
        ))}
    </Line>
  );
}
