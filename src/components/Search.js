import React from 'react';
 
var Search = function({handleSearchInputChange}) {
  // render() {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(e) => {handleSearchInputChange(e.target.value)}} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

export default Search;