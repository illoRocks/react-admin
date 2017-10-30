import React from "react";
import { Switch, Route } from "react-router-dom";

// import styles and icons
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.min.css";

// components
import Navbar from "./components/Navbar";

// pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";

// routes for nav-links
import routes from "./routes"

const App = () => (
  <div>
    <Navbar routes={routes} />
    
    <Switch>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/dashboard" component={DashboardPage}/>
    </Switch>
  </div>
)


export default App


// import React, { Component } from 'react';

// class App extends Component {
//   state = {users: []}

//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Users</h1>
//         {this.state.users.map(user =>
//           <div key={user.id}>{user.username}</div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;