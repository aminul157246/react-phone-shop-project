import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
// import state from 'sweetalert/typings/modules/state';
const Phone = ({phone}) => {
    const {id,image,phone_name,brand_name,price,rating} = phone
    // console.log(id,phone)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={ image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">phone_name : {phone_name}</h2>
    <p>brand_name : {brand_name}</p>
    <p>price : {price}$</p>
    
    <p> <Rating
        initialRating={rating}
        readonly
    />
    </p>

    <div className="card-actions justify-end">
    <Link to={`/phones/${id}` }state = {phone_name}><button className="btn btn-primary">Details</button></Link>  
    </div>  
  </div>
</div>
        </div>
    );
};


Phone.propTypes = {
    phone : PropTypes.object,
}

export default Phone;