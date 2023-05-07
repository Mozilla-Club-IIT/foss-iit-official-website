import { useState, useEffect } from "react";
import Styles from "../../scss/meet-devs/theTeam.module.scss";
import PersonCard from "../PersonCard";
import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../lib/api";

function TheTeam() {
  const { data, isLoading } = useQuery(["people"], getPeople);

  if (isLoading) {
    return null;
  }

  return (
    <div id="TheTeam" className={Styles.container}>
      <h2 className={Styles.heading}>Board of Officials</h2>
      <div className={Styles.teamMembers}>
        {/* Map through all members retrieved from backend */}
        {data.map((data: any) => (
          <PersonCard
            key={data._id}
            name={data.name}
            image={data.image}
            position={data.position}
            quote={data.quote}
            be={data.facebook}
            twt={data.twitter}
            in={data.linkedin}
            insta={data.instagram}
            git={data.github}
            yt={data.youtube}
          />
        ))}
      </div>
    </div>
  );
}

export default TheTeam;
