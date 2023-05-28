import Styles from "../../../scss/events/AllEvents/EventCard.module.scss";
import EventCard from "../allEvents/EventCard";
import { eventsData } from "../../../assets/data/eventsData";

function Timelinkcard() {
  return (
    <div className={Styles.mainWrapper}>
      {eventsData.map((data: any) => (
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
