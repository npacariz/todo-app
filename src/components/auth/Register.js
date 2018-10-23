import React from "react";

const Register = ({ errors, listOfCountries, handleChange, handleSubmit }) => {
  let shouldMarkError = field => {
    console.log(errors);
    const hasError = errors[field];
    return hasError ? (
      <p className="alert alert-danger error-container">{hasError}</p>
    ) : (
      false
    );
  };

  let selectCountry = listOfCountries
    ? listOfCountries.map(country => {
        return (
          <option key={country} value={country}>
            {country}
          </option>
        );
      })
    : "";
  return (
    <div className="Login">
      <h1>Please singup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={handleChange}
          />
          {shouldMarkError("firstName")}
        </div>
        <div className="form-group">
          <input
            type="type"
            placeholder="Last Name"
            id="lastName"
            onChange={handleChange}
          />
          {shouldMarkError("lastName")}
        </div>
        <div className="form-group">
          <input
            type="type"
            placeholder="Company"
            id="company"
            onChange={handleChange}
          />
          {shouldMarkError("company")}
        </div>
        <div className="form-group">
          <select id="country" onChange={handleChange}>
            <option>Select country</option>
            {selectCountry}
          </select>
          {shouldMarkError("country")}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          {shouldMarkError("email")}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          {shouldMarkError("password")}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            id="password_confirmation"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
