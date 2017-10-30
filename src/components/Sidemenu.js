import React from 'react'
import { Link } from 'react-router-dom'

// import styles for this component
import '../styles/menu.css'

// routes for nav-links
import routes from "../routes"


const MenuItem = ({ path, label, icon }) => (
  <li>
    <Link to={path} className="item active" aria-expanded="false">
      {icon &&
        <span className="icon">
          <i className={icon} aria-hidden="true"></i>
        </span>
      }
      <span className="name">{label}</span>
    </Link>
  </li>
)

const Sidemenu = () => {

  const menuLinks = routes.map((page, i) => {

    if (!page.sidebar) {
      return null
    }

    return (
      <MenuItem
        key={i}
        label={page.label}
        path={page.path}
        icon={page.icon}
      />
    )
  })

  return (
    <ul className="menu-list">
      {menuLinks}
    </ul>
  )
};

export default Sidemenu;


