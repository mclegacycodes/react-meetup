import classes from "./Meetupsitems.module.css";

function Meetupsitems(props) {
  return (
    <li className={classes.list}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} width="400px" />
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{props.title}</h3>
        <address className={classes.address}>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button className={classes.btn}>Interested</button>
      </div>
    </li>
  );
}
export default Meetupsitems;
