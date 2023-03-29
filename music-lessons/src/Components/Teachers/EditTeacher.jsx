import React, { useState } from "react";
import { Column, Line } from "../../Layouts/layouts";
import "./Teacher.css";
import axios from "axios";

export default function EditTeacher({ setIsOpen, options }) {
  const teacher = options.teacherData;
  const [feedback, setFeedback] = useState({
    color: "green",
    content: "",
  });

  const formData = new FormData();
  const handleFormChange = (e) => {
    if (e.target.name === "img") {
      formData.set(e.target.name, e.target.files[0]);
    } else {
      formData.set(e.target.name, e.target.value);
    }
  };

  const editTeacher = async () => {
    try {
      await axios.patch(
        `http://localhost:4006/api/v1/teachers/update/${teacher._id}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFeedback({
        color: "green",
        content: "Teacher edited successfully!",
      });
    } catch (err) {
      setFeedback({
        color: "red",
        content: err.response.data?.message,
      });
      console.log(err);
    }
  };

  return (
    <Column className="addTeacherContainer">
      <h3 className="title">
        Edit teacher &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={() => setIsOpen(false)}>x</span>
      </h3>

      <form>
        <Line>
          <div className="teacherDeatil">
            <label>Name</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="text"
              id="name"
              name="name"
              defaultValue={teacher.name}
            />
          </div>
          <div className="teacherDeatil">
            <label>Last Name</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={teacher.lastName}
            />
          </div>
        </Line>
        <Line>
          <div className="teacherDeatil">
            <label>Instrument</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="text"
              id="instrument"
              name="instrument"
              defaultValue={teacher.instrument}
            />
          </div>
          <div className="teacherDeatil">
            <label>Price</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="number"
              id="price"
              name="price"
              defaultValue={teacher.price}
            />
          </div>
        </Line>
        <Line>
          <div className="teacherDeatil">
            <label>Language</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="text"
              id="language"
              name="language"
              defaultValue={teacher.language}
            />
          </div>
          <div className="teacherDeatil">
            <label>Location</label>
            <input
              onChange={(e) => handleFormChange(e)}
              type="text"
              id="location"
              name="location"
              defaultValue={teacher.location}
            />
          </div>
        </Line>
        <div className="teacherDeatil">
          <label>Description</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="description"
            name="description"
            defaultValue={teacher.description}
          />
        </div>
        <div className="teacherDeatil">
          <label>Phone Number</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="number"
            id="number"
            name="number"
            defaultValue={teacher.number}
          />
        </div>
        <div className="teacherDeatil">
          <label>Image</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="file"
            id="img"
            name="img"
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            editTeacher();
          }}
        >
          edit
        </button>
        <p style={{ color: feedback.color }} className="feedback">
          {feedback.content}
        </p>
      </form>
    </Column>
  );
}
