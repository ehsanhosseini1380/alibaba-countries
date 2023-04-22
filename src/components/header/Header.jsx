import "./module.css";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";
const Header = () => {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="logo">Where in the world</div>
      <button className="mode-button" onClick={toggleMode}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>

        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};
export default Header;
