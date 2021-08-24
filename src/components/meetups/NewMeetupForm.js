import "./NewMeetupForm.css";
import Card from "../UI/Card";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className="form">
        <div className="control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className="control">
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className="control">
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description"></textarea>
        </div>
        <div className="actions">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
