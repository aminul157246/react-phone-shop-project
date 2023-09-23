import { useState } from "react";
import Phone from "../Phone/Phone";

const Favorites = () => {
    const [showFavorite , setShowFavorite] = useState([]) 
    const [noDataFound, setNODataFound] = useState(false)

    useState(()=>{
        const favoriteItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoriteItem){
            setShowFavorite(favoriteItem)
            // setNODataFound(false)
        }
        else{
            setNODataFound('NO data');
        }
},[])
console.log(showFavorite);
    return (
        <div>
            {
                noDataFound ? <p>{noDataFound}</p> : <div>
                <div>
                    {
                        showFavorite.map((phone ) => <Phone 
                        phone={phone} key={phone.id} ></Phone>)
                    }
                </div>

                </div>
            }
        </div>
    );
};

export default Favorites;