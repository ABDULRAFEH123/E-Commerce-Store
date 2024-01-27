import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import SVGAnimations from './SVGAnimation';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const BankPayment = () => {
  const [showTransactionText, setShowTransactionText] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    fullName: Yup.string().required('Full name is required'),
    bankAccountNumber: Yup.string().matches(/^\d{11}$/, 'Bank account number must be 11 digits').required('Bank account number is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      bankAccountNumber: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        history.push('/');
      }, 2800);
      setShowTransactionText(true);
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
      <div className='main_bankpaymnet'>
        <div className='email'>
          <h6>Enter Email:</h6>
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

        <div className='heading_text'>
          <h6>Full Name:</h6>
        </div>
        <input
          type="text"
          name="fullName"
          className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
          placeholder='Enter Your Full Name'
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="invalid-feedback">{formik.errors.fullName}</div>
        )}

        <div className='heading_text'>
          <h6>Your Bank Account Number:</h6>
        </div>
        <input

          name="bankAccountNumber"
          className={`form-control ${formik.touched.bankAccountNumber && formik.errors.bankAccountNumber ? 'is-invalid' : ''}`}
          placeholder='Enter Your Bank Account Number'
          aria-describedby="emailHelp"
          value={formik.values.bankAccountNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.bankAccountNumber && formik.errors.bankAccountNumber && (
          <div className="invalid-feedback">{formik.errors.bankAccountNumber}</div>
        )}


      </div>
      <div className='btn_modal'>
        <button
          type="submit"

          onClick={() => {
            formik.handleSubmit();
            // setShowTransactionText(true)
          }}
          disabled={formik.isSubmitting}
        >
          Submit Paymnet
        </button>

        <button
          type="button"

          onClick={() => {
            setShowTransactionText(false);
            formik.handleReset();
          }}
        >
          Cancel
        </button>

      </div>
   

    </div>
  );
};

export default BankPayment;


