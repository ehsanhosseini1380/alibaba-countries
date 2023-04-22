import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import DetailPage from "./pages/detail/DetailPage";
import Header from "./components/header/Header";
import { ThemeProvider } from "./providers/ThemeProvider";
import { CountriesProvider } from "./providers/CountriesProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <div className="app">
          <Header />
          <Router>
            <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/country/:id" element={<DetailPage />} />
            </Routes>
          </Router>
        </div>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
