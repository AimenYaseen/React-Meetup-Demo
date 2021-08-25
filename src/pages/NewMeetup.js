import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-database-f8942-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST", // to store data on database; by default Get
        body: JSON.stringify(meetupData), // Data to be added must be in JSON FORM
        headers: {
          "Content-Type": "application/json", // Tells that data is in JASON form
        },
      }
    ).then(() => {
      history.replace("/"); // to refer to a new page; 'push' can also used
    });
  };

  return (
    <section>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
