import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./TeamMember.css";

const TeamMember = (props) => {
  const { name, role, age, salary, netWorth, img } = props.memberInfo;
  return (
    <div className="col">
      <div className="text-dark bg-light card h-100 rounded-pill member-card-img-style mb-2 shadow-sm p-4 mb-4 rounded">
        <img className=" h-75 card-img-top rounded-pill p-3" src={img} alt="" />
        <div className="card-body card-text-style">
          <p className="mb-1">
            <span className="fw-bold">Name: </span>
            {name}
          </p>
          <p className="mb-1">
            <span className="fw-bold">Role: </span>
            {role}
          </p>
          <p className="mb-1">
            <span className="fw-bold">Age: </span>
            {age}
          </p>
          <p className="mb-1">
            <span className="fw-bold">Salary: </span>
            {salary}
          </p>
          <p className="mb-4">
            <span className="fw-bold">Net worth: </span>
            {netWorth}
          </p>
          <div className="add-to-list-btn rounded-pill">
            <button
              onClick={() => props.handleAddToList(props.memberInfo)}
              className="rounded-pill px-3 py-1 btn btn-primary"
            >
              <FontAwesomeIcon className="me-2" icon={faPlusCircle} />
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
