import React, { Component } from "react";
import Country from "./Country";

export default class App extends Component {
  async componentDidMount() {
    await this.GetData();
  }

  async GetData() {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const countries = await response.json();
    console.log(countries);
    this.setState({ countries: countries });
  }

  render() {
    const countries = this.state?.countries;
    return (
      <>
        <h1>Countries Data</h1>
        <div>
          {countries &&
            countries.map((country, index) => {
              return <Country country={country} index={index} />;
            })}
        </div>
      </>
    );
  }
}
