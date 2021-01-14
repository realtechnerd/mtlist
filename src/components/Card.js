import React, {useState, useEffect} from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import "../css/Card.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Pvp from "../imgs/pvp2.png";
import Creative from "../imgs/minetest.svg.png"

export default function Card(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }

    const mapUsers = props.each_client.map(data => (
        <Col lg="6" md="6">
            <h5 className="text-center">{data}</h5>
        </Col>
    ))

    return (
        <>
        <Col lg="6" md="6" key={'Card'}>
            <div className="card border-0 custom-shadow">
                <div className="card-body">
                  <p className="mb-1">{props.address}</p>
                    <h4>{props.name}</h4>
                    <ReactReadMoreReadLess
                        charLimit={100}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                    >
                       {props.description}
                    </ReactReadMoreReadLess>
                    <br/>
                    <div className="overflow-hidden mb-2">
                        <button className="md:float-left border-none bg-white" {...(props.clients && { onClick: handleOpen })} style={{cursor: !props.clients && "text", userSelect: !props.clients && "text"}}><h5 className="mb-0 mt-2 text-black"><b>Online Clients:</b> {props.clients}</h5></button>
                        <h5 className="mb-0 mt-2.5 text-black md:float-right"><b>Max Clients:</b> {props.max_clients}</h5>
                    </div>
                    <a href={props.url} target="_blank" className="mb-0 text-black" style={{display: !props.url && "none"}}><h6><span>{props.url}</span></h6></a>  
                    <div className="flex overflow-hidden">
                        <Tippy content={<p style={{fontFamily: "Inter"}} className="mb-0">PVP Enabled</p>}>
                            <img src={Pvp} style={{height: "28px", display: !props.pvp && "none"}} className="mr-1.5"/>
                        </Tippy>   
                        <Tippy content={<p style={{fontFamily: "Inter"}} className="mb-0">Creative Mode On</p>}>
                            <img src={Creative} style={{height: "28px", display: !props.creative && "none"}}/>
                        </Tippy>    
                    </div>
                </div>
            </div>
        </Col>
            <Modal show={show} onHide={handleClose} className="modal90">

                <Modal.Header closeButton>
                    <Modal.Title>Users Online:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        {mapUsers}
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )
}