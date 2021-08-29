import MeetUpList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";
function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [lodadedMeetups, setLodadedMeetups] = useState([]);


useEffect(()=>{
  setIsLoading(true)
  fetch("https://meetup-4f376-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      const meetups=[];
      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup)
      }

      setIsLoading(false);
      setLodadedMeetups(meetups);
    });
},[])


  if (isLoading) {
    <section>
      <h1>Loading...</h1>
    </section>;
  }
  return (
    <section>
      <h1>ALL Meetups</h1>
      <MeetUpList meetups={lodadedMeetups} />
    </section>
  );
}
export default AllMeetUpsPage;
