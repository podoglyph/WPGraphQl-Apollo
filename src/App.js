import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const Index = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;

// Send user to login. Get code back. Then make post request with the code and the client secret. If all goes well you should get a token back in a JSON string.
const clientId = '64184';
const clientSecret = 'bHtboxPuEVeXSBNVaVoMcPRUGCkiJII04cINNCLYFOckpmpvDB2HCXYunq4nDLz6';
const redirectUri = 'http://localhost:3000';
const blog = 'http://localhost:8888/wordpress-react-oauth2/wordpress/';

const loginUrl = `https://public-api.wordpress.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&blog=${blog}`;

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
              <a href={loginUrl}>About</a>
            </li>
            <li>
              <Link to="/posts/">Posts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={Login} />
        <Route path="/posts/" component={Posts} />

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
