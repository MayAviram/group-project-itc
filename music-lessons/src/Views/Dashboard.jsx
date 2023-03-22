import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import TeachersList from "../Components/Teachers/TeachersList";
import UsersList from "../Components/Users/UsersList";
export default function Dashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          typography: "body1",
          height: "100%",
        }}
      >
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              orientation="vertical"
            >
              <Tab label="Teachers List" value="1" />
              <Tab label="Users List" value="2" />
              {/* <Tab label="Favorite" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <TeachersList />
          </TabPanel>
          <TabPanel value="2">
            <UsersList />
          </TabPanel>
          {/* <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
}
