import React from "react";
import Styles from "../../scss/meet-devs/theTeam.module.scss";
import PersonCard from "../PersonCard";
import data from "../../assets/data/teamData";

function TheTeam() {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.heading}>The Team</h2>
      <div className={Styles.teamMembers}>
        {data.map((data) => (
          <PersonCard
            key={data.id}
            name={data.name}
            image={data.image}
            position={data.position}
            quote={data.quote}
            fb={data.fb}
            twt={data.twt}
            in={data.in}
            insta={data.insta}
            git={data.git}
            yt={data.yt}
          />
        ))}
      </div>
    </div>
  );
}

export default TheTeam;
