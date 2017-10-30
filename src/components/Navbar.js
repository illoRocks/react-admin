import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = ({ routes }) => {

  const navLinks = routes.map((page, i) => {
    
    var className = "navbar-item is-tab"
    
    if (page.sidebar) {
      className = className + " is-hidden-tablet"
    }

    return (
      <Link key={i} to={page.path} className={className}>
        {page.label}
      </Link>
    )
  })

  // Get all "navbar-burger" elements
  document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        })
      })
    }
  })

  return (
    <nav className="navbar is-primary has-shadow">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="/illorocks_black.png" alt="illo.rocks" width="112" height="28" />
        </Link>

        <div className="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          {navLinks}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


      // <nav class="nav has-shadow">
      //   <div class="container">
      //     <div class="nav-left">
      //       <a class="nav-item">
      //         Website
      //       </a>
      //     </div>
      //     <label for="menu-toggle" class="nav-toggle">
      //       <span></span>
      //       <span></span>
      //       <span></span>
      //     </label>
      //     <input type="checkbox" id="menu-toggle" class="is-hidden" />
      //     <div class="nav-right nav-menu">
      //       <a class="nav-item is-tab is-hidden-tablet">
      //         <span class="icon"><i class="fa fa-home"></i></span> Home
      //       </a>
      //       <a class="nav-item is-tab is-hidden-tablet">
      //         <span class="icon"><i class="fa fa-table"></i></span> Links
      //       </a>
      //       <a class="nav-item is-tab is-hidden-tablet">
      //         <span class="icon"><i class="fa fa-info"></i></span> About
      //       </a>

      //       <a class="nav-item is-tab is-active">
      //         <span class="icon"><i class="fa fa-user"></i></span>
      //       </a>
      //       <a class="nav-item is-tab">
      //         <span class="icon"><i class="fa fa-sign-out"></i></span>
      //       </a>
      //     </div>
      //   </div>
      // </nav>