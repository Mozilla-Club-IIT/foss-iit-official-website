import { useState, useEffect } from "react";
import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";
import data from "../../assets/data/events";

function UpcomingEvents() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const request = new Request(
  //     `/api/event?sort=date&order=DESC&date=${Date()}&dateOrder=lt`
  //   );

  //   fetch(request)
  //     .then((response) => {
  //       response.json()
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
    <div className={Styles.container}>
      <h2>Past Events</h2>
      <Carousel>
        {data.map((data: any) =>
          data.pastEvent ? (
            <EventCarousel
              key={data.id}
              name={data.name}
              image={data.image}
              des={data.description}
              date={data.date}
              btn={data.buttonTxt}
              link={data.link}
              pastEvent={true}
            />
          ) : (
            <></>
          )
        )}
      </Carousel>
    </div>
  );
}

export default UpcomingEvents;
