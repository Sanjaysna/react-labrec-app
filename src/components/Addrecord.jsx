import React, { useState } from 'react'
// import Navbar from './Navbar'
// import axios from 'axios'

const AddDonor = () => {

    const [input, changeInput] = useState({
        name: "",
        dept: "",
        sem: "",
        course: "",
        systemNumber: "",
        loginTime: "",
        logoutTime: "",
        date: ""
    })

    const [message, setMessage] = useState("")
    const [messageColor, setMessageColor] = useState("green")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        axios.post("YOUR_API_URL", input)
            .then((response) => {

                setMessage(response.data.message)
                setMessageColor("green")

                changeInput({
                    name: "",
                    dept: "",
                    sem: "",
                    course: "",
                    systemNumber: "",
                    loginTime: "",
                    logoutTime: "",
                    date: ""
                })

            })
            .catch((error) => {

                if (error.response) {
                    setMessage(error.response.data.message)
                } else {
                    setMessage("Something went wrong")
                }

                setMessageColor("red")

            })

    }

    return (
        <div>

            

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    Add Record
                </h2>

                <div className="row">

                    <div className="col-12">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="dept"
                                    value={input.dept}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Semester</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="sem"
                                    value={input.sem}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={input.course}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">System Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="systemNumber"
                                    value={input.systemNumber}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Login Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="loginTime"
                                    value={input.loginTime}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Logout Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="logoutTime"
                                    value={input.logoutTime}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="date"
                                    value={input.date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-12">
                                <button
                                    className="btn btn-primary"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>
                            </div>

                            <div className="col-md-12">
                                <h5 style={{ color: messageColor }}>
                                    {message}
                                </h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddDonor