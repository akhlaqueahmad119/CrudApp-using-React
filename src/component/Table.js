import React, { useState, useEffect } from 'react'
import MaterialTable from '@material-table/core'
//import { Icon} from '@mui/material';
// import Box from '@mui/material/Box';


//import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CustomizedDialogs from "./CustomizedDialogs"
import Form from "./Form"
export default function Table() {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };


  const columns = [
    { title: "Name", field: "name" },
    { title: "UserName", field: "username" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone" },


    { title: "City", field: "address.city" },
  ];


  return (
    <div className='kk'>




      <MaterialTable

        columns={columns}
         data={data}

      //  data={query =>
      //     new Promise((resolve, reject) => {
      //         // prepare your data and then call resolve like this:
      //         let url = "https://jsonplaceholder.typicode.com/users"
      //         fetch(url).then(response=>response.json()).then(resp=>{
      //           resolve({
      //             data:resp, // your data array
      //             page:1, // current page number
      //             totalCount:20,// total row number
      //         });
      //         })
          
      //     })
      // }
         
      

        editable={{
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            fetch(url + "/" + oldData.id, {
              method: "PUT",
              headers: {
                'Content-type': "aplication/json"
              },
              body: JSON.stringify(newData)
            }).then(response => response.json()).then(data => {
              console.log(data)
              fetchData()
              resolve()
              // setData(data)
            })


          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            console.log(oldData.id)
            fetch(url + "/" + oldData.id, {
              method: "DELETE",
              headers: {
                'Content-type': "aplication/json"
              }

            }).then(response => response.json()).then(data => {



              // setData(data)
              fetchData()
              resolve()
            })
          }),
        }}




        options={{
          sorting: true,
          search: true,
          paging: true,
          rowStyle: { background: "lightblue" },
          headerStyle: { backgroundColor: "#4169E1", fontStyle: "italic", fontSize: "medium", fontWeight: "bolder" },
          actionsColumnIndex: -1,
          paginationType: "stepped",
          showFirstLastPageButtons: true




        }}
        title={<h2>Employee-Details</h2>}
        actions={[
          {

            icon: () => <CustomizedDialogs >
              <Form />
            </CustomizedDialogs>
            ,
            tooltip: "Click me",
            onClick: (e, Data) => console.log(Data),
            isFreeAction: true,

          }
        ]}

        sx={12}

        sm={6}
        


      />



    </div>
  )
}
