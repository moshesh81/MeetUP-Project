import NewMeetUpForm from "../components/meetup/NewMeetUpForm";
import {useHistory} from "react-router-dom";
function NewMeetUpPage(){
  const history= useHistory();

  function handleNewMeetUp(meetUpData){

    fetch("https://meetup-4f376-default-rtdb.firebaseio.com/meetups.json",
    {
      method :"POST",
      body:JSON.stringify(meetUpData),
      headers:{
        "content-Type":"application/json",
      },

    }
    ).then(()=>{history.replace("/")}
    )
  };
  return (
  <div>Add a new Meetup
  <NewMeetUpForm onAddNewMeetUp={handleNewMeetUp}/>
  
  </div>
  )
}
export default NewMeetUpPage;