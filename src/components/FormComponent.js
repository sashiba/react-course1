import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />{" "}
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />{" "}
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />{" "}
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Please select --</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="south pole">South Pole</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          Kosher?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          Lactose Free?
        </label>
        <br />
        <button>Submit</button>
      </form>
      <br />
      <h2>Entered Info:</h2>
      <p>
        Name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Age: {props.data.age}</p>
      <p>Gender: {props.data.gender}</p>
      <p>Destination: {props.data.destination}</p>
      <p>
        Dietary Resctrictions: Vegan: {props.data.isVegan ? "Yes" : "No"}
        Kosher: {props.data.isKosher ? "Yes" : "No"}
        Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
      </p>
    </main>
  );
}

export default FormComponent;
