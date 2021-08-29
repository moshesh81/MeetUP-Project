import { useRef } from "react";
import Card from "../layout/ui/Card";
import "./NewMeetUpForm.moudle.css";

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    
    props.onAddNewMeetUp(meetUpData)
  }

  return (
    <Card>
      <form className="form" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>
        <div className="control">
          <label htmlFor="address">address</label>
          <input type="text" id="address" ref={addressInputRef} />
        </div>
        <div className="control">
          <label htmlFor="description">description</label>
          <textarea
            type="text"
            row="5"
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="actions">
          <button>Add event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
