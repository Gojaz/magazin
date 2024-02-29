import React from "react";

import magnifier from "../../assets/img/magnifier.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slice/searchSlice";

const SearchForm = () => {
  const navigate = useNavigate();
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();


  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (search.length > 0) {
      navigate(`/search?query=${search}`);
    } else {
      console.log();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="header__form">
      <input
        onChange={handleSearch}
        value={search}
        className="header__input"
        type="text"
        placeholder="Наити товар..."
      />
      <button className="btn header__btn">
        <img className="header__magnifier" src={magnifier} alt="" />
      </button>
    </form>
  );
};

export default SearchForm;
