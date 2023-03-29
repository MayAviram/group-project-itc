import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Views/Dashboard.css";

import Modal from "../Modal";
import EditTeacher from "../Teachers/EditTeacher";
export default function TeachersList() {
  const [editOpen, setEditOpen] = useState(false);
  const [editTeacherDetails, setEditTeacherDetails] = useState({});
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4006/api/v1/teachers/getall",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setTeachers(response.data.teachers);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeachers();
  }, []);
  return (
    <div className=" tableContainer">
      <table className="tableList">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Instrument</th>
            <th>Price</th>
            <th>Raiting</th>
            <th>Language</th>
            <th>Location</th>
            <th>Description</th>
            <th>Phone Number</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.instrument}</td>
              <td>{teacher.price}</td>
              <td>{teacher.raiting}</td>
              <td>{teacher.language}</td>
              <td>{teacher.location}</td>
              <td>{teacher.description}</td>
              <td>{teacher.number}</td>
              <td>
                <button
                  onClick={() => {
                    setEditOpen((z) => !z);
                    setEditTeacherDetails(teacher);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button
                  onClick={async () => {
                    axios
                      .delete(
                        `http://localhost:4006/api/v1/teachers/delete/${teacher._id}`,
                        {
                          headers: {
                            Authorization:
                              "Bearer " + localStorage.getItem("token"),
                          },
                        }
                      )
                      .then((_) => {
                        setTeachers((teacherList) =>
                          teacherList.filter(
                            (existTeacher) => existTeacher._id !== teacher._id
                          )
                        );
                      });
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}

          <Modal
            isOpen={editOpen}
            setIsOpen={setEditOpen}
            Comp={EditTeacher}
            options={{ teacherData: editTeacherDetails }}
          />
        </tbody>
      </table>
    </div>
  );
}
