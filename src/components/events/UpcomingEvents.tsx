import { useEffect, useState } from "react";
import Styles from "../../scss/events/events.module.scss";
import Carousel from "../Carousel";
import EventCarousel from "./eventCarousel";

function UpcomingEvents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = new Request(
      `/api/event?sort=date&order=DESC&date=${Date()}&dateOrder=gt`
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
    <div className={Styles.container}>
      <h2>Upcoming Events</h2>
      {
        (data === undefined) ? <></> :
          <Carousel>
            {data.map((data: any) => (
              <EventCarousel
                key={data.id}
                name={data.title}
                image={data.image}
                des={data.info}
                date={data.date}
                btn={data.btnText}
                link={data.link}
                pastEvent={false}
              />
            ))}
          </Carousel>
      }
    </div>
  );
}

export default UpcomingEvents;
