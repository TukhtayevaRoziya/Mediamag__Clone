import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../redux/actions/readAction';
import { GET_BASKET } from '../../redux/actions/types';

const Basket = () => {
  const dispatch = useDispatch();
  const {basket} = useSelector(state => state.basketReducer);

  useEffect(() => {
    dispatch(getAction(GET_BASKET)); // Fetch basket data on component mount
  }, [dispatch]);
console.log(basket)
  // Render the basket items
  return (
    <div>
      <h2>Your Basket</h2>
        {/* {!basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {!basket.map((item) => (
            <li key={item.id}>
               {item.name} - {item.price} so'm 
            </li>
          ))}
        </ul>
      )}  */}
      <p>Total Items: </p>
    </div>
  );
};

export default Basket;