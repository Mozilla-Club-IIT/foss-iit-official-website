import { useState, useEffect } from "react";
import Styles from "../../scss/meet-devs/theTeam.module.scss";
import PersonCard from "../PersonCard";
import data from "../../assets/data/comittee";

function TheTeam() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const request = new Request(`/api/member`);

  //   fetch(request)
  //     .then((response) => {
  //       response
  //         .json()
  //         .then((jsonData) => {
  //           setData(jsonData.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div id="TheTeam" className={Styles.container}>
      <h2 className={Styles.heading}>Board of Officials</h2>
      <div className={Styles.teamMembers}>
        {/* Map through all members retrieved from backend */}
        {data.map((data) => (
          <PersonCard
            key={data.id}
            name={data.name}
            image={data.image}
            position={data.position}
            quote={data.quote}
            be={data.be}
            port={data.portfolio}
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
