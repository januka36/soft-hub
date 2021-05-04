import React from 'react'
import CreateRoomModalBtn from './CreateRoomModalBtn'
import DashboardToggle from './dashboard/DashboardToggle'

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            
            <div>
                <DashboardToggle />  
                <CreateRoomModalBtn />              
            </div>
        </div>
    )
}

export default Sidebar
