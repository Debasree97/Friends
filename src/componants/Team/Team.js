import React, { useEffect, useState } from "react";
import SelectMember from "../SelectMember/SelectMember";
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

const Team = () => {
  const [teamMemberInfo, setTeamMemberInfo] = useState([]);

  const [addMember, setAddMember] = useState([]);

  useEffect(() => {
    fetch("./team.JSON")
      .then((res) => res.json())
      .then((data) => setTeamMemberInfo(data));
  }, []);

  const handleAddToList = (teamMemberInfo) => {
    const newSelectedMember = [...addMember, teamMemberInfo];
    setAddMember(newSelectedMember);
    };
    
  return (
    <div className="body-container">
      <div className="team-member-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {teamMemberInfo.map((memberInfo) => (
          <TeamMember
            memberInfo={memberInfo}
            key={memberInfo.id}
            handleAddToList={handleAddToList}
          ></TeamMember>
        ))}
      </div>
      <div className="select-member-container">
        <SelectMember
          addMember={addMember}
        ></SelectMember>
      </div>
    </div>
  );
};

export default Team;
