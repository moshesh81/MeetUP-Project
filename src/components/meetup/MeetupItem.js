import Card from "../layout/ui/Card";
import "./Meetup.moudle.css";
import { useContext } from "react";
import FavoritesContext from "./../../store/favorites-context";
function MeetUpItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  console.log('====================================');
  console.log(itemIsFavorite);
  console.log('====================================');
  function toggleFavorite() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id:props.id,
        title:props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className="actions">
          <button onClick={toggleFavorite}>
            {itemIsFavorite ? "remove from favorites" : " add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
