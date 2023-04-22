import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/search-bar/SearchBar";
import Select from "../../components/select/Select";
import Card from "../../components/card/Card";
import { getData } from "../../services/httpManager";
import { ThemeContext } from "../../providers/ThemeProvider";
import { CountriesContext } from "../../providers/CountriesProvider";
import "./module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const { countries, setCountries, searchBy, setSearchBy, value, setValue } =
    useContext(CountriesContext);

  const { isDarkMode } = useContext(ThemeContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchTermChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchBy("name");
    setValue(value);
  };

  const handleFilterChange = (newVal) => {
    setFilter(newVal);
    setSearchBy("region");
    setValue(newVal);
  };

  const handleCardClick = (country) => {
    navigate(`/country/${country.alpha3Code}`);
  };

  useEffect(() => {
    const apiUrl = `https://restcountries.com/v2/${
      searchBy && value ? searchBy : "all"
    }/${value ? value : ""}?fields=population,name,flag,region,capital,alpha3Code`;
    getData(apiUrl)
      .then((data) => setCountries(data)) 
      .catch((error) => console.error(error));
  }, [searchTerm, filter, searchBy, setCountries, value]);

  return (
    <div className={`content ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="search-filter-container">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
        />
        <Select filter={filter} handleFilterChange={handleFilterChange} />
      </div>
      <div className="card-container">
        {countries &&
          countries.map((country) => (
            <Card
              key={country.alpha3Code}
              onClick={() => handleCardClick(country)}
              title={country.name}
              description={{
                population: country.population.toLocaleString(),
                region: country.region,
                capital: country.capital,
              }}
              image={country.flag}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
