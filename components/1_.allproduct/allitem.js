import React from "react";
import { Card, Button } from "react-bootstrap";
import scss from './allitem.module.scss'
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
const allitem = () => {
  const {loading,error,data}=useQuery(GET_PRODUCTS);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{ width: "fit-content", position: "absolute", right: "70px" }}
      >
        <div
          style={{
            backgroundColor: "#EFEFEF",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontFamily: "Kanit, sans-serif",
              backgroundColor: "#E37545",
              color: "#FFFFFF",
              fontSize: "30px",
              paddingLeft: "15px",
            }}
          >
            {" "}
            สินค้ายอดนิยม !!
          </div>
          <div className={scss.item}>
             {data && data.products.map((prod)=>(
              <div> 
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src="image/Organic-Espresso-Ground-250g-300x300.png"
                variant="top"
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                  }}
                >
                  {prod.name}
                </Card.Title>
                <Card.Text
                  style={{
                    textAlign: "center",
                    color: "#5676AE",
                    fontSize: "20px",
                  }}
                >
                  ฿300.00 – ฿1,300.00
                </Card.Text>
              </Card.Body>
            </Card>
            </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default allitem;
