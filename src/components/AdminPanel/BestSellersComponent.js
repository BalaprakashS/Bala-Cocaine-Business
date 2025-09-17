import React from "react";
import { Card, Table } from "react-bootstrap";

const BestSellersComponent = ({ bestSellers }) => (
  <Card className="mb-4">
    <Card.Header>Best-Selling Products</Card.Header>
    <Card.Body>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity Sold</th>
            </tr>
          </thead>
          <tbody>
            {bestSellers.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card.Body>
  </Card>
);

export default BestSellersComponent;
