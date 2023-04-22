import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: [],
  setCountries: () => {},
  detailCountry: {},
  setDetailCountry: () => {},
  searchBy: "",
  setSearchBy: () => {},
  value: "",
  setValue: () => {},
});

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [detailCountry, setDetailCountry] = useState({});
  const [searchBy, setSearchBy] = useState("");
  const [value, setValue] = useState("");

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        detailCountry,
        setDetailCountry,
        searchBy,
        setSearchBy,
        value,
        setValue,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
