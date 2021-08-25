import { createContext, useState } from "react";

const FavouriteContext = createContext({
  // context is used to manage more than one states affects different components
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetupFavorite) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavouriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetupFavorite) => {
    return setUserFavorites((preUserFavorites) =>
      preUserFavorites.concat(meetupFavorite)
    );
  };

  const removeFavoriteHandler = (meetupId) => {
    return setUserFavorites((preUserFavorites) =>
      preUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    // to update above values
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
