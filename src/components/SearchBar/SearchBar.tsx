import React, { useState} from "react";
import * as drinkService from './../../services/drinkService'
import './SearchBar.css'


interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}


const SearchBar: React.FC<DataFetchingProps>  = ({ setRecipe }) => {

  const [searchQuery, setSearchQuery] = useState<string>('');


  const searchDrinkName = async (query: string) => {
    const drinks = await drinkService.searchByName(query)
    setRecipe(drinks)
  }



  const handleSearchDrink = (query: string) => {
    searchDrinkName(query)
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchDrink(searchQuery); 
  };


  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange}  className="d-search" placeholder="Search A Drink"/>
        <button type="submit" className="search-a-drink-btn">Search</button>
      </form>
    </div>
  )
}

export default SearchBar