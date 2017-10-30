import React from "react";

const Label = ({ children }) => (
  <div class="field-label is-normal">
    <label class="label">{children}</label>
  </div>
)

const Input = ({ placeholder, type, icon, value, onChange, name }) => (
  <div className="field">
    <p className={`control ${icon && "has-icons-left has-icons-right"}`}>
      <input
        className="input"
        value={value || null}
        type={type || null}
        name={name || null}
        onChange={onChange || null}
        placeholder={placeholder || null}
      />
      <span className="icon is-small is-left">
        <i className={icon}></i>
      </span>
    </p>
  </div>
)

const Submit = ({ text }) => (
  <div className="field">
    <p className="control">
      <input
        type="submit"
        value={text}
        className="button is-primary is-medium is-fullwidth"
      />
    </p>
  </div>
)

export { Label, Input, Submit }