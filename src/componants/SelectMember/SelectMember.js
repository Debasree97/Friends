import React from "react";

const SelectMember = (props) => {
  const { addMember } = props;
  let totalSalary = 0;
  let addedName = [];
  for (const addInfo of addMember) {
    totalSalary = addInfo.salary + totalSalary;
    addedName.push(addInfo.name);
  }

  return (
    <div>
      <h2>Total Selected: {addMember.length}</h2>
      <h3>Total Salary: {totalSalary}</h3>
      <h3>Added Name: {addedName}</h3>
    </div>
  );
};

export default SelectMember;
