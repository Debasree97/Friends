import React from "react";
import "./SelectMember.css";

const SelectMember = (props) => {
  const { addMember } = props;
  let totalSalary = 0;
  let addedName = [];
  for (const addInfo of addMember) {
    totalSalary = addInfo.salary + totalSalary;
    addedName.push(addInfo.name);
  }

  return (
    <div className="selectedInfo p-3">
      <p>
        <span className="fw-bold">Total Selected: </span> {addMember.length}
      </p>
      <hr />
      <p>
        <span className="fw-bold">Total Salary: $</span>
        {totalSalary}
      </p>
      <hr />
      <p className="fw-bold d-block text">Added Name:</p>
      {addedName.map((newName) => (
        <ul>
          <li>{newName}</li>
        </ul>
      ))}
      <p></p>
    </div>
  );
};

export default SelectMember;
