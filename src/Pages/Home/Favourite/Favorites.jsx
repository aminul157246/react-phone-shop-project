import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Favorites = () => {
    const [showFavorite , setShowFavorite] = useState([]) 
    const [noDataFound, setNODataFound] = useState(false)
    const [isShow , setIsShow] = useState(false);
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        const favoriteItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoriteItem){
            setShowFavorite(favoriteItem)
            
            // total 
            const total = favoriteItem.reduce((previous, current)=>previous+current.price,0);
            setTotalPrice(total)
        }
        else{
            setNODataFound('NO data');
        }
},[])
console.log(showFavorite);

// delete all 
const handleDelete = () => {
    localStorage.clear()
    setShowFavorite([])
    setNODataFound('NO data')
}
    return (
        <div>

            {
                noDataFound ? <p className="h-[70vh] text-6xl font-bold flex justify-center items-center">{noDataFound}</p> : <div>
                    {/* delete all and total part */}
                    <div className="flex justify-center mt-24 gap-6">
                        <button onClick={handleDelete}
                        className="bg-slate-300 btn btn-secondary text-black px-4 flex justify-center">delete all data</button>
                        <p className="bg-slate-300 p-2 text-black"> total Price :  {totalPrice}</p>
                    </div>

                    {/* favorite part */}
                <div className="grid grid-cols-2 gap-16 mt-8">
                    {
                        isShow? showFavorite.map((phone ) => <Phone 
                        phone={phone} key={phone.id} ></Phone>) : showFavorite.slice(0,2).map((phone ) => <Phone 
                        phone={phone} key={phone.id} ></Phone>)
                    }
                </div>
                
                {/* show more and show less part */}
                {showFavorite.length>2 && <button className="btn btn-primary m-6" onClick={()=> setIsShow(!isShow)}>{isShow?'Show less': "See More"}</button>
}
                </div>
            }
        </div>
    );
};

export default Favorites;