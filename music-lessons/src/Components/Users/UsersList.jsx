import React, { useEffect, useState } from "react";
import "../../Views/Dashboard.css";
import axios from "axios";

import Modal from "../Modal";
import ProfileDetails from "../ProfileDetails";
export default function UsersList() {
  const [editOpen, setEditOpen] = useState(false);
  const [editUserDetails, setEditUserDetails] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4006/api/v1/users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
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
                  <button
                    onClick={() => {
                      setEditOpen((z) => !z);
                      setEditUserDetails(user);
                    }}
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

            <Modal
              isOpen={editOpen}
              setIsOpen={setEditOpen}
              Comp={ProfileDetails}
              options={{ userData: editUserDetails }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
