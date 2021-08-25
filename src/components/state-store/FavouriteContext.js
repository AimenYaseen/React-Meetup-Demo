import { createContext, useState } from "react";

const FavouriteContext = createContext({
  // context is used to manage more than one state
  favorites: [],
  totalFavorites: 0,
});

const FavouriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    // to update above values
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
