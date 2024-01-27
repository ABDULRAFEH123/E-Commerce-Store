import React from 'react'

import womenpng from '../../assets/img/woman_hero.d109717db264ec684e97.png'
import { Col, Row } from 'reactstrap';

const Hero = () => {
    return (
        <>
            <section className='header-section'>
                <div className='container'>
                 
                        <Row className='main-row main-hero-container'>
                            {/* MAIN CONTAINER 1 */}
                            
                                <div className=' text-container col-md-6'>
                                    <h3> NEW TREND</h3>
                                    <h2>AUTUMN SALE STYLISH WOMENS</h2>
                                </div>
                            

                            {/* MAIN CONTAINER 2 */}
                      
                                <div className=' img-container col-md-6 d-none d-lg-block'>
                                    <img src={womenpng}></img>
                                </div>
                         

                        </Row>
                    </div>
               
            </section>
        </>

    )
}

export default Hero;