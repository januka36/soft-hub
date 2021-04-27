import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'}
];

const Navs = () => {

    const location = useLocation();

    return (
        <div>
            <NavList>
                {LINKS.map(item => (
                    <LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}>{item.text}</LinkStyled>
                ))}
            </NavList>
            
        </div>
    );
};

export default memo(Navs);
