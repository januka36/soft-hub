import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import CreateRoomModalBtn from './CreateRoomModalBtn'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList';



const Sidebar = () => {

    const topSidebarRef = useRef();
    const[height, setHeight] = useState(0);

    useEffect(() => {
        if(topSidebarRef.current) {
            setHeight(topSidebarRef.current.scrollHeight)
        }
    }, [topSidebarRef]);


    return (
        <div className="h-100 pt-2">
            
            <div ref={topSidebarRef}>
                <div><h1 className="text-center mb-3" style={{color: 'wheat'}}>Soft-Hub</h1></div>
                <DashboardToggle />  
                <CreateRoomModalBtn /> 
                <Divider style={{ margin: 0, padding: '30px 0', color: 'white'}}>Join conversation</Divider>             
            </div>
            <ChatRoomList className="wall1" aboveElHeight={height} />
        </div>
    )
}

export default Sidebar
