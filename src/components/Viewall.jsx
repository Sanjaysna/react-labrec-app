import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Navbar from './Navbar'

const Viewall = () => {

    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {

        axios.get("YOUR_API_URL")
            .then((response) => {
                changeData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    View All Records
                </h2>

                {
                    loading ?

                        <h3 className="text-center">
                            Loading...
                        </h3>

                        :

                        <table className="table table-bordered table-striped">

                            <thead className="table-dark">

                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Semester</th>
                                    <th>Course</th>
                                    <th>System Number</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>Date</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>

                                                <td>{value.name}</td>
                                                <td>{value.dept}</td>
                                                <td>{value.sem}</td>
                                                <td>{value.course}</td>
                                                <td>{value.systemNumber}</td>
                                                <td>{value.loginTime}</td>
                                                <td>{value.logoutTime}</td>
                                                <td>{value.date}</td>

                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                }

            </div>

        </div>
    )
}

export default Viewall