import React from "react";
import "./Search.css";
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" name="search__bar" id="search__bar" placeholder="Search for emoji"/>
      </div>
    );
  }
}
export default Search;