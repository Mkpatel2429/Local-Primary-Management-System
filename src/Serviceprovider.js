import React from 'react'
import { useLocation } from 'react-router-dom'

function Serviceprovider() {
  const location = useLocation();
  const data = location.state || {}; // Access data from state or URL parameters
  console.log(data);
  return (
    <div>
        <table class="table table-dark">
  <thead>
    <tr>
    <th scope="col">Fullname</th>
    <th scope="col">Address1</th>
    <th scope="col">Address2</th>
    <th scope="col">Zipcode</th>
    <th scope="col">City</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
    <th scope="col">Mobile-No</th>
    <th scope="col">File</th>
    <th scope="col">Complain</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{data.fullname}</th>
      <td>{data.address1}</td>
      <td>{data.address2}</td>
      <td>{data.zcode}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td>{data.country}</td>
      <td>{data.email}</td>
      <td>{data.mobileno}</td>
      <td>{data.file}</td>
      <td>{data.complain}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Serviceprovider