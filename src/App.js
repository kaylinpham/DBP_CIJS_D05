import "./App.css";
import Projects from "./Components/Projects";
import Search from "./Components/Search";
import React, { Component } from "react";
const url = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=1aaaa38d-c00b-4eef-9de1-1bb549698b98`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.getInp = this.getInp.bind(this);
    this.getProjects = this.getProjects.bind(this);
  }
  getInp(e) {
    const obj = this;
    e.preventDefault();
    obj.setState({ title: e.target.value });
  }
  componentDidMount() {
    const obj = this;
    let projects = [];
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === 404 + "") {
          alert("Error Fetching 😩");
        } else {
          obj.setState({ data: data });
          setTimeout(() => {
            projects.push(
              <Projects projects={obj.state.data.projects.project} />
            );
            obj.setState({ projects: projects });
          }, 0);
        }
      });
  }
  getProjects(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      let obj = this;
      let filteredProject = [];
      obj.state.data.projects.project.map((value) => {
        if (value['title'].toLowerCase().indexOf(obj.state.title.toLowerCase())!==-1) {
          filteredProject.push(value);
        }
      });
      let projects = [];
      console.log(filteredProject);
      projects.push(<Projects projects={filteredProject} />);
      obj.setState({ projects: projects });
    }
  }
  render() {
    return (
      <div className="container">
        <Search onInput={this.getInp} onEnter={this.getProjects} />
        {this.state.projects}
      </div>
    );
  }
}

export default App;
