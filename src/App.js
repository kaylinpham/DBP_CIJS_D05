import "./App.css";
import Projects from "./Components/Projects";
import Search from "./Components/Search";
import React, { Component } from "react";
const url = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=1aaaa38d-c00b-4eef-9de1-1bb549698b98`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], title:"" };
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
    if (e.keyCode === 13&&this.state.title) {
      let obj = this;
      let filteredProject = [];
      let findingUrl = `https://api.globalgiving.org/api/public/services/search/projects?api_key=1aaaa38d-c00b-4eef-9de1-1bb549698b98&q=${obj.state.title.toLowerCase()}`;
      fetch(findingUrl, {
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
            console.log(data);
            setTimeout(() => {
              filteredProject.push(
                <Projects
                  projects={obj.state.data.search.response.projects.project}
                />
              );
              obj.setState({ projects: filteredProject,title:"" });
            }, 0);
          }
        });
    }
  }
  render() {
    return (
      <div className="container">
        <Search default={this.state.title} onInput={this.getInp} onEnter={this.getProjects} />
        {this.state.projects}
      </div>
    );
  }
}

export default App;
