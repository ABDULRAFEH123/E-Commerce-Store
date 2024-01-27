import React from 'react';
import { Col, Row } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SVGAnimations from './SVGAnimation';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';

const PaypalPayment = () => {
  const [showTransactionText, setShowTransactionText] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    username: Yup.string().matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed').required('Username is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').max(10, 'Password cannot exceed 10 characters').required('Password is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setShowTransactionText(true);

      setTimeout(() => {
          history.push('/');
      }, 2800);
      // Your form submission logic here
    },
  });

  return (
    <div className='container'>
          <div className='svg'>
                {showTransactionText && (
                    <SVGAnimations />
                )}
            </div>
      <div className='heading'>
        <h4>Account Information :-</h4>
      </div>
      <div className='email'>
        <h6>Email Address*</h6>
      </div>
      <input
        type="email"
        name="email"
        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
        placeholder='Enter Email Address'
        aria-describedby="emailHelp"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email && (
        <div className="invalid-feedback">{formik.errors.email}</div>
      )}

      <Row>
        <Col>
          <div className='heading_text'>
            <h6>Username*</h6>
          </div>
          <div className='heading_input'>
            <input
              type="text"
              name="username"
              className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
              placeholder='Enter Username'
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="invalid-feedback">{formik.errors.username}</div>
            )}
          </div>
        </Col>
        <Col>
          <div className='heading_text'>
            <h6>Password*</h6>
          </div>
          <div className='heading_input'>
            <input
              type="password"
              name="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              placeholder='Enter Password'
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='heading_text'>
            <h6>First Name*</h6>
          </div>
          <input
            type="text"
            name="firstName"
            className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
            placeholder='Enter First Name'
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          )}
        </Col>
        <Col>
          <div className='heading_text'>
            <h6>Last Name*</h6>
          </div>
          <div className='heading_input'>
            <input
              type="text"
              name="lastName"
              className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
              placeholder='Enter Last Name'
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="invalid-feedback">{formik.errors.lastName}</div>
            )}
          </div>
        </Col>
      </Row>
      <div className='btn_modal'>
        <button onClick={formik.handleSubmit}>
          Submit Payment
        </button>
        <button type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaypalPayment;

