import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

export const DeleteTasks = ({ title }) => {
   
  
  const deleteitem = (title) => {
    const res = fetch("http://localhost:3000/deleteTask", {
      method: "DELETE",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <Button variant="danger" className="mt-3" onClick={()=>{deleteitem(title)}}>
      Delete
    </Button>
  );
};
