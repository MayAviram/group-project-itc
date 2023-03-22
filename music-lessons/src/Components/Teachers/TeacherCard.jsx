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

export default function TeacherCard({ teacher }) {
  const navigate = useNavigate();

  const addToFavorite = () => {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[900] }} aria-label="teacher">
            R
          </Avatar>
        }
        title="Teacher Name"
        subheader="piano"
      />
      <CardMedia
        component="img"
        height="194"
        image={teacher.img}
        alt={`teacher`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price: 8$/Hour
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: Bat-Yam
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToFavorite}>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="info"
          onClick={() => {
            navigate("/teacherDetails/:id");
          }}
        >
          <InfoTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
