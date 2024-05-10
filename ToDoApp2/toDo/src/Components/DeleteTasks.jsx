import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

export const DeleteTasks = ({ title }) => {
  
  
  const deleteitem = async () => {
    const res = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <Button variant="danger" className="mt-3" onClick={deleteitem}>
      Delete
    </Button>
  );
};
