import React from 'react';
import { SignUpForm } from '../components/AuthForms.js';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
        passwordValid: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    console.log(event.target)
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  

  /**
   * Render the component.
   */
  render() {
    console.log(this.state)
    return (
      <section className="hero is-fullheight is-medium is-primary is-bold">
        <div className="hero-body">
          <SignUpForm 
            user={this.state.user}
            onSubmit={this.processForm}
            onChange={this.changeUser}
          />
        </div>
      </section>
    );
  }

}

export default SignUpPage;