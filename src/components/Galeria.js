import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import MyContext from "../Mycontext";

export default function Home() {

  const {photos, setPhotos} = useContext(MyContext);
 
  const setFavorite= (id) => {
     photos.find((element, index) => {
     if (element.id === id) {
      photos[index].liked = !photos[index].liked;
     }
    }) ; 
    
      setPhotos([...photos]);

  };
  
  return (
    <div className="galeria grid-columns-5 p-3">
      {
        photos.map(photo => (
          <div className="foto" 
          key={photo.id}
            style={{backgroundImage: `url(${photo.src.tiny})`}}
            onClick={() => {
              setFavorite(photo.id)
            }}>
              <Heart filled={photo.liked}/>
              <p>{photo.alt}</p>
            </div>
        ))
      }

    </div>
  );
}
