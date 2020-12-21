import React from 'react'
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
const GET_PRODUCTS = gql `
{
     products{
         id
         name
         discription
         price
     }
}
`;
const test = () => {
    const {loading,error,data}=useQuery(GET_PRODUCTS);
    //console.log(data)
    return (
        
        <div>
            test page
            <br/>
            <br/>
            {data && data.products.map((prod)=>(
               <div>
                   {prod.id}
                   <br/>
                   {prod.name}
                   <br/>
               </div> 
            ))}
        </div>
    )
}

export default test
