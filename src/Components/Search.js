import React from "react";
import { emojiList } from "./emojiList";
import "./Search.css";
import Emoji from "./Emoji";
import Emojis from "./Emojis";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", list: [] };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(e) {
    this.setState({ searchText: e.target.value });
    let listEmoji = [];
    let filteredList = emojiList.filter(
      (c) => c.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    if(this.state.searchText===""){
      filteredList=emojiList;
    }
    filteredList.map((value) => {
      listEmoji.push(<Emoji sympol={value.symbol} title={value.title} />);
    });
    this.setState({ list: listEmoji });
  }
  render() {
    return (
      <div>
        <div>
          <input
            onKeyUp={this.changeInput}
            type="text"
            name="search__bar"
            id="search__bar"
            placeholder="Search for emoji"
          />
        </div>
        <Emojis list={this.state.list} />
      </div>
    );
  }
}
export default Search;
