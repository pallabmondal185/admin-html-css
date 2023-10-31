import React from 'react'

const Form = () => {
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
                                className='form-input'
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                className='form-input'
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>Email:</label>
                            <input
                                className='form-input'
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Phone No:</label>
                            <input
                                className='form-input'
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>City:</label>
                            <input
                                className='form-input'
                            />
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>PinCode No:</label>
                            <input
                                className='form-input'
                            />
                        </div>
                    </div>

                    <div className='custom-row'>
                        <div className='input-group'>
                            <label className='form-label'>Gender:</label>
                            <input
                                type='radio'
                                name='gender'
                            />
                            <label>Male</label>
                            <input
                                type='radio'
                                name='gender'
                            />
                            <label>Female</label>
                            <input
                                type='radio'
                                name='gender'
                            />
                            <label>Other</label>
                        </div>

                        <div className='input-group'>
                            <label className='form-label'>Qualification:</label>
                            <select
                                className='form-input-select'
                            >
                                <option>B.Tech</option>
                                <option>B.Sc</option>
                                <option>M.Tech</option>
                                <option>M.Sc</option>
                            </select>
                        </div>
                    </div>

                    <div className='button-group'>
                        <button
                            type='submit'
                            className='submit-button'
                            onClick={(e) => e.preventDefault()}
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
