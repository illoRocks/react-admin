import React from "react";

const Button = ({ text }) => (
  <div className="field">
    <p class="control">
      <button className="button is-primary is-medium is-fullwidth">
        {text}
      </button>
    </p>
  </div>
)

export default Button