import React, { useState } from 'react'

const SimpleForm = () => {
    const initValue = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        city: "",
        pincode: "",
        gender: "",
        qualification: ""
    }
    const [formValue, setFormValue] = useState(initValue);
    const [formError, setFormError] = useState({});


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const handleImage = (e) => {
        let file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    }

    // validate
    const validate = () => {
        let error = {};

        if (!firstName) {
            error.firstName = "First Name is Required"
        }
        if (!lastName) {
            error.lastName = "Last Name is Required"
        }
        if (!email) {
            error.email = "Email is Required"
        }
        if (!phone) {
            error.phone = "Phone No is Required"
        }

        if (Object.keys(error).length !== 0) {
            setFormError(error);
            return true;
        } else {
            return false;
        }

    }

    // submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            return
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        }

        console.log("success", data);

    }

    return (
        <div className='custom-container'>
            <div className='form-heading'>
                <h1>User Profile Form</h1>
            </div>
            <section className='form-section'>
                <form className='main-form'>
                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='fname'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <p className='form-error-msg'>{formError.firstName}</p>
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='lname'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <p className='form-error-msg'>{formError.lastName}</p>
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='form-error-msg'>{formError.email}</p>
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Phone No:</label>
                            <input
                                type='number'
                                className='form-input'
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <p className='form-error-msg'>{formError.phone}</p>
                        </div>
                    </div>

                    <div className='input-group'>
                        <label className='form-label'>Image:</label>
                        <input
                            type='file'
                            className='form-input'
                            name='image'
                            onChange={(e) => handleImage(e)}
                        />
                        {
                            image &&
                            <img src={image} style={{ height: "100px", width: "150px" }} />
                        }
                    </div>

                    {/* button */}
                    <div className='button-group'>
                        <button
                            type='submit'
                            className='submit-button'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </section>

        </div>
    )
}

export default SimpleForm
