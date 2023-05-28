// Event data that will be used throughout the site
// Events must contain the following data in the following format

type Event = {
  id: number;
  name: string;
  image: string;
  description: string;
  date: string;
  link: string;
  buttonText: string;
}

// Sorted data
export const eventsData: Event[] = [
  {
    id: 0,
    name: "ReactCon Sri Lanka 2023",
    image: "react_con_sl_2023.png",
    description: "The first ever ReactCon to happen in Sri Lanka!",
    date: "2023-07-10",
    link: "https://www.example.com",
    buttonText: "Learn More",
  },
  {
    id: 1,
    name: "UX/UI Bootcamp 2022",
    image: "ux_ui_bootcamp_2022.png",
    description: "A wonderful chance to learn all there is to know about UX from leaders in the industry.",
    date: "2022-12-25",
    link: "https://www.example.com",
    buttonText: "Learn More",
  }
].sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);

  return aDate > bDate ? -1 : 1;
});

export const pastEventsData: Event[] = eventsData.filter((event) => new Date(event.date) < new Date());
export const upcomingEventsData: Event[] = eventsData.filter((event) => new Date(event.date) >= new Date());

