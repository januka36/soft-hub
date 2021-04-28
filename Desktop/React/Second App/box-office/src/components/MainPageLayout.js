import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title="TV 
            SHOWS" subtitle1="Are you looking for a movie or an actor?" subtitle2="Created by Januka Apps"/>
            <Navs />

            {children}
            
        </div>
    )
};

export default MainPageLayout;
