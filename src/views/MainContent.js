import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import "../css/MainContent.css";
import Card from '../components/Card';
import { v4 as uuidv4 } from 'uuid';

export default function MainContent() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        await fetch("https://servers.minetest.net/list")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
                console.log(data)
            })
    }
    const map = data && data['list'].map((data) => <Card key={uuidv4()} name={data.name} description={data.description} address={data.address} clients={data.clients} max_clients={data.clients_max} url={data.url} each_client={data.clients_list} pvp={data.pvp} creative={data.creative}/>)
    return (
        <>
        <div className="container">
        <div className="ServInfo overflow-hidden md:overflow-scroll text-center">
            <p className="md:float-left">
                Online Clients: <b>{data && data['total'].clients}</b> | 
                Online Servers: <b>{data && data['total'].servers}</b>
            </p>
            <p className="md:float-right">
                Total Clients: <b>{data && data['total_max'].clients}</b> | 
                Total Servers: <b>{data && data['total_max'].servers}</b>
            </p>
        </div>
        {loading ? <h1 style={{fontFamily: "Inter"}} className="text-center">Loading..</h1> : null}
            <Row>
               {map} 
            </Row>
        </div>
        </>
    )
}
