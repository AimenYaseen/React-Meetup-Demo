import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouriteContext from "../components/state-store/FavouriteContext";

const FavouritesPage = () => {
  const favoriteContext = useContext(FavouriteContext);
  let content;
  if (favoriteContext.totalFavorites === 0) {
    content = <p>You have no Favorites, Please Add some Favorites!</p>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
