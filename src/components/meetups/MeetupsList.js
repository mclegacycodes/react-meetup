import Meetupsitems from "./Meetupsitems";
import classes from "./MeetupsList.module.css";

function MeetupsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Meetupsitems 
        key={meetup.id}
         id={meetup.id}
          image={meetup.image}
           address={meetup.address} 
           title={meetup.title} description={meetup.description} />
      ))}
    </ul>
  );
}

export default MeetupsList;
