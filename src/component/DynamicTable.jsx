import React, { useEffect, useState } from 'react'

const api = "http://localhost:3000/employees"
const api_url = `${api}/inventory`

const DynamicTable = () => {

    const[data, setData] =useState([]);

    const fetch_url =  ()=>{
        fetch(api)
        .then(res => res.json()).then(json => setData(json))
    }

    useEffect(()=>{
        fetch_url();
    }, []);
  return (
    <div>
     <h1>Simple Table</h1>
        <table>
            
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Unit Price</th>
                <th> Action</th>
                </tr>
            </thead>
            {
            data.map(item => (
                <tr key={item.id} >
                <td >{item.name}</td>
                <td >{item.email}</td>
                <td >{item.phone}</td>
                {/* <td ></td>
                <td ></td> */}
                </tr>              
            ))
            }
          

        </table>
    </div>
  )
}

export default DynamicTable