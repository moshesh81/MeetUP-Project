import { filter } from "async";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteItem)=>{},
  removeFavorite:(meetupId)=>{},
  itemIsFavorite: (meetupId)=>{}
});

export const FavoritesProvider = (props) => {

  const [userFavorites, setUserFavorites] = useState([]) 

function addFavoriteItem(favoriteItem){
  setUserFavorites((prevState)=>{
    return prevState.concat(favoriteItem)
  })
}

function removeFavoriteHandle(meetupId){
  setUserFavorites(prevState=>{
    return prevState.filter(meetup=> meetup.id!==meetupId)
  })
}
function itemIsFavoriteHandler(meetupId){
  return userFavorites.some(meetup=> meetup.id ===meetupId)
}
  const context={
    favorites:userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:addFavoriteItem,
    removeFavorite:removeFavoriteHandle,
    itemIsFavorite: itemIsFavoriteHandler,
  }


  return (
    <FavoritesContext.Provider 
    value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;