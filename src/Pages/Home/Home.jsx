import { useLoaderData } from "react-router-dom";
import Phone from "./Phone/Phone";
import Banner from "../../Banner/Banner";


const Home = () => {
    const phones = useLoaderData()
    console.log(phones);
    return (
        <div>
            <Banner></Banner>
        <div className="grid grid-cols-3 gap-6">
            {
                phones.map(phone => <Phone key={phone.id} phone = {phone}></Phone>)
            }
        </div>
        </div>
    );
};

export default Home;