import { useEffect, useState } from "react";
import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import EventCard from "../allEvents/EventCard";
import data from "../../../assets/data/events";

function Timelinkcard() {
  // const [data, setData]: any = useState([]);

  // useEffect(() => {
  //   const request = new Request("/api/event?sort=date&order=ASC");

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
    <div className={Styles.mainWrapper}>
      {data.map((data: any) => (
        <div className={Styles.mainContainer}>
          <EventCard
            key={data.id}
            name={data.name}
            des={data.description}
            date={data.date}
            btn={data.buttonTxt}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Timelinkcard;
