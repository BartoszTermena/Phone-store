import React from 'react';

const CartItem = ({product, value}) => {
    const {id, img, title, price, total, count} = product;
    const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} alt="product" className="img-fluid" style={{width:'7rem',height:"7rem"}}/>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-cart">
           <span className="d-lg-none">product: </span>{title}
        </div>
        <div className="col-10 mx-auto col-lg-2 text-cart">
           <span className="d-lg-none">price: </span>{price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 text-cart">
           <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1"
                        onClick={() => decrement(id)}
                    >-</span>
                    <span className="btn btn-black mx-1"
                    >{count}</span>
                    <span className="btn btn-black mx-1"
                        onClick={() => increment(id)}
                    >+</span>
                </div>
           </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-cart">
        <div>
           <i 
           onClick={() => removeItem(id)}
           className="fas fa-trash cart-icon"></i>
        </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-cart">
           <strong>item total : $</strong>{total}
        </div>
    </div>
  )
}

export default CartItem; 