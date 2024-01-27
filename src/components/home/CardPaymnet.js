import React from 'react'
import { FaCcVisa } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { Row, Col } from 'reactstrap';
import { FaCreditCard } from "react-icons/fa6";
import { useState } from 'react';
import SVGAnimations from '../../components/home/SVGAnimation'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import * as Yup from 'yup'
const CardPaymnet = () => {
    const history = useHistory();

    const initialValues = {
        cardNumber: '',
        expiration: '',
        cvc: '',
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [showTransactionText, setShowTransactionText] = useState(false);

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string()
            .matches(/^\d{16}$/, 'Card number must be 16 digits')
            .required('Card number is required'),
        expiration: Yup.string()
            .matches(/^[0-9]{1,5}(\/[0-9]*)?$/, 'Expiration date must be in MM/YY format and have 1 to 5 digits')
            .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format')
            .required('Expiration date is required'),
        cvc: Yup.string()
            .matches(/^\d{3}$/, 'CVC must be 3 digits')
            .required('CVC is required'),
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;


        setFormValues({
            ...formValues,
            [name]: value,
        });


        Yup.reach(validationSchema, name)
            .validate(value)
            .then(() => {

                setFormErrors({
                    ...formErrors,
                    [name]: '',
                });
            })
            .catch((error) => {

                setFormErrors({
                    ...formErrors,
                    [name]: error.message,
                });
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        validationSchema
            .validate(formValues, { abortEarly: false })
            .then(() => {
                console.log('Form is valid. Submitting...');
                setShowTransactionText(true);

                setTimeout(() => {
                    history.push('/');
                }, 2800);
            })
            .catch((errors) => {
                const newErrors = {};
                errors.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setFormErrors(newErrors);
            });
    };


    return (
        <>
            <div className='svg'>
                {showTransactionText && (
                    <SVGAnimations />
                )}
            </div>
            <div className='container '>
                <div className='card_heading'>
                    <h6>Card Number</h6>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='card_input'>
                        <input
                            type='text'
                            name='cardNumber'
                            value={formValues.cardNumber}
                            onChange={handleInputChange}
                            placeholder='4242 4242 4242 4242'
                            className={`form-control ${formErrors.cardNumber ? 'is-invalid' : ''}`}
                        />

                        <div className='all_cards_icons'>
                            <FaCcVisa className='cardss' style={{ color: 'blue' }} />
                            <FaRegCreditCard className='cardss' style={{ color: 'green' }} />
                            <FaRegAddressCard className='cardss' style={{ color: 'red' }} />
                            <FaAddressCard className='cardss' style={{ color: 'purple' }} />
                        </div>
                        {formErrors.cardNumber && (
                            <div className='invalid-feedback'>{formErrors.cardNumber}</div>
                        )}
                    </div>

                    <Row>
                        <Col>
                            <div className='expire_card'>
                                <div className='expire_heading'>
                                    <h6> Expiration</h6>
                                </div>
                                <input
                                    type='text'
                                    name='expiration'
                                    value={formValues.expiration}
                                    onChange={handleInputChange}
                                    placeholder='MM / YY'
                                    className={`form-control ${formErrors.expiration ? 'is-invalid' : ''}`}
                                />

                                {formErrors.expiration && (
                                    <div className='invalid-feedback'>{formErrors.expiration}</div>
                                )}
                            </div>
                        </Col>
                        <Col>
                            <div className='expire_card'>
                                <div className='expire_heading'>
                                    <h6> CVC</h6>
                                </div>
                                <div className='cvc_maindiv'>
                                    <input
                                        type='text'
                                        name='cvc'
                                        value={formValues.cvc}
                                        onChange={handleInputChange}
                                        placeholder='CVC'
                                        className={`form-control ${formErrors.cvc ? 'is-invalid' : ''}`}
                                    />
                                    {formErrors.cvc && (
                                        <div className='invalid-feedback'>{formErrors.cvc}</div>
                                    )}
                                    <FaCreditCard className='cvc_icon' />

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className='country_input'>
                        <div className='heading_country'>
                            <h6>Country</h6>
                            <select class="form-select form-select-lg mb-3 select_main" aria-label="Large select example">
                                <option selected>Pakistan</option>
                                <option value="1">India</option>
                                <option value="2">Nepal</option>
                                <option value="3">Australia</option>
                            </select>

                        </div>
                    </div>
                    <div className='btn_modal'>
                        <button type='submit'>Submit Payment</button>

                        <button type="button" >Cancel</button>
                    </div>

                </form>

            </div>
        </>

    )
}

export default CardPaymnet
