import React from 'react'
import { Col, Grid, Row } from 'rsuite'
import { RoomsProvider } from '../components/context/rooms.context'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
    <RoomsProvider>
    <Grid fluid className="h-100">
        <Row className="h-100">
            <Col xs={24} md={8} className="h-100">
                <Sidebar />
            </Col>
        </Row>
    </Grid>
    </RoomsProvider>
    );
}

export default Home
