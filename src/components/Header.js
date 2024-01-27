import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const value = useSelector(state => state.value.value);

  useEffect(() => {

    const handleScroll = () => {


      if (window.scrollY > 0) {

        setIsNavbarFixed(true);
      } else {

        setIsNavbarFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div className={`fixed_header ${isNavbarFixed ? 'fixed' : ''}`}>
      <Row className='mr-0' style={{ height: '80px', background: '#F5E6E0' }}>

          <div className='container d-flex align-items-center justify-content-between '>
            <Link to='/header' style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className='home-icon' >
              <i class="fa-solid fa-house-user"></i>
            </div>
            </Link>
            <div className='header-text'>
              <h3>
                ShopNet
              </h3>
            </div>
            <div className='cart-items'>
              <Link to='/craft' style={{ color: 'inherit', textDecoration: 'none' }}> <i class="fa-brands fa-shopify"></i>
                <div className='add-value'>{value}</div>
              </Link>
            </div>
          </div>
        </Row>
      </div>



    </>

  )
}

export default Header
