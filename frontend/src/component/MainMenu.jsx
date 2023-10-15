import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../resurses/icons/logo.svg";
import { ReactComponent as Calendar } from "../resurses/icons/calendar.svg";
import { ReactComponent as Booklet } from "../resurses/icons/booklet.svg";
import { ReactComponent as User } from "../resurses/icons/user.svg";
import { ReactComponent as Truck } from "../resurses/icons/truck.svg";
import { ReactComponent as Admin} from "../resurses/icons/admin.svg";
import { ReactComponent as Briefcase} from "../resurses/icons/briefcase.svg";
import { ReactComponent as Wechat} from "../resurses/icons/wechat.svg";
import { ReactComponent as Alert} from "../resurses/icons/alert.svg";
import { ReactComponent as Quit} from "../resurses/icons/quit.svg";

const MainMenUContainer = styled.div`
    display: inline-flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    background: var(--White);
    box-shadow: 0px 2px 2px 0px rgba(34, 62, 78, 0.15);
`

const ItemList = styled.div`
    display: flex;
    width: 60px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    margin-bottom: auto;
    padding-top: 20px;
    gap: 10px;
`

const Item = styled.a`
    display: flex;
    width: 56px;
    height: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: ${props => props.$active? "var(--Ligtn-Gray-Blue)" : ""};
    border-left: ${props => props.$active? "4px solid var(--Red)" : "4px solid transparent;"};
`

function MainMenu() {
    return(
        <MainMenUContainer>
            <Item style={{width: "56px", height: "56px"}}>
                <Logo/>
            </Item>
            <ItemList>
                <Item href="/schedule" $active={window.location.pathname === "/schedule"}>
                    <Calendar fill={window.location.pathname === "/schedule"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/task" $active={window.location.pathname === "/task"}>
                    <Booklet fill={window.location.pathname === "/task"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/selection" $active={window.location.pathname === "/selection"}>
                    <User fill={window.location.pathname === "/selection"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/loadfile" $active={window.location.pathname === "/loadfile"}>
                    <Truck fill={window.location.pathname === "/loadfile"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/controluser" $active={window.location.pathname === "/controluser"}>
                    <Admin fill={window.location.pathname === "/controluser"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>    
                </Item>
                <Item href="/indicator" $active={window.location.pathname === "/indicator"}>
                    <Briefcase fill={window.location.pathname === "/indicator"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/grade" $active={window.location.pathname === "/grade"}>
                    <Wechat fill={window.location.pathname === "/grade"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
                <Item href="/limit" $active={window.location.pathname === "/limit"}>
                    <Alert fill={window.location.pathname === "/limit"? "var(--Dark-gray)" : "var(--Middle-Gray-Blue)"}/>
                </Item>
            </ItemList>
            <Item  href="">
                <Quit/>
            </Item>
        </MainMenUContainer>
    )
}

export default MainMenu