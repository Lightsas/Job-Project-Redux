import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import {fetchSingleLaunches} from "../../Redux/action";
import {useSelector, useDispatch} from "react-redux";
import { Button, Card } from 'react-bootstrap';

function SingleLaunchesPage() {
    const {launches, loading} = useSelector((state) => ({...state.data}));
    const [modifiedLaunches, setModifiedLaunches] = useState(null);
    const {id} = useParams();
    console.log("id", id)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleLaunches(id))
    }, [id]);

    useEffect(() => {
        if (launches.length > 0) {
            const {
                flight_number: id,
                mission_name: name,
                upcoming: coming,
                launch_year: year,
                details: details,
                launch_date_local: local_date,
            } = launches [0];
            const newLaunches = {
                id,
                name,
                coming,
                year,
                details,
                local_date,
            };
            setModifiedLaunches(newLaunches);
        }else {
            setModifiedLaunches(null);
        }
    }, [id, launches]);

    if(!modifiedLaunches) {
        return <h2>No Launches to Display</h2>
    } else {
        const {name, coming, year, details, loacl_date} = modifiedLaunches;
        return (
            <>
            {loading ? (
                <h4>Loding...</h4>
            ):(
                <section>
                    <Link to="/"> <Button variant="danger">Go Back</Button></Link>
                    <h2>Details Information</h2>
                    <Card border="primary" style={{ width: '50rem',}}>
                        <Card.Header>{loacl_date}</Card.Header>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> {details}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            )}
            </>
        )
    }

    
}

export default SingleLaunchesPage;