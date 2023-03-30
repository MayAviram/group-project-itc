import React, { useEffect, useState } from 'react';
import { Line, Column } from '../Layouts/layouts';
import SearchBar from '../Components/SearchBar';
import SearchResult from '../Components/SearchResult';
import '../Components/SearchBar.css';
import axios from 'axios';

export default function Searchpage() {
  const [teachers, setTeachers] = useState();
  const [params, setParams] = useState();

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const queryParams = new URLSearchParams(params).toString();
        const response = await axios.get(
          `http://localhost:4006/api/v1/teachers/getall?${queryParams}`,

          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );
        setTeachers(response.data.teachers);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeachers();
  }, [params]);

  return (
    <Column>
      <Line>
        <SearchBar setParams={setParams} />
      </Line>
      <Line>
        <SearchResult teacherList={teachers} />
      </Line>
    </Column>
  );
}
