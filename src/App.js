import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import {Access} from './components/Access';

const Index = () => <h2>Home</h2>;
const Granted = () => <h2>Granted</h2>;

// http://localhost:3000/granted#access_token=pstcqvo4bmrbw0yh2b6v0hmbcnkdoul6gtel3li6&expires_in=3600&token_type=Bearer&scope=basic

const client = new ApolloClient({
  uri: "http://localhost:8888/wordpress-react-oauth2/wordpress/graphql"
});

const AppRouter = () => (


  <Router>
    <ApolloProvider client={client}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/access/">Access</Link>
            </li>
            <li>
              <Link to="/posts/">Posts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/access/" component={Access} />
        <Route path="/posts/" component={Posts} />
        <Route path="/granted/" component={Granted} />

      </div>
    </ApolloProvider>
  </Router>
);

export default AppRouter;

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
//
// const Index = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;
//
// class App extends Component {
//
//   handleClick() {
//   }
//
//   authenticate() {
//     const url = "https://public-api.wordpress.com/oauth2/authorize/";
//     const headers = {
//       client_id: '64161',
//       redirect_uri: 'http://wordpress-205067-692672.cloudwaysapps.com/success',
//       response_type: 'token',
//       blog: 'http://wordpress-205067-692672.cloudwaysapps.com'
//     }
//
//     fetch(url, {
//       headers
//     })
//   .then(response => console.log(response))
//   .catch(error => console.log("Something went wrong: ", error))
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//
//       </div>
//     );
//   }
// }
//
// export default App;
