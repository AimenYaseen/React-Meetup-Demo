import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true); // getting data OR loading data
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // it only runs whenever certain dependencies in 2nd argument is true
    setIsLoading(true);
    fetch(
      "https://react-meetup-database-f8942-default-rtdb.firebaseio.com/meetups.json"
      //no need to specify method because default funtion in GET
    )
      .then((response) => {
        return response.json(); // convert data in JS
      })
      .then((data) => {
        // data comes in objects but we have an array
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  // here dependency is an empty array, usually it based on external valuss like props, isLoaded etc.
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
