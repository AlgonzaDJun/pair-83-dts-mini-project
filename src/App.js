import "./App.css";
import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

// import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material";
import Row from "./components/Row";
import requests from "./apis/request";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Row title="Popular" fetchUrl={requests.fetchPopular} />
        <Row title="Continue, Watching" fetchUrl={requests.fetchContinueWatch} />
        <Row title="On the Agenda" fetchUrl={requests.fetchAgenda} />
        <Row title="Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Top 10 Indonesian Movies" fetchUrl={requests.fetchTopIndonesian} />
        <Row title="Watch Again" fetchUrl={requests.fetchWatchAgain} />
        <Row title="My List" fetchUrl={requests.fetchMyList} />
      </div>
    </ThemeProvider>
  );
}

export default App;
