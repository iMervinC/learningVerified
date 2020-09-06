import React, { useContext } from "react";
import { CartCard } from "../../components/Card/Card";
import { Context } from "../../context/CartContext";

const Cart = () => {
  const cart = useContext(Context);

  console.log(cart.state);
  return (
    <div>
      <div className="margin-top"></div>
      <div className="row container ">
        <CartCard
          body="{course.title}"
          footer="{course.by}"
          imgLink="{course.imgUrl}"
        />
        {cart.state.map((course, index) => {
          return (
            <CartCard
              key={index}
              body={course.title}
              footer={course.by}
              imgLink={course.imgUrl}
              price={course.price}
              unit={course.unit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
