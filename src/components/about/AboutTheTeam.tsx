import { useState, useEffect } from "react";
import Styles from "../../scss/meet-devs/theTeam.module.scss";
import PersonCard from "../PersonCard";

function TheTeam() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = new Request(
      `/api/member`
    );

    fetch(request)
      .then((response) => {
        response.json()
          .then((jsonData) => {
            setData(jsonData.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div id="TheTeam" className={Styles.container}>
      <h2 className={Styles.heading}>The Team</h2>
      <div className={Styles.teamMembers}>
        {/* Map through all members retrieved from backend */}
        {data.map((data: any) => (
          <PersonCard
            key={data.id}
            name={data.name}
            image={data.image}
            position={data.position}
            quote={data.quote}
            fb={data.facebook}
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
