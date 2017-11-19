import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => (
  <Link
    className="button"
    role="button"
    value={props.title}
    name={props.title}
    to="/linked-page">
    {props.title}
  </Link>
);

module.exports = Button;