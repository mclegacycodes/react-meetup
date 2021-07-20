import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation(){
    return (
        <header className={classes.header}>
            <span className={classes.logo}>React Meetups</span>
            <div>
                <ul className={classes.list}>
                    <li>
                        <Link to='/' className={classes.link}>All MeetUps</Link>
                    </li>
                    <li>
                        <Link to='/new' className={classes.link}>New MeetUp</Link>
                    </li>
                    <li>
                        <Link to='/favorites' className={classes.link}>My Favorites</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default MainNavigation;