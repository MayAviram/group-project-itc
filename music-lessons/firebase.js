import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOUHXxXzJTAQ-p0_wMdbvPMmu3PaTZQBQ",
  authDomain: "group-project-itc.firebaseapp.com",
  projectId: "group-project-itc",
  storageBucket: "group-project-itc.appspot.com",
  messagingSenderId: "399493714522",
  appId: "1:399493714522:web:692fcb6677319a2896be63",
  measurementId: "G-JZ5BSBG8F1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
