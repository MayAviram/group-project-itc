import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import MyTeachers from "../Components/MyTeachers";
import Favorite from "../Components/Favorite";
import ProfileDetails from "../Components/ProfileDetails";

export default function MyInfo() {
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
              <Tab label="My Teachers" value="1" />
              <Tab label="My Profile" value="2" />
              <Tab label="Favorite" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <MyTeachers />
          </TabPanel>
          <TabPanel value="2">
            <ProfileDetails />
          </TabPanel>
          <TabPanel value="3">
            <Favorite />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
