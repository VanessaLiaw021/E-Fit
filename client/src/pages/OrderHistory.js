//Import required packages
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

//Order History Component
const OrderHistory = () => {

  //Query the user data based on their logged information
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) { user = data.user}

  //Return the page for order history
  return (
    <>
      <div className="main">
        <h2 className="headings">Order History</h2>

        {user ? (
          <>
            {user.orders.map((order) => (
              <div key={order._id}>
                <div className="order-detail">
                  <h2>Order for {user.firstName}</h2>
                  <h2 className="date">{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h2>
                </div>
                <div className="order-content">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="order-card">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} className="image"/>
                      </Link>
                      <div className="order-wrapper">
                        <Link to={`/products/${_id}`} className="line"><p>{name}</p></Link>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr></hr>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};

//Export Order History
export default OrderHistory;