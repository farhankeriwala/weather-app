import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "bootstrap/dist/css/bootstrap.css";
import "./search.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const URL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f1c816f37cmsh22deae249ee8ccdp19b2e0jsn82cd4f9781c5",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      return fetch(URL, options)
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((searchCity) => {
              return {
                value: `${searchCity.latitude} ${searchCity.longitude}`,
                label: `${searchCity.name}, ${searchCity.country}`,
              };
            }),
          };
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate className={"search-bar"}
      placeholder="Search"
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
