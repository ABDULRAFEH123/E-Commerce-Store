import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { FaCreditCard } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { SiWeasyl } from "react-icons/si";
import { SlPaypal } from "react-icons/sl";
import CardPayment from '../components/home/CardPaymnet'
import EasypaisaPayment from '../components/home/EasypaisaPayment'
import PaypalPayment from '../components/home/PaypalPayment'
import BankPaymnet from '../components/home/BankPaymnet';

import { useState } from 'react';
const ModalComponent = ({ modalIsOpen, toggleModal }) => {
  // THIS CAN BE RESPONSIBEL TO OPEN THE CART DIV..IN MODAL..
  const [isCardPaymentVisible, setCardPaymentVisible] = useState(true);
  const [isEasyPaisa, setEasypaisa] = useState(false)
  const [isPaypal, setPaypal] = useState(false)
  const [isBank, setBank] = useState(false)
  const handleOpenCard = () => {
    setPaypal(false)
    setBank(false)
    setEasypaisa(false)
    setCardPaymentVisible(true); 
  };
  const handleOpenEasypaisa = () => {
    setPaypal(false)
    setBank(false)
    setEasypaisa(true)
    setCardPaymentVisible(false); 
  }
  const handleOpenPaypal = () => {
    setPaypal(true)
    setBank(false)
    setEasypaisa(false)
    setCardPaymentVisible(false); 
  }
  const handleOpenBank = () => {
    setPaypal(false)
    setBank(true)
    setEasypaisa(false)
    setCardPaymentVisible(false); 
  }

  return (
    <>
      <div className='container'>
        <form>

     
        <Modal className='modal_content' isOpen={modalIsOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Select Your Payment Methord</ModalHeader>
          <ModalBody className='modal-bodys' >
            <div className='modal_body'>
              <Row className='all_cards'>

                {/* CARD PAYMENT SECTION.... */}
                <button className={`card_icon ${isCardPaymentVisible ? 'active' : ''}`} onClick={handleOpenCard}>
                  <Col>
                    <div className='pay_icons '>
                      <FaCreditCard />
                    </div>
                    Card
                  </Col>
                </button>

                {/* EASYPAISA SECTION... */}
                <button className={`card_icon ${isEasyPaisa ? 'active' : ''}`} onClick={handleOpenEasypaisa} >
                  <Col>
                    <div className='pay_icons'>
                      <SiWeasyl />
                    </div>
                    EasyPaisa
                  </Col>
                </button>
                {/* PAYPAL SECTION */}
                <button className={`card_icon ${isPaypal ? 'active' : ''}`} onClick={handleOpenPaypal}>
                  <Col>
                    <div className='pay_icons'>
                      <SlPaypal />
                    </div>
                    Paypal
                  </Col>
                </button>
                {/* BANK TRANSFER SECTION.. */}
                <button className={`card_icon ${isBank ? 'active' : ''}`} onClick={handleOpenBank}>
                  <Col>
                    <div className='pay_icons'>
                      <BsBank />
                    </div>
                    Bank Transfer

                  </Col>
                </button>

              </Row>
              {/* CARD SECTION... IS HERE */}
              {isCardPaymentVisible &&
                <div className='card_payment'>
                  <CardPayment />
                </div>}

              {isEasyPaisa &&
                <div className='easypaisa_paymnet'>
                  <EasypaisaPayment />
                  
                </div>
              }
              {isPaypal &&
                <div className='paypal_paymnet'>
                  <PaypalPayment />
                </div>
              }
              {isBank &&
              <div className='bank_paymnet'>
                <BankPaymnet/>
              </div>
              }

            </div>


          </ModalBody>
          {/* <ModalFooter>
             <button class="btn btn-primary" type="submit">Submit form</button>
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button> 
           </ModalFooter> */}
        </Modal>
        </form>
      </div>


    </>

  );
};

export default ModalComponent;




