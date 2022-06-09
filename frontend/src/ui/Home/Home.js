import React from 'react'
import Map, {GetMarker} from './Map'
import {Button, Col, Container, Dropdown, Row} from 'react-bootstrap'
import './HomeNav.css'
import {LogInForm} from './LogInForm'
import {SignUp} from '../SignUp/SignUp'
import MapFunction from "./Map";

export function Home() {

    const [show, setShow] = React.useState(false)

    return (
        <>
            <Container fluid className={'home-nav position-absolute bg-transparent'}>
                <Row className={'d-flex pt-3'}>
                    <Col className={'mr-auto'}>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" size={'lg'}>
                                Add Pothole
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/severity-photo-page">From Current Location</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => setShow(true)}>On Map</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className={'d-flex justify-content-end'}>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" size={'lg'} className={'large-button background-primary mt-3'}>
                                Log In
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={'dropdown-menu-css'}>
                                <Container fluid className={'login-form-container'}><LogInForm/></Container>
                            </Dropdown.Menu>
                        </Dropdown>
                        <SignUp/>
                    </Col>
                </Row>
            </Container>
            <MapFunction show={show}/>
        </>
    )
}


