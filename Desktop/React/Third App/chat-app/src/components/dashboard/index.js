import React from 'react';
import { Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../context/profile.context';
import EditableInput from '../EditableInput';


const Dashboard = ({ onSignOut }) => {

    const {profile} = useProfile()

    return <>
    
    <Drawer.Header>
        <Drawer.Title>
        Dashboard
        </Drawer.Title>
    </Drawer.Header>

    <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
        <EditableInput />
    </Drawer.Body>

    <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>Sign Out</Button>
    </Drawer.Footer>
    
    
    </>
}

export default Dashboard
