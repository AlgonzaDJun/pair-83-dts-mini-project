import "./App.css";
import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material";
import RowCard from "./components/RowCard";
import Banner from "./components/Banner";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Home /> */}
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
