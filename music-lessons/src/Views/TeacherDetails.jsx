import React, { useEffect, useState } from "react";
import { Box, Line, Column } from "../Layouts/layouts";
import "../Components/Teachers/Teacher.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function TeacherDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeachers] = useState();

  useEffect(() => {
    const getTeacherById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4006/api/v1/teachers/getlesson/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setTeachers(response.data.teacher);
      } catch (err) {
        console.log(err);
      }
    };
    getTeacherById();
  }, [id]);

  return (
    <div className="teacherDetailsContainer">
      {teacher ? (
        <Line>
          <Box className="teacherDetails">
            <Line>
              <Column className="imgColumn">
                <img
                  src={teacher.img}
                  alt="teacherPic"
                  className="teacherImg"
                />
              </Column>
              <Column className="detailColumn">
                <h2>{`${teacher.name} ${teacher.lastName}`.toUpperCase()}</h2>
                <table className="deatilsTable">
                  <tbody>
                    <tr className="detail">
                      <th>Instrument</th>
                      <td>{teacher.instrument}</td>
                    </tr>
                    <tr className="detail">
                      <th>Description</th>
                      <td>{teacher.description}</td>
                    </tr>
                    <tr className="detail">
                      <th>Price</th>
                      <td>{teacher.price}$/Hour</td>
                    </tr>
                    <tr className="detail">
                      <th>Location</th>
                      <td>{teacher.location}</td>
                    </tr>
                    <tr className="detail">
                      <th>Language</th>
                      <td>{teacher.language}</td>
                    </tr>
                    <tr className="detail">
                      <th>Raiting</th>
                      <td>{teacher.raiting}</td>
                    </tr>
                    <tr className="detail">
                      <th>Phone Number</th>
                      <td>{teacher.number}</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  className="button"
                  onClick={() => {
                    navigate("/search");
                  }}
                >
                  Back to search
                </button>
              </Column>
            </Line>
          </Box>
        </Line>
      ) : (
        "loading data..."
      )}
    </div>
  );
}
