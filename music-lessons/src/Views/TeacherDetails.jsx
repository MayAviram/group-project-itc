import React from "react";
import { Box, Line, Column } from "../Layouts/layouts";
import "../Components/Teachers/Teacher.css";
export default function TeacherDetails() {
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
              <Line className="detail">
                <h2>john donald</h2>
              </Line>
              <Line className="detail">Instrument: piano</Line>
              <Line className="detail">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed vitae cursus metus, nec sagittis sapien. Morbi
                venenatis interdum arcu, et.
              </Line>
              <Line className="detail">Price: 8$/Hour</Line>
              <Line className="detail">Location: Jerusalem</Line>
              <Line className="detail">Language: English</Line>
              <Line className="detail">Recommendations: 4</Line>
            </Column>
          </Line>
        </Box>
      </Line>
    </div>
  );
}
