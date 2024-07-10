import React from "react";
import "./App.css";
//Мой вариант начало
// class App extends React.Component {
//   state = {
//     quantity: 1,
//     show: true,
//     max: 5,
//     min: 0,
//   };
//   IncrementItem = () => {
//     this.setState((prevState) => {
//       if (prevState.quantity < 20) {
//         return {
//           quantity: prevState.quantity + 1,
//         };
//       } else {
//         return null;
//       }
//     });
//   };

//   DecreaseItem = () => {
//     this.setState((prevState) => {
//       if (prevState.quantity > 0) {
//         return {
//           quantity: prevState.quantity - 1,
//         };
//       } else {
//         return null;
//       }
//     });
//   };
//   ToggleClick = () => {
//     this.setState({
//       show: !this.state.show,
//     });
//   };
//   handleChange = (event) => {
//     this.setState({ quantity: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.IncrementItem}>+</button>
//         <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
//         <button onClick = {this.DecreaseItem}>-</button>
//       </div>
//     );
//   }
// }

// export default App;
//Мой вариант конец

//Вариант курса
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App" style={{ margin: "auto", width: "300px" }}>
        <button onClick={this.decrement}>-</button>
        {/* Отображается текущее состояние ↓↓↓↓↓↓↓↓ */}
        <span style={{ margin: "0 0.75rem", display: "inline-block" }}>
          {" "}
          {this.state.count}
        </span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
//Вариант курса
