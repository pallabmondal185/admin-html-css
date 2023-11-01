import React, { useState } from 'react'

const Form = () => {
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

    console.log("formValue", formValue)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = {
            "firstName": formValue.fname,
            "lastName": formValue.lname,
            "email": formValue.email,
            "phoneNo": formValue.phone,
            "city": formValue.city,
            "pinCode": formValue.pincode,
            "gender": formValue.gender,
            "image": formValue.qualification
        }
        console.log("sendData", sendData)
        const response = await fetch("http://127.0.0.1:5041/api/add-form", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData)
        });
        const data = await response.json()
        console.log("respp", data)
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
                                value={formValue.fname}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='lname'
                                value={formValue.lname}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='email'
                                value={formValue.email}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Phone No:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='phone'
                                value={formValue.phone}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>City:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='city'
                                value={formValue.city}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>PinCode No:</label>
                            <input
                                type='text'
                                className='form-input'
                                name='pincode'
                                value={formValue.pincode}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>Gender:</label>
                            <input
                                type='radio'
                                name='gender'
                                value="Male"
                                onChange={(e) => handleChange(e)}
                            />
                            <label>Male</label>
                            <input
                                type='radio'
                                name='gender'
                                value={"Female"}
                                onChange={(e) => handleChange(e)}
                            />
                            <label>Female</label>
                            <input
                                type='radio'
                                name='gender'
                                value="Other"
                                onChange={(e) => handleChange(e)}
                            />
                            <label>Other</label>
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Qualification:</label>
                            <select
                                className='form-input-select'
                                name='qualification'
                                value={formValue.qualification}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value={"B.Tech"}>B.Tech</option>
                                <option value={"B.Sc"}>B.Sc</option>
                                <option value={"M.Tech"}>M.Tech</option>
                                <option value={"M.Sc"}>M.Sc</option>
                            </select>
                        </div>
                    </div>

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

export default Form
