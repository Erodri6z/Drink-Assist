import React, { useState} from "react";
import * as drinkService from './../../services/drinkService'

const SearchBar: React.FC  = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchDrink = (query: string) => {
    drinkService.searchByName(query)
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchDrink(searchQuery); 
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange}  className="d-search" placeholder="Search A Drink"/>
        <button type="submit" className="search-a-drink-btn">Search</button>
      </form>
    </div>
  )
}

export default SearchBar