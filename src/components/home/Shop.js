import React from 'react'
import { Row, Col, Button, Input } from 'reactstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import cartItems from '../../store/actions/Action'
import { incrementValue } from '../../store/actions/Action'
import { incrementCounter } from '../../store/actions/Action'
import { addToCart } from '../../store/actions/Action'

import { toast } from 'react-toastify'
const Shop = () => {

  const dispatch = useDispatch();
  const [myData, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        if (res.data) {
          setdata(res.data.slice(0, 24));
        } else {

          console.error('Data is undefined or not in expected format');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShopNowClick = (id) => {
    dispatch(incrementCounter(id))
    dispatch(incrementValue());
    dispatch(cartItems(id));

    console.log('its a shopify icon', addToCart)
    toast('Item Added Successfully')
  };
  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));

  };
  const filteredData = myData.filter(card =>
    (categoryFilter === '' || card.category.name === categoryFilter) &&
    (card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     card.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  

  const handleFilterChange = (category) => {
    setCategoryFilter(category)
    console.log(categoryFilter);
    console.log(filteredData);
  }

  return (
    <>
      <section className='main-shop-container'>
        <div className='container'>

          {/* 2ND MAIN ROW IS STARTED FROM HERE */}
          <Row className='row-one'>

            <Col>
              <div className='all-btns'>
                <Button onClick={() => handleFilterChange('Clothes')}>Cloth</Button>
                <Button onClick={() => handleFilterChange('Electronics')}>Electronics</Button>
              
                <Button onClick={() => handleFilterChange('Shoes')}>Shoes</Button>
                <Button onClick={() => handleFilterChange('')}>All</Button>
              </div>
            </Col>

            <Col>
              <div className='search-bar'>
                <Input type='text' placeholder='Search Here..' onChange={handleSearchChange} />
                <i class="fa-brands fa-searchengin"></i>
              </div>

            </Col>

          </Row>
          {/* ALL CARD SHOWN HERE */}
          <Row className='justify-content-center'>
            {filteredData.length > 0 ? (

              filteredData.map((card) => (
                <Col key={card.id} md={5} lg={3} sm={6} >
                  <div className='all-cards'>
                    <div className='coloum-one'>
                      <div className='img_text'>
                        <img src={card.images} alt={`Card ${card.id}`} />
                        {/* SO THIS IS THE EYE ICON WE CAN SEE THE ITEM DETAILS HERE.. */}
                        {/* <div className='Add-new-item'>
                            <Link to={`/itemdetails/${selectItem.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <i class="fa-regular fa-eye"></i>
                            </Link>
                          </div> */}
                      </div>
                      <div className='coloum_text'>
                        <p>{card.title}</p>
                        <h4>{card.description}</h4>
                        <h5><span>$</span> {card.price}</h5>
                        <Button className='btn_shop' onClick={() => handleShopNowClick(card)}>Shop Now</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))

            ) : (
              <div className='product-not-found'> No Search Product Found</div>
            )
            }

          </Row>
          {/* ROW NO 2 STARTS FROM HERE */}

        </div>

      </section>


    </>
  )
}

export default Shop
