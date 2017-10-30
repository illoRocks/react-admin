import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Components
import Navbar from "../components/Navbar"

// Pages
import HomePage from "./Overview"
import LoginPage from "./LoginPage"
import Post from "./Post"




const pages = [
  { path: "/", label: "HomePage", component: HomePage, exact: true },
  { path: "/login", label: "LoginPage", component: LoginPage, exact: false },
  { path: "/post", label: "Post", component: Post, exact: false }
]

function setRoutes(children) {
  return(children.map((child, i) => 
      <Route key={i} exact={child.exact} path={child.path} component={child.component} />
  ))
}

const Layout = () => (
  <Router>
    <div>
      <Navbar pages={pages} />

      {setRoutes(pages)}
    </div>
  </Router>
)

export default Layout