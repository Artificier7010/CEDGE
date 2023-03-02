import React, { useState } from 'react';
import './register.scss';
import { FaExclamationTriangle, FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
  const [formShuffle, setFormShuffle] = useState(0);
  const [eyeOpen, setEyeOpen] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [confrmPass,setConfrmPass]=useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    parentName: "",
    address: "",
    contactNumber: "",
    age: "",
    gender: "Nil",
    dob: "",
    reach: "",
    classType: "",
    tandp: "",
    username: "",
    email: "",
    password: "",
    amount: "",
  })


  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'tandp') {
      setIsDisabled(!e.target.checked);
    }
    if (name === 'age') {
      setFormData((preval) => {
        return {
          ...preval,
          amount: value >= 7 ? 1500 : 1000,
        }

      })
    }
    if(name==="confmpass"){
      setConfrmPass(value);
    }

    setFormData((preval) => {
      return {
        ...preval,
        [name]: value
      }

    })
  }

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setValidationErrors(validate(formData));
    setIsSubmitting(true);

  }

  const validate = (data) => {
    const errors = {};
    if (!data.fullName) {
      errors.fullName = 'Full Name is required';
    }
    if (!data.parentName) {
      errors.parentName = 'Parent Name is required';
    }
    if (!data.address) {
      errors.address = 'Address is required';
    }
    if (!data.contactNumber) {
      errors.contactNumber = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(data.contactNumber)) {
      errors.contactNumber = 'Contact is not valid';
    }
    if (!data.age) {
      errors.age = 'Age is required';
    }
    if (!data.dob) {
      errors.dob = 'Date Of Birth is required';
    }
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.classType || data.classType === "") {
      errors.classType = 'class Type is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is not valid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be 8 characters or more';
    }
    if (!data.confmpass) {
      errors.confmpass = "Confirm Password Is Required"
    } else if (data.password !== data.confmpass) {
      errors.confmpass = "Confirm Password Must Be Similar To The Password"
    }
    return errors;
  };

  const hasErrors = Object.keys(validationErrors).length > 0;

  if (isSubmitting && !hasErrors) {
    axios.post('/api/signup', formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }


  console.log(validationErrors);
  return (
    <div className='Register'>
      <div className="register-wrap">
        {/* Left Section */}
        <div className="reg-sec-left">
          <div className="signup-form-wraper">
            <h1 className='greet-head'>Welcome</h1>
            <br />
            <h2>Create An Account  <span>Already Have An Account ? <NavLink to={'/login'}>Sign In</NavLink></span></h2><br />
            <hr color='gray' />
            {hasErrors && <p className='err-mark'>Something is missing Please Check Previous Form Also<FaExclamationTriangle /></p>}

            <div className="form-cont">


              {formShuffle === 0 ? (

                <form>
                  {/* Row */}
                  <div className="row">
                    <div className="col">
                      <label htmlFor="fullname">Full Name</label>
                      <input value={formData.fullName} onChange={handleInputChange} placeholder='Full Name' type="text" name='fullName' id='fullname' required />
                      {validationErrors.fullName && <p className='err-mark'>{validationErrors.fullName}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">
                      <label htmlFor="parentname">Parent's Name</label>
                      <input value={formData.parentName} onChange={handleInputChange} placeholder='Parents Name' type="text" name='parentName' id='parentname' required />
                      {validationErrors.parentName && <p className='err-mark'>{validationErrors.parentName}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">
                      <label htmlFor="add">Address</label>
                      <input value={formData.address} onChange={handleInputChange} placeholder='Address' type="text" name='address' id='add' required />
                      {validationErrors.address && <p className='err-mark'>{validationErrors.address}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                  </div>
                  {/* Row */}
                  <div className="row">
                    <div className="col">
                      <label htmlFor="contct">Contact Number</label>
                      <input value={formData.contactNumber} onChange={handleInputChange} placeholder='Contact Number' type="tel" id='contct' name='contactNumber' required />
                      {validationErrors.contactNumber && <p className='err-mark'>{validationErrors.contactNumber}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">
                      <label htmlFor="dob">Date Of Birth</label>
                      <input value={formData.dob} onChange={handleInputChange} id='dob' type="date" name='dob' required max={"2020-01-01"} />
                      {validationErrors.dob && <p className='err-mark'>{validationErrors.dob}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">
                      <label htmlFor="age">Age</label>
                      <input value={formData.age} onChange={handleInputChange} min={3} max={50} placeholder='Age' id='age' type="number" name='age' required />
                      {validationErrors.age && <p className='err-mark'>{validationErrors.age}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                  </div>
                  {/* Row */}
                  <div className="row">
                    <div className="col">
                      <label htmlFor="gender">Gender</label>
                      <select  onChange={handleInputChange} name="gender" id='gender'>
                        <option disabled selected>Select Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="Nil">Prefer Not To Say</option>
                      </select>
                    </div>
                    <div className="col2x" >
                      <label htmlFor="reach">Where did you hear about the school?</label>
                      <input value={formData.reach} onChange={handleInputChange} placeholder='Eg Social Media' type="text" id='reach' name='reach' />
                    </div>

                  </div>
                  {/* Row */}
                  <div className="row">
                    <div className="col">
                      <label htmlFor="class-type">Type</label>
                      <select onChange={handleInputChange} required name="classType" id='classType'>
                        <option disabled selected>Select Class Type</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </select>
                      {validationErrors.classType && <p className='err-mark'>{validationErrors.classType}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    {formData.classType === "Offline" ? (
                      <div className="col">
                        <label htmlFor="amount">Plan</label>
                        <select onChange={handleInputChange} required name="amount" id='amount'>
                          <option value={formData.age > 7 ? 1500 : 1000} selected>1 Month</option>
                          <option value={formData.age > 7 ? 3600 : 2500}>3 Month</option>
                          <option value={formData.age > 7 ? 6000 : 4500}>6 Month</option>
                          <option value={formData.age > 7 ? 11000 : 8000}>12 Month</option>
                        </select>
                      </div>
                    ) : null}


                    <div className="col">
                      <div className="inpt-wrap">
                        <label htmlFor="tp">
                          Agree to Terms & Policy
                          <span className='info'>
                            <FaInfoCircle />
                            <div className="terms-and-policy">
                              <div className="tandp-head">
                                <h1>Terms And Policy</h1>
                              </div>
                              <br />
                              <ol>
                                <li>Payment Once made is not refundable & non transferable in any circumstances and should made in advance.</li>
                                <li>Payment Will Only be In Online Mode.</li>
                                <li>For Any Payment Issues Please Contact to The Admin As Soon As Possible.</li>
                                <li>Please re check the amount before paying.</li>
                              </ol>
                            </div>
                          </span>
                        </label>
                        <input onChange={handleInputChange} type="checkbox" name='tandp' id='tp' />
                      </div>
                    </div>

                    <div className="col">
                      <button disabled={isDisabled} onClick={(e) => { e.preventDefault();setFormShuffle(1)}} className='link-btns'>Next</button>
                    </div>
                  </div>
                </form>

              ) : (
                <form>

                  <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                      <label htmlFor="">Username</label>
                      <input value={formData.username} onChange={handleInputChange} required type="text" placeholder='Username' name='username' />
                      {validationErrors.username && <p className='err-mark'>{validationErrors.username}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">

                    </div>
                  </div>
                  <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                      <label htmlFor="">Email</label>
                      <input value={formData.email} onChange={handleInputChange} required type="email" placeholder='Email' name='email' />
                      {validationErrors.email && <p className='err-mark'>{validationErrors.email}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">

                    </div>
                  </div>

                  <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                      <label htmlFor="">Password</label>
                      <div className="password-cont">
                        <input value={formData.password} onChange={handleInputChange} name='password' placeholder='Password' type={eyeOpen ? "password" : "text"} required />
                        <button onClick={(e) => { e.preventDefault(); setEyeOpen(!eyeOpen) }}>{eyeOpen ? <FaEye /> : <FaEyeSlash />}</button>
                      </div>
                      {validationErrors.password && <p className='err-mark'>{validationErrors.password}&nbsp;<FaExclamationTriangle /></p>}
                    </div>


                    <div className="col fl-d-row">
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                      <label htmlFor="">Confirm Password</label>
                      <div className="password-cont">
                        <input value={confrmPass} onChange={handleInputChange} placeholder='Confirm Password' name='confmpass' type={eyeOpen ? "password" : "text"} required />
                        <button onClick={(e) => { e.preventDefault(); setEyeOpen(!eyeOpen) }}>{eyeOpen ? <FaEye /> : <FaEyeSlash />}</button>
                      </div>
                      {validationErrors.confmpass && <p className='err-mark'>{validationErrors.confmpass}&nbsp;<FaExclamationTriangle /></p>}
                    </div>
                    <div className="col">
                    </div>
                  </div>

                  <div className="row">
                    <div className="col"></div>
                    <div className="col">
                      <button onClick={handleSubmit} className='link-btns'>Pay And Register</button>

                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row">
                    <div className="col"></div>
                    <div className="col">
                      <button onClick={(e) => { e.preventDefault(); setFormShuffle(0); setIsDisabled(true) }} className='link-btns'>Previous</button>
                    </div>
                    <div className="col"></div>
                  </div>

                </form>

              )}

            </div>

          </div>
        </div>
        {/* Right Section */}
        <div className="reg-sec-right">

        </div>
      </div>
    </div>
  )
}

export default Register;
