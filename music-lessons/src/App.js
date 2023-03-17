import "./App.css";
import { Grid } from "./Layouts/layouts";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Grid>
        <Navbar />
        <main>
          <h1>MUSIC LESSONS</h1>
          <h4>START NOW</h4>
          <div>THIS IS OUR WEBSITE</div>
        </main>
        <footer>&#169; LESSONS 4 U</footer>
      </Grid>
    </div>
  );
}

export default App;
