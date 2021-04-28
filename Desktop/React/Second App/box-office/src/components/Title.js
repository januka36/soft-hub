import React, { memo } from 'react'
import { TitleWrapper } from './Title.styled'

const Title = ({ title, subtitle1, subtitle2 }) => {
    return (
        <TitleWrapper>
            <h1>{title}</h1>
            <p>{subtitle1}</p>
            <p className="myne">{subtitle2}</p>
        </TitleWrapper>
    )
}

export default memo(Title);
