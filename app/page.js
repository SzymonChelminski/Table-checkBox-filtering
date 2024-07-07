"use client";

//Mock data
import mockData from "../../table-checkbox/MOCK_DATA.json";

//Hooks
import { useState, useRef } from "react";

export default function page() {
  const [usersData] = useState(mockData);
  const tableBodyRef = useRef(null);

  function handleInput(e) {
    //Filtering data with checkboxes
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i][e.currentTarget.name] !== e.currentTarget.value)
        tableBodyRef.current.children[i].classList.toggle("hide");
    }
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody ref={tableBodyRef}>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>
          <input
            type="checkbox"
            value="Male"
            name="gender"
            onChange={handleInput}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            value="Teacher"
            name="job"
            onChange={handleInput}
          />
          Teacher
        </label>
        <label>
          <input
            type="checkbox"
            value="Actuary"
            name="job"
            onChange={handleInput}
          />
          Actuary
        </label>
      </form>
    </main>
  );
}
