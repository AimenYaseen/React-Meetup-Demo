import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../state-store/FavouriteContext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoriteContext = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new_meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
