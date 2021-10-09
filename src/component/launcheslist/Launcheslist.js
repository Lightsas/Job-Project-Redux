import React, {useEffect, useState} from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { fetchLaunches } from "../../Redux/action"

function Launcheslist() {

    const { launches, loading } = useSelector((state) => ({...state.data}))
    const [ modifiedLaunches, setModifiedLaunches] = useState([])
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLaunches());
    }, [])

    useEffect(() => {
        if (launches) {
            const newLaunches = launches.map((item) => {
                const {flight_number, mission_name, upcoming, launch_year} = 
                item;
                return {
                    id: flight_number,
                    name: mission_name,
                    coming: upcoming,
                    year: launch_year,
                };
            });
            setModifiedLaunches(newLaunches);
        } else {
            setModifiedLaunches([]);
        }
    }, [launches]);

    if (loading) {
        return (
            <div>
                <h4>Loding....</h4>
            </div>
        );
    }

    if(!launches) {
        return <h2>No Launches mathed you search criteria</h2>
    }

    return (
        <Row>
            {modifiedLaunches.map((item) => {
                const {id, name, coming, year} = item;
                return (
                    <div>
                        <h1></h1>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{coming}</Card.Subtitle>
                                <Card.Text>
                                {year}
                                </Card.Text>
                                <Link to={`/launches/${id}`}>
                                    <Button variant="info">Details Info</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
            
        </Row>
    );
}

export default Launcheslist;