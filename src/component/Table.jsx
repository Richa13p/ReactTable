import React from 'react'

const data = [
    { id : 1, name:"a", age:19,gender:"Male"},
    {id : 2, name:"b", age:18,gender:"Male"},
    {id : 3,name:"c", age:17,gender:"Male"}
]
const Table = () => {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            {data.map ((val)=>{
              <tr key ={val.id}>
                     <td>{val.name}</td>
                     <td>{val.age}</td>
                     <td>{val.gender}</td>

              </tr>
            }
            
            )}
        </table>
    </div>
  )
}

export default Table