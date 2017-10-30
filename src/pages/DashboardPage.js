import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Sidemenu from '../components/Sidemenu.js';
import PostForm from '../components/PostForm.js';
import Overview from '../components/Overview.js';



// utils
import Card from '../utils/Card.js';
import {Input, Submit} from '../utils/Form.js';






class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {

    const asideStyle = { paddingRight: '0px' }

    return (
      <section className="main-content columns is-fullheight">

        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile" style={asideStyle}>
          <Sidemenu />
        </aside>

        <div className="container column is-10">
          <div className="section">

            <Switch>
              <Route exact path="/dashboard/" component={Overview} />
              <Route path="/dashboard/newpost" component={PostForm} />
              {/* <Route path="/dashboard" component={DashboardPage} /> */}
            </Switch>


          </div>
        </div>
      </section>
    );
  }

}

export default LoginPage;
