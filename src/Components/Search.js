import React from "react";
import { emojiList } from "./emojiList";
import "./Search.css";
import Emoji from "./Emoji";
import Emojis from "./Emojis";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase.config";
try{
  firebase.initializeApp(firebaseConfig);
}catch(e){
  console.log(e.message);
}

const db = firebase.firestore();
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", list: this.initialList() };
    this.changeInput = this.changeInput.bind(this);
  }
  initialList() {
    let initial = [];
    emojiList.map((value) => {
      initial.push(<Emoji sympol={value.symbol} title={value.title} />);
    });
    return initial;
  }
  changeInput(e) {
    this.setState({ searchText: e.target.value });
    setTimeout(() => {
      let listEmoji = [];
      let filteredList = emojiList.filter((c) =>
        c.title.toLowerCase().includes(this.state.searchText.toLowerCase())
      );
      filteredList.map((value) => {
        listEmoji.push(<Emoji sympol={value.symbol} title={value.title} />);
      });
      this.setState({ list: listEmoji });
    }, 0);
  }
  componentDidMount() {
    // Add a second document with a generated ID.
    // db.collection("users")
    //   .add({
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912,
    //   })
    //   .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
  });
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
