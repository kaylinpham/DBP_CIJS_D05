import "./App.css";
import Books from "./Components/Books";
import Search from "./Components/Search";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.getInp = this.getInp.bind(this);
    this.getBooks = this.getBooks.bind(this);
  }
  getInp(e) {
    const obj = this;
    e.preventDefault();
    obj.setState({ title: e.target.value });
  }
  getBooks(e) {
    e.preventDefault();
    const obj = this;
    if (e.keyCode === 13) {
      let books = [];
      let url = `https://www.googleapis.com/books/v1/volumes?q=${obj.state.title}`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.cod === 404 + "") {
            alert("Error Fetching 😩");
          } else {
            obj.setState({ data: data });
            setTimeout(() => {
              books.push(<Books books={obj.state.data} />);
              obj.setState({ books: books });
            }, 0);
          }
        });
    }
  }
  render() {
    return (
      <div className="container">
        <Search onInput={this.getInp} onEnter={this.getBooks} />
        {this.state.books}
      </div>
    );
  }
}

export default App;
