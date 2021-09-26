import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./TeamMember.css";

const TeamMember = (props) => {
  const { name, role, age, salary, netWorth, img } = props.memberInfo;
  return (
    <div className="col team-member">
      <div className="card h-100 rounded-pill member-card-img-style">
        <img className="card-img-top h-75 rounded-pill" src={img} alt="" />
        <div className="card-body">
          <p>
            <span className="text-style">Name: </span>
            {name}
          </p>
          <p>
            <span className="text-style">Role: </span>
            {role}
          </p>
          <p>
            <span className="text-style">Age: </span>
            {age}
          </p>
          <p>
            <span className="text-style">Salary: </span>
            {salary}
          </p>
          <p>
            <span className="text-style">Net worth:</span>
            {netWorth}
          </p>
          <div className="add-to-list-btn rounded-pill">
            <button
              onClick={() => props.handleAddToList(props.memberInfo)}
              className="rounded-pill"
            >
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faPlusCircle}
              />
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
