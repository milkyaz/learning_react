import React from "react";
import "./App.css";

//Вариант курса
class App extends React.Component {
  state = {
    posts: [],
    loading: true,
    comments: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, loading: false }));

    this.timerId = setInterval(() => {
      fetch("http://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => this.setState({ comments: data }));
    }, 3000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    console.log("render", this.state.count);
    return (
      <div className="App">
        {this.state.loading ? (
          <h3>Lodaing...</h3>
        ) : (
          <h3>{this.state.posts.length}was loaded</h3>
        )}
      </div>
    );
  }
}

export default App;
//Вариант курса
