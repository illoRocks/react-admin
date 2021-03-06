import React from 'react';

const Card = ({ children, title, fill }) => (
  <div>
    <div className="card has-shadow">
      {title &&
        <div className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </div>}
      <div className={!fill && "card-content"}>
          {children}
      </div>
    </div>
    <br />
  </div>
)


export default Card