import React from "react";
import TeacherCard from "./Teachers/TeacherCard";
import { Line } from "../Layouts/layouts";
import "./SearchBar.css";

export default function SearchResult() {
  const teacher = [
    {
      img: "https://img.freepik.com/free-photo/lifestyle-summer-people-emotions-concept-enthusiastic-handsome-male-model-with-happy-smile-white-teeth-standing-casual-t-shirt-yellow-background-satisfied_1258-60040.jpg?w=1480&t=st=1679328330~exp=1679328930~hmac=dcd4a8a36fbff07385c2a3fead62154fd91c6c6a8ab1844ebc4b0c166693110c",
    },

    {
      img: "https://img.freepik.com/free-photo/attractive-black-african-american-woman-posing-stylish-green-dress-isolated-green-background_285396-10811.jpg?w=1480&t=st=1679330294~exp=1679330894~hmac=a5878bfb07f7fe4924fde281570fe56d98a655d678de74425755926d3dc945f9",
    },

    {
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1480&t=st=1679330261~exp=1679330861~hmac=2aec6a6af1469c53787a038e7fec01fc730073b5a670cc3562043e756dee0dad",
    },

    {
      img: "https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg?w=1480&t=st=1679329413~exp=1679330013~hmac=8859da458fe6350b9c7024813ceb84f4d07548146e719490a989965f4872f472",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg?w=1480&t=st=1679329350~exp=1679329950~hmac=eb99dafc97d05da48e327a9447f8ec24c03e99407ba5608ed6ccda0cc4d59cf5",
    },
    {
      img: "https://img.freepik.com/free-photo/emotions-people-concept-headshot-happy-attractive-man-laughing-smiling-express-rejoice_1258-26742.jpg?w=1480&t=st=1679329397~exp=1679329997~hmac=2dde5d203e055ce104cf6b91c3905176fbe3bff992e3fc811af4c2c82d5b7b1a",
    },
    {
      img: "https://img.freepik.com/free-psd/portrait-young-woman-with-afro-dreadlocks-hairstyle_23-2150164235.jpg?w=1480&t=st=1679330319~exp=1679330919~hmac=96040e86deae32158f008be5ff50be5926838e60116b02389ae7890589badd18",
    },
  ];
  return (
    <Line className="searchResultContainer">
      {teacher.map((teacher, index) => {
        return <TeacherCard teacher={teacher} key={index} />;
      })}
    </Line>
  );
}
