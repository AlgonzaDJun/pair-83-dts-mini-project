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


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" color="primary">
        {/* <Navbar/>
        <Banner />
        <RowCard/> */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
