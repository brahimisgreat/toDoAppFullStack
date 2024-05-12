import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export const UpDateTask = ({setRefresh}) => {
    const UpDateTask = (title, description) => {
        const res = fetch("http://localhost:3000/updateTask", {
            method: "PUT",
            body: JSON.stringify({ title, description }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            setRefresh(true);
        });
    };
  return (
    <Container>
    <i className="bi bi-pencil-square"></i>
        
    </Container>
  )
}
