import React, { useState } from "react";
import Styles from "./styles.module.scss";
import TimeSlots from "./TimeSlots";
import Button from "../Button";

const Agenda = () => {
  const [activeSlot, setActiveSlot] = useState(1);
  const slots = [
    {
      time: "9:00am- 10:00am",
      title: "Opening Ceremony",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "11am- 12:00am",
      title: "Keynote",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "1pm- 1:30pm",
      title: "Break",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "2pm- 1:30pm",
      title: "Break Out Session",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "2:30am- 3:30pm",
      title: "Break Out Session",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "2:30am- 3:30pm",
      title: "Break Out Session",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "4:00pm- 4:30pm",
      title: "Break",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "4:00pm- 4:30pm",
      title: "Break Out Session",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
    {
      time: "4:00pm- 4:30pm",
      title: "Closing Ceremony",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae aliquid fugiat adipisci unde quis sit quas suscipit? Eveniet laborum ducimus rem enim aut sapiente, architecto inventore, repudiandae reprehenderit molestias provident nam sed omnis. Et libero rerum suscipit beatae, veritatis molestias officia vel quos! Inventore minima exercitationem enim ut veritatis?",
    },
  ];
  return (
    <div className={Styles.container}>
      <section className={Styles.content}>
        <div>
          <h2>The Agenda</h2>
          <p>Detailed schedule for the event</p>
        </div>
        <TimeSlots
          slots={slots}
          activeSlot={activeSlot}
          setActiveSlot={setActiveSlot}
        />
        <div className={Styles.break_out}>
          <h2>{slots[activeSlot]?.title}</h2>
          <p>{slots[activeSlot]?.details}</p>
        </div>
        <Button bgColor="#4285F4">Get a Ticket</Button>
      </section>
    </div>
  );
};

export default Agenda;
