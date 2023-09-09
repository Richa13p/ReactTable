import React, { useEffect, useState } from 'react'

const Dydata = () => {

    const[users,setUsers] = useState([])
    const api = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => setUsers(json))
    }
    useEffect(()=>{
      api()
    },[])
  return (
    <div>
  <h1>Users</h1>
          <table border={1}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
           {
            users.map(user =>(
                <tr key = {user.id}>  
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>

                </tr>
            ))
           }
          </table>
    </div>
  )
}

export default Dydata