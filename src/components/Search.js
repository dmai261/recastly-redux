import React from 'react';
 
// class Search extends React.Component {

var Search = function(props) {
  var handleInputChange = function(e) { 
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  // render() {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={this.state.value}
        onChange={this.handleInputChange.bind(this)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
  // }
};

export default Search;
