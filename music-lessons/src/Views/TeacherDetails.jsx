import React from "react";
import { Box, Line, Column } from "../Layouts/layouts";
import "../Components/Teachers/Teacher.css";
import { useNavigate } from "react-router-dom";

export default function TeacherDetails() {
  const navigate = useNavigate();

  return (
    <div className="teacherDetailsContainer">
      <Line>
        <Box className="teacherDetails">
          <Line>
            <Column>
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="teacherPic"
                className="teacherImg"
              />
            </Column>
            <Column className="detailColumn">
              {/* <Line className="detail">
                <h2>{"john donald".toUpperCase()}</h2>
              </Line> */}
              {/* <Line className="detail">
                <h4>Instrument:</h4> piano
              </Line>
              <Line className="detail">
                <h4>Description:</h4> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed vitae cursus metus, nec sagittis sapien.
                Morbi venenatis interdum arcu, et.
              </Line>
              <Line className="detail">
                <h4>Price:</h4> 8$/Hour
              </Line>
              <Line className="detail">
                <h4>Location:</h4> Jerusalem
              </Line>
              <Line className="detail">
                <h4>Language:</h4> English
              </Line>
              <Line className="detail">
                <h4>Recommendations:</h4> 4
              </Line>
              <Line className="detail">
                <h4>Phone Number:</h4> +1234567890
              </Line> */}
              {/* <Line className="detail"> */}
              <h2>{"john donald".toUpperCase()}</h2>
              {/* </Line> */}
              <table className="deatilsTable">
                <tbody>
                  <tr className="detail">
                    <th>Instrument</th>
                    <td>piano</td>
                  </tr>
                  <tr className="detail">
                    <th>Description</th>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae cursus metus, nec sagittis sapien. Morbi
                      venenatis interdum arcu, et.
                    </td>
                  </tr>
                  <tr className="detail">
                    <th>Price</th>
                    <td>8$/Hour</td>
                  </tr>
                  <tr className="detail">
                    <th>Location</th>
                    <td>Jerusalem</td>
                  </tr>
                  <tr className="detail">
                    <th>Language</th>
                    <td>English</td>
                  </tr>
                  <tr className="detail">
                    <th>Recommendations</th>
                    <td>4</td>
                  </tr>
                  <tr className="detail">
                    <th>Phone Number</th>
                    <td>+1234567890</td>
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
    </div>
  );
}
