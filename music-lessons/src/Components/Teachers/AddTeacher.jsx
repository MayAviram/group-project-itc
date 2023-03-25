import React, { useState } from "react";
import { Column } from "../../Layouts/layouts";
import "./Teacher.css";
import axios from "axios";

export default function AddTeacher() {
  // const [formData, setFormData] = useState({});
  const [formData, setFormData] = useState(new FormData());

  const handleFormChange = (e) => {
    if (e.target.name === "img") {
      // setFormData({ ...formData, [e.target.name]: e.current.files[0] });
      console.log("current", e.target.files[0]);
      formData.set(e.target.name, e.target.files[0]);
    } else {
      // setFormData({ ...formData, [e.target.name]: e.target.value });
      formData.set(e.target.name, e.target.value);
    }
  };

  const addTeacher = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4006/api/v1/teachers/create",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const data = response.data.teachers;
      console.log("response add teacher", response);
      // setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Column className="addTeacherContainer">
      <h3 className="title">Add new teacher</h3>
      <form>
        <div className="teacherDeatil">
          <label>Name</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="teacherDeatil">
          <label>Last Name</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="teacherDeatil">
          <label>Instrument</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="instrument"
            name="instrument"
          />
        </div>
        <div className="teacherDeatil">
          <label>Price</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="number"
            id="price"
            name="price"
          />
        </div>
        <div className="teacherDeatil">
          <label>Language</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="language"
            name="language"
          />
        </div>
        <div className="teacherDeatil">
          <label>Location</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="location"
            name="location"
          />
        </div>
        <div className="teacherDeatil">
          <label>Description</label>
          <input
            onChange={(e) => handleFormChange(e)}
            type="text"
            id="description"
            name="description"
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
            addTeacher();
            // checkData() && type === "add" ? insertPet() : updatePet();
          }}
        >
          add
        </button>
      </form>
    </Column>
  );
}
