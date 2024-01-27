import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ModalComponent from '../../views/ModalComponent';
import { useState } from 'react';
import SVGAnimations from '../home/SVGAnimation'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const EasypaisaPayment = (toggleModal) => {
  const history = useHistory();

  const [showTransactionText, setShowTransactionText] = useState(false);

  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .matches(/^\d{11}$/, 'Mobile number must be exactly 11 digits')
      .required('Mobile number is required'),
  });

  const formik = useFormik({
    initialValues: {
      mobileNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setShowTransactionText(true)
      setTimeout(() => {
        history.push('/');
      }, 2800);
      // Handle form submission here

      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className='container'>
       <div className='svg'>
        {showTransactionText && (
          <SVGAnimations />
        )}
      </div>
      <div className='easypaisa_heading'>
        <h6>Enter Receiver Mobile Number :-</h6>
      </div>
     
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group easypaisa_container">
          <input
            type="text"
            className={`form-control ${formik.touched.mobileNumber && formik.errors.mobileNumber
              ? 'is-invalid'
              : ''
              }`}
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobileNumber}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <div className="invalid-feedback">{formik.errors.mobileNumber}</div>
          )}
        </div>
        <div className='btn_modal'>
          <button type="submit" >
            Submit Payment
          </button>
          <button type="button"  >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EasypaisaPayment;

