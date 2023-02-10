import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'

function Recruitments() {
  const { user } = useContext(AuthContext)
  const { data: postingJobData = [] } = useQuery({
    queryKey: [],
    queryFn: (async () => {
      const res = await fetch(`http://localhost:5000/recuriterjob?email=${user?.email}`)
      const data = res.json()
      return data
    })
  })
  console.log(postingJobData)
  return (
    <div className='m-5'>
      <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Pay</th>

            </tr>
          </thead>
          <tbody>
            {
              postingJobData.map((job, i) => <tr key={job._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={job.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{job.job_title}</td>
                <td>{job?.isPaid !== true && <Link to={`/employedashboard/payment/${job._id}`}><button className='btn btn-xs btn-info'>Pay For Feature</button></Link>}{job?.isPaid === true && <button className='btn btn-xs  btn-success'>Paid For Feature</button>}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Recruitments