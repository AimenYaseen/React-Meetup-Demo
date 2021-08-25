import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouriteContext from "../state-store/FavouriteContext";

const MeetupItem = (props) => {
  const favoriteContext = useContext(FavouriteContext);
  const isItemFavorite = favoriteContext.itemIsFavorite(props.id);

  const changeFavoriteStatusHandler = () => {
    if (isItemFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={changeFavoriteStatusHandler}>
            {isItemFavorite ? "Remove from Favorite" : "To Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
