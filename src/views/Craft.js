import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../store/actions/Action';
import { Row, Col, Input } from 'reactstrap';
import { useState } from 'react';
import ModalComponent from '.././views/ModalComponent'
import { useEffect } from 'react';
import {removeCartItem} from '../store/actions/Action'
const Craft = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const cartItems = useSelector(state => state.shop.cartItems);
  // STATES OF SHIIPING AND SUB TOTAL..
  const [shipping, setShipping] = useState(
    parseInt(sessionStorage.getItem('shipping')) || 0
  );

  const [subtotal, setSubtotal] = useState(1);
  // MODAL SETUP..
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    console.log('good')

  }
  // HANDLE  + and - logic..

  useEffect(() => {

    sessionStorage.setItem('shipping', shipping.toString());
  }, [shipping]);

  const handleDecrement = (id) => {
    if ((counter[id] || 1) > 1) {
      const newShipping = shipping - 5;
      setShipping(newShipping);
      dispatch(decrementCounter(id));
      setSubtotal(subtotal - 1);
    }
  };

  const handleIncrement = (id) => {
    const newShipping = shipping + 5;
    setShipping(newShipping);
    dispatch(incrementCounter(id));
    setSubtotal(subtotal + 1);
  };


  // SO THIS FUNCTION CAN BE DO THE TOTAL SUM..
  const total = cartItems.reduce((acc, item) => {
    const itemCount = counter[item.id] || 1;
    return acc + (itemCount * item.price);
  }, 0);

  // const handleRemoveItem = (id) => {
  //   dispatch(removeItem(id))
  //   console.log('cliked ', removeItem)
  // }
  // if (!currentItem) {
  //   return <div>
  //       <div className='purchase_item'>
  //         <div className='purchase_img'>
  //           <img src={currentItem.images} alt={`Card ${currentItem.id}`} />
  //         </div>
  //         <div className='coloum_text'>
  //         <div className='close_item'>
  //           <p>{currentItem.title}</p> 
  //             <i class="fa-solid fa-xmark" onClick={() => handleRemoveItem(currentItem.id)}></i>
  //           </div>

  //           <div className='counter'>
  //             <div className='counter_plus' onClick={handleDecrement} >-</div>
  //             <div className='mb-0 main_counter'>{counter.counter}</div>
  //             <div className='counter_minus' onClick={handleIncrement}>+</div>

  //           </div>
  //           <h5><span>$</span> {currentItem.price *counter.counter }</h5>

  //         </div>
  //       </div>
  //   </div>;
  // }
  return (
    <>
      <div className='container'>
        <hr />
        <div className='fixed-item'>
          <h5>Your Items </h5>
          {/* <Link to='/header' style={{ color: 'inherit', textDecoration: 'none' }}> <i class="fa-solid fa-backward"></i></Link> */}
        </div>
        <hr />
        <Row>

          <Col className='col-md-8'>
            <div className='items_of_cart'>

              {cartItems.map((item) => (
                <>
                  <div className='purchase_item'>
                    <div className='purchase_img '>
                      <img src={item.images} alt={`Card ${item.id}`} />
                    </div>
                    <div className='coloum_text'>
                      <p>{item.title}</p>
                      <h5>
                        <span>$</span>
                        {(item.price * (counter[item.id] || 1)).toFixed(2)}
                      </h5>

                    </div>

                    <div className='counter'>
                      <div className='counter_plus' onClick={() => handleDecrement(item.id)}>-</div>
                      <div className='mb-0 main_counter'>{counter[item.id] || 1}</div>
                      <div className='counter_minus' onClick={() => handleIncrement(item.id)}>+</div>
                    </div>
                    <div className='cancel_item' onClick={() => dispatch(removeCartItem(item.id))}>
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>


                </>
              ))}

            </div>
          </Col >

          {/* SECOND COLOUM */}
          <Col className='col-md-4 main_summary_container'>
            {/* 2ND RIGHT DIV STARTS FRO HERE */}
            <div className='order_summary'>
              <div className='order_header'>
                <h3>Order Summary</h3>
              </div>
              <div className='order_details'>
                <p>Shipping Fee : </p>
                <h5>$ {shipping}</h5>
              </div>
              {/* MAIN ....  */}
              {/* <div className='total_cards'>
                <p>Total cart Items :</p>
                <h5> {subtotal}</h5>


              </div> */}
              <div className='coupen_code_input'>
                <Input type='text' className='mr-3' placeholder='Enter Coupen Code' />
                <Link to='/mainstripe'>  <button className='btn_coupen_code'>Apply</button></Link>
              </div>
              <div className='total_item'>

                <p>Total : </p>
                <h5>$ {total.toFixed(2)}</h5>

              </div>
              <div className='processed_btn'>

                <button onClick={toggleModal}> Processed To Continue</button>
              </div>
              <ModalComponent modalIsOpen={modalIsOpen} toggleModal={toggleModal} />

            </div>
          </Col>

        </Row>
      </div >

    </>

  );

};

export default Craft;

