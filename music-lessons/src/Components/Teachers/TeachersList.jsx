import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Views/Dashboard.css";
// import Modal from "../Modal";

export default function TeachersList() {
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [data, setData] = useState([]);

  const [editUserDetails, setEditUserDetails] = useState({});

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:4006/api/v1/teachers/getall"
        // );
        // const data = response.data;
        // console.log("data teacher list", data);
        // setData(data);
        setData([
          {
            instrument: "guitarra",
            price: "8",
            raiting: "5",
            language: "Ingles",
            location: "America",
            description: "is good",
          },
          {
            instrument: "guitarra",
            price: "8",
            raiting: "5",
            language: "Ingles",
            location: "America",
            description: "is good",
          },
          {
            instrument: "guitarra",
            price: "8",
            raiting: "5",
            language: "Ingles",
            location: "America",
            description: "is good",
          },
        ]);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeachers();
  }, []);
  return (
    <div className=" teacherListContainer">
      <div>
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
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.instrument}</td>
                <td>{item.price}</td>
                <td>{item.raiting}</td>
                <td>{item.language}</td>
                <td>{item.location}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    onClick={() => {
                      setViewOpen((z) => !z);
                      setEditUserDetails(item);
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>

                  <button
                    onClick={() => {
                      setEditOpen((z) => !z);
                      setEditUserDetails(item);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button
                  // onClick={() => {
                  //   axios.delete("http://localhost:8080/user/delete/" + i._id, {
                  //       headers: {
                  //         "auth-token": localStorage.getItem("token"),
                  //       },
                  //     })
                  //     .then((_) => {
                  //       setData((data) => data.filter((z) => z._id != i._id));
                  //     });
                  // }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {/* <Modal
            isOpen={editOpen}
            setIsOpen={setEditOpen}
            Comp={ProfileDetails}
            options={{ userData: editUserDetails }}
          />

          <Modal
            isOpen={viewOpen}
            setIsOpen={setViewOpen}
            Comp={ViewUserPets}
            options={{ userData: editUserDetails }}
          /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
