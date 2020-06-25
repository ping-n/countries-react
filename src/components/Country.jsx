import React from "react";

const Country = (props) => {
  const { name, languages, region, flag } = props.country;

  return (
    <div>
      <h3>Name: {name}</h3>
      <span>
        <img src={flag} alt={`${name}'s flag`} />
      </span>
      <br />
      <div>
        <span>Languages: </span>
        <ul>
          {languages.map((i) => {
            return <li>{i.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Country;
