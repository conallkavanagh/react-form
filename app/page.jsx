'use client';
import { useState } from "react";
// import { ReactDOM } from "react";

export default function Home() {
  return (
    <Form />
  )
}

function Form() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`username: ${inputs.username} age: ${inputs.age} dob: ${inputs.dob}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label>
      <br />
      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
      </label>
      <br />
      <label>Enter your dob:
        <input type="date" name="dob" value={inputs.dob || ""} onChange={handleChange} />
      </label>
      <br />
      <label>Enter a picture:
        <input type="file" name="pic" value={inputs.pic || ""} onChange={handleChange} />
      </label>
      <br />
        <input type="submit" />
      <br />
    </form>
  )
}
