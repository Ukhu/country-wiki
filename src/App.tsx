import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import api from "./utils/api";
import { ICountry } from "./types/country";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CountryInfo from "./pages/CountryInfo";

type TErrorType = "not found" | "error";

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [errorType, setErrorType] = useState<TErrorType | null>(null);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchedCountries = await api.fetchCountries();
        fetchedCountries.length === 0
          ? setErrorType("not found")
          : setCountries(fetchedCountries);
      } catch (err) {
        setErrorType("error");
      }
    };
    fetchCountries();
  }, []);

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/countries/:id">
          <CountryInfo countries={countries} />
        </Route>
        <Route path="/">
          <Homepage countries={countries} error={errorType} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
