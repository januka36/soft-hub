import React from 'react'
import { Route, Switch } from 'react-router'
import { Col, Grid, Row } from 'rsuite'
import { RoomsProvider } from '../../components/context/rooms.context'
import Sidebar from '../../components/Sidebar'
import Chat from './Chat'

const Home = () => {
    return (
    <RoomsProvider>
    <Grid fluid className="h-100">
        <Row className="h-100">
            <Col xs={24} md={8} className="h-100">
                <Sidebar />
            </Col>
            <Switch>
                <Route exact path="/chat/:chatId">
                    <Col xs={24} md={16} className="h-100">
                        <Chat />
                    </Col>

                </Route>
            </Switch>
        </Row>
    </Grid>
    </RoomsProvider>
    );
}

export default Home
