import "./App.css";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  )
}

export default App;
