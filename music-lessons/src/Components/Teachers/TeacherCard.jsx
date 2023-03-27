import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Between } from "../../Layouts/layouts";
import "../Teachers/Teacher.css";
import axios from "axios";

export default function TeacherCard({ teacher }) {
  const navigate = useNavigate();

  const setFavorite = async () => {
    // console.log(localStorage.getItem("user"));
    // try {
    //   await axios.post(
    //     `http://localhost:4006/api/v1/teachers/favorite/${teacher._id}`,
    //     localStorage.getItem("user"),
    //     {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //       },
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }} className="teacherCard">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[900] }} aria-label="teacher">
            {teacher.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={`${teacher.name.toUpperCase()} ${teacher.lastName.toUpperCase()}`}
        subheader={teacher.instrument}
      />
      <CardMedia
        component="img"
        height="194"
        image={teacher.img}
        alt={`teacher-${teacher.name}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price: {teacher.price}$/Hour
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {teacher.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone Number: {teacher.number}
        </Typography>
        {/* <div>Price: {teacher.price}$/Hour</div>

        <div>Location: {teacher.location}</div>

        <div>Phone Number: {teacher.number}</div> */}
      </CardContent>
      <CardActions disableSpacing>
        <Between className="cardBottom">
          <div>
            <IconButton aria-label="add to favorites" onClick={setFavorite}>
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="info"
              onClick={() => {
                navigate(`/teacherDetails/${teacher._id}`);
              }}
            >
              <InfoTwoToneIcon />
            </IconButton>
          </div>
          {/* <IconButton aria-label="raiting"> */}
          <div className="raiting">
            {Array(parseInt(teacher.raiting))
              .fill()
              .map((item, index) => (
                <StarIcon key={index} className="raitingIcon" />
              ))}
          </div>
          {/* </IconButton> */}
        </Between>
      </CardActions>
    </Card>
  );
}
