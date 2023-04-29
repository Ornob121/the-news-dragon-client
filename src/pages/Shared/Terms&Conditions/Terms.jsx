import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms&Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
        accusantium ducimus culpa, iusto repellat deleniti ullam aliquid
        reiciendis eius magni!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
