import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Icon } from 'rsuite';
import { useCurrentRoom } from '../../context/current-room.context';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';

const Top = () => {


    const name = useCurrentRoom(v => v.name);
    const isAdmin = useCurrentRoom(v => v.isAdmin);
    const isMobile = useMediaQuery('(max-width: 992px)');

    return (
        <div>
           <div className="d-flex justify-content-between align-items-center">
               <h4 className="text-disappear d-flex align-items-center">
                   <Icon componentClass={Link} to="/" icon="arrow-circle-left" size="2x" 
                   className={isMobile ? 'd-inline-block p-0 mr-2 text-blue link-unstyled' : 'd-inline-block p-0 mr-2 text-blue link-unstyled'} />
                   <span className="text-disappear" style={{color: 'red', fontSize: 30}}> {name}</span>
               </h4>

               <ButtonToolbar className="ws-nowrap">
                   {isAdmin && <EditRoomBtnDrawer />
                   }
               </ButtonToolbar>

           </div>
           <div className="d-flex justify-content-between align-items-center">
               <span> </span>
               <RoomInfoBtnModal />

           </div>
        </div>
    );
};

export default memo(Top);
