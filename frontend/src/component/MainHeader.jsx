import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../resurses/icons/notification.svg";
import { ReactComponent as Arrow } from "../resurses/icons/arrow.svg";
import { ReactComponent as Notification } from "../resurses/icons/notification.svg";

const MainHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 8px 0px 32px;
    align-items: center;
    align-self: stretch;
`

const NamePage = styled.p`
    color: var(--Dark);
    font-size: var(--font-big);
`

const Circle = styled.div`
    background-color: ${props => props.color};
    color: var(--White, #FFF);
    border-radius: 100px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`

function MainMenu(props) {
    return(
        <MainHeaderContainer>
            <NamePage>{props.NamePage}</NamePage>
            <div style={{display: "inline-flex", alignItems: "center"}}>
                <Circle color="var(--White)" style={{marginRight: "12px"}}><Notification/></Circle>
                <Circle color="var(--Dark-Gray)">KK</Circle>
                <Arrow/>
            </div>
        </MainHeaderContainer>
    )
}

export default MainMenu