import Styles from "../../scss/meet-devs/theTeam.module.scss";
import PersonCard from "../PersonCard";
// import { useQuery } from "@tanstack/react-query";
// import { getPeople } from "../../lib/api";
import { CommitteeData, committeeData } from "../../assets/data/committeeData";

function TheTeam() {
  // const { data, isLoading } = useQuery(["people"], getPeople);
  //
  // if (isLoading) {
  //   return null;
  // }

  return (
    <div id="TheTeam" className={Styles.container}>
      <h2 className={Styles.heading}>Board of Officials</h2>
      <div className={Styles.teamMembers}>
        {/* Map through all members retrieved from backend */}
        {committeeData.map((data: CommitteeData) => (
          <PersonCard
            key={data.id}
            name={data.name}
            image={data.image}
            position={data.position}
            quote={data.quote}
            be={data.behance}
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
