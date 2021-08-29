import {useContext} from 'react'
import FavoritesContext from "./../store/favorites-context"

import MeetUpList from '../components/meetup/MeetupList';


function FavoritesPage(){
  const favoriteCtx=useContext(FavoritesContext)
  let content;
  
  if(favoriteCtx.totalFavorites===0){
    content=<p>there is no favorites meetup, start adding some?</p>
  }else{
      content = <MeetUpList meetups={favoriteCtx.favorites}/>
    }
  

  return (
  <div>
  <h1>favorites meetups </h1>
  {content}
  </div>
  )
}


export default FavoritesPage;