import React, { useEffect, useState } from "react";
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

export default function TeacherCard({
  teacher,
  favoriteList,
  setFavoriteList,
}) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState();

  const changeFavorite = async () => {
    try {
      if (!favorite) {
        await axios.post(
          `http://localhost:4006/api/v1/teachers/favorite/${teacher._id}`,
          localStorage.getItem("user"),
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setFavoriteList([...favoriteList, teacher]);
        setFavorite(true);
      } else {
        await axios.delete(
          `http://localhost:4006/api/v1/teachers/favorite/${teacher._id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setFavorite(false);
        // const removeTeacher = (teacherId) => {
        const updatedList = favoriteList.filter(
          (favList) => favList._id !== teacher._id
        );
        setFavoriteList([...updatedList]);
        setFavorite(false);
        console.log(updatedList);
        // };

        // removeTeacher(teacher._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // const checkFavorite = () => {
    const find = favoriteList.some((item) => item._id === teacher._id);
    if (find) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
    // };
    // checkFavorite();
  }, [favoriteList]);

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
      </CardContent>
      <CardActions disableSpacing>
        <Between className="cardBottom">
          <div>
            <IconButton aria-label="add to favorites" onClick={changeFavorite}>
              <FavoriteIcon style={{ color: favorite ? "#DC143C " : "none" }} />
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
