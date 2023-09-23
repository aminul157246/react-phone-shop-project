import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const PhoneDetails = () => {
    const [phone, setPhone] = useState([])
    const {id} = useParams()
    // console.log(id);

    const phones = useLoaderData()
    // console.log(phones);

    useEffect(()=>{
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone);
    },[id, phones])
    // console.log(phone);

    // localStorage part 
    const handleFavorite = () => {
        
        const addedFavorite = [];

        const favoriteItem = JSON.parse(localStorage.getItem('favorite'))

        if(!favoriteItem){
            addedFavorite.push(phone);
            localStorage.setItem('favorite', JSON.stringify(addedFavorite))
            swal({
                    title: "Good job!",
                    text: "Product added ",
                    icon: "success",
                    button: "close",
                  });
        }
        else {

            const isExist = favoriteItem.find(item => item.id === id)
            if(!isExist){

                addedFavorite.push(...favoriteItem, phone);
                localStorage.setItem('favorite', JSON.stringify(addedFavorite))
                swal({
                    title: "Good job!",
                    text: "Product added ",
                    icon: "success",
                    button: "close",
                  });
            }
            else{
                swal({
                    title: "Why ...!",
                    text: "Duplicate not allowed",
                    icon: "error",
                    button: "close",
                  });
            }
        }
        // console.log(favoriteItem);
    }

    
    return (
        <div className="py-16 flex justify-center items-center ">
            <div className="relative flex   max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={phone.image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {phone.phone_name}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {phone.brand_name}
    </h4>

    <a className="inline-block" href="#">
      <button onClick={handleFavorite}
        className="flex select-none mt-36 items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add Favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default PhoneDetails;