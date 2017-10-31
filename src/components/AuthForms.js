import React from "react";
import { Link } from 'react-router-dom'
import { Input, Submit } from "../utils/Form";
import Card from "../utils/Card";

const LoginForm = ({ user, onSubmit, onChange }) => (
  <div className="container has-text-centered">
    <div className="columns is-centered">
      <div className="column is-6-tablet is-4-desktop">
        <Card>
          <form onSubmit={onSubmit} action="/">
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              placeholder="Email"
              icon="fa fa-envelope"
            />
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              placeholder="Repeat assword"
              icon="fa fa-lock"
            />
            <Submit text="Login" />
          </form>
        </Card>
        <p className="has-text-grey">
          <Link to="/signup">Sign Up</Link> &nbsp;·&nbsp;
          <Link to="/">Forgot Password</Link>
        </p>
      </div>
    </div>
  </div>
)

const SignUpForm = ({ user, onSubmit, onChange }) => (
  <div className="container has-text-centered">
    <div className="columns is-centered">
      <div className="column is-6-tablet is-4-desktop">
        <Card>
          <form onSubmit={onSubmit} action="/">
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              placeholder="Email"
              icon="fa fa-envelope"
            />
            <Input
              type="password"
              name="passwordValid"
              value={user.passwordValid}
              onChange={onChange}
              placeholder="Password"
              icon="fa fa-lock"
            />
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              placeholder="Repeat assword"
              icon="fa fa-lock"
            />
            <Submit text="Sign Up" />
          </form>
        </Card>
        <p className="has-text-grey">
          <Link to="/">Allready registered?</Link>
        </p>
      </div>
    </div>
  </div>
)


export { LoginForm, SignUpForm }
