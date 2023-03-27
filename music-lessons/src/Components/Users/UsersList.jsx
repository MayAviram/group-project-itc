import React, { useEffect, useState } from "react";
import "../../Views/Dashboard.css";
import axios from "axios";

// import Modal from "../Modal";

export default function UsersList() {
  // const [editOpen, setEditOpen] = useState(false);
  // const [viewOpen, setViewOpen] = useState(false);
  const [users, setUsers] = useState([]);

  // const [editUserDetails, setEditUserDetails] = useState({});

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4006/api/v1/users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // console.log();
        setUsers(response.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, []);
  return (
    <div>
      <div className=" tableContainer">
        <table className="tableList">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Password</th>
              <th>Role</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>

                <td>
                  {/* <button
                  onClick={() => {
                    setViewOpen((z) => !z);
                    setEditUserDetails(user);
                  }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button> */}

                  <button
                  // onClick={() => {
                  //   setEditOpen((z) => !z);
                  //   setEditUserDetails(user);
                  // }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button
                    onClick={async () => {
                      axios
                        .delete(
                          `http://localhost:4006/api/v1/users/${user._id}`,
                          {
                            headers: {
                              Authorization:
                                "Bearer " + localStorage.getItem("token"),
                            },
                          }
                        )
                        .then((_) => {
                          setUsers((userList) =>
                            userList.filter(
                              (existUser) => existUser._id !== user._id
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
