import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import EventCard from "../allEvents/EventCard";
import { EventData, eventsData } from "../../../assets/data/eventsData";

function Timelinkcard() {
  return (
    <div className={Styles.mainWrapper}>
      {eventsData.map((data: EventData) => (
        <div key={data.id} className={Styles.mainContainer}>
          <EventCard
            key={data.id}
            name={data.name}
            des={data.description}
            date={data.date}
            btn={data.buttonText}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Timelinkcard;
