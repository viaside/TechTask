import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ReactComponent as User } from "../resurses/icons/user.svg";
import { ReactComponent as Plus } from "../resurses/icons/plus.svg";

import WeekList from "../resurses/WeekList"
import ButtonMore from "./DateTableEl/ButtonMore";
import UserCell from "./DateTableEl/UserCell";

const Table = styled.table`
    margin-top: 24px;
    border-collapse: collapse;
    border-radius: 12px;
    border-style: hidden;
    box-shadow: 0 0 0 1px var(--Middle-Gray-Blue);
    overflow: hidden;
    font-size: var(--font-small);
`
const Row = styled.tr`
    display: flex;
    height: 35px;
    align-items: flex-start;
    align-self: stretch;
    border-bottom: 1px solid var(--Middle-Gray-Blue, #B8C4DB);

`
const RowDefault = styled.tr`
    display: flex;
    max-height: 35px;
    min-height: 35px;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    align-self: stretch;
    border-bottom: 1px solid var(--Middle-Gray-Blue, #B8C4DB);
    background: var(--Ligtn-Gray-Blue, #F4F6F9);

`
const Cell = styled.td`
    display: flex;
    max-width: 20px;
    max-height: 27px;
    min-width: 20px;
    min-height: 27px;
    width: 100%;
    height: 100%;
    padding: 4px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-left: 1px solid var(--Middle-Gray-Blue, #B8C4DB);
`

const CellStart = styled.td`
    display: flex;
    max-width: 300px;
    max-height: 27px;
    min-width: 300px;
    min-height: 27px;
    width: 100%;
    height: 100%;
    padding: 4px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
`

const Modal = styled.div`
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.14);
    overflow: hidden;
    gap:1px;
` 

const Button = styled.div`
    display: flex;
    width: 300px;
    padding: 10px 24px;
    align-items: flex-start;
    background-color: var(--White);
    font-size: var(--font-medium);
    border-bottom: solid 1px var(--Gray);
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        background-color: var(--Gray);
    };
`   

function DateTable({NowMounth, users, AddUser, DeleteUser, AddSchedule, ChangeSchedule}) {
    const [Users, SetUsers] = useState([{}]);
    const [NewUser, SetNewUser] = useState(null);
    const [isShowRedact, ShowRedact] = useState([]);
    const QuantityDay = 32 - new Date(2023, NowMounth, 32).getDate();
    
    useEffect(() => {SetUsers(users)}, [users]);


    const AddDefaultRow = () => {
        let Day = [];
        let Week = [];
        for (let i = 1; i <= QuantityDay; i++) {
            const date = new Date(2023, NowMounth, i);
            if(date.getDay() === 0 || date.getDay() === 6){
                Day.push(<Cell style={{backgroundColor: "var(--Red-Shade)", color: "var(--Red)"}} key={i+"day"}>{i}</Cell>)
                Week.push(<Cell style={{backgroundColor: "var(--Red-Shade)", color: "var(--Red)"}} key={i+"week"}>{WeekList[date.getDay()]}</Cell>)
            } else{
                Day.push(<Cell key={i+"day"}>{i}</Cell>);
                Week.push(<Cell key={i+"week"}>{WeekList[date.getDay()]}</Cell>);
            }
        }
        return (
            <>
                <RowDefault><CellStart></CellStart>{Week}</RowDefault>
                <RowDefault><CellStart>Сотрудник</CellStart>{Day}</RowDefault>
            </>
        );
    }
    
    const AddBottomRow = () => {
        let content = [];
        for (let i = 1; i <= QuantityDay; i++) {
            const date = new Date(2023, NowMounth, i);
            if(date.getDay() === 0 || date.getDay() === 6){
                content.push(<Cell style={{backgroundColor: "var(--Red-Shade)", color: "var(--Red)"}} key={i+"dayEmpty"}></Cell>)
            } else{
                content.push(<Cell key={i+"dayEmpty"}></Cell>);
            }
        }
        return content;
    }

    const MoreAddSchedule = (type) => {
        isShowRedact.forEach(el => {
            if(el.isNew){
                AddSchedule(el.userID, el.date, type);
            }else{
                ChangeSchedule(el.idSchedule, type);
            }
        });
        ShowRedact([]);
    }

    const AddDayOperator = (UserID, Schedule) => {
        let content = [];
        for (let i = 1; i <= QuantityDay; i++) {
            const date = new Date(2023, NowMounth, i);
            if(date.getDay() === 0 || date.getDay() === 6){
                content.push(<Cell style={{backgroundColor: "var(--Red-Shade)"}} key={i+"dayOp"}>Н</Cell>)
            } else{
                let Added = false;
                Schedule?.map(el => {
                    if(el.date === date.toISOString()){
                        content.push(
                            <UserCell id={{id:i, userID: UserID, idSchedule: el.id, isNew: false}} ShowRedact={ShowRedact} isShowRedact={isShowRedact} key={i+"-"+UserID} TypeId={el.type_id-1}>
                                {isShowRedact[0]?.id === i && isShowRedact[0]?.userID === UserID? 
                                    <Modal>
                                        <Button onClick={() => MoreAddSchedule(1)}>Рабочик День</Button>
                                        <Button onClick={() => MoreAddSchedule(2)}>Выходной</Button>
                                        <Button onClick={() => MoreAddSchedule(3)}>Отпуск</Button>
                                        <Button onClick={() => MoreAddSchedule(4)}>Больничный</Button>
                                        <Button onClick={() => MoreAddSchedule(5)}>Увольнение</Button>
                                    </Modal> 
                                : null}
                            </UserCell>
                        ) 
                        Added = true;
                    }
                })
                if(!Added){
                    content.push(
                        <UserCell id={{id:i, userID: UserID, date: date, isNew: true}} ShowRedact={ShowRedact} isShowRedact={isShowRedact} key={i+"-"+UserID}>
                            {isShowRedact[0]?.id === i && isShowRedact[0]?.userID === UserID? 
                                <Modal onClick={() => {ShowRedact([])}}>
                                    <Button onClick={() => {MoreAddSchedule(1)}}>Рабочик День</Button>
                                    <Button onClick={() => {MoreAddSchedule(2)}}>Выходной</Button>
                                    <Button onClick={() => {MoreAddSchedule(3)}}>Отпуск</Button>
                                    <Button onClick={() => {MoreAddSchedule(4)}}>Больничный</Button>
                                    <Button onClick={() => {MoreAddSchedule(5)}}>Увольнение</Button>
                                </Modal> 
                            : null}
                        </UserCell>
                    )
                }
            }   
        }
        return content;
    }

    return(
        <Table>
            <tbody>
                {AddDefaultRow()}
                {Users?.map((el, i) => {
                    return(
                        <Row key={i}>
                            <CellStart>
                                {el.name? el.name : 
                                    <>
                                        <input 
                                            style={{height: "100%", background: "none", border: "none"}} 
                                            placeholder="name" 
                                            onChange={(e) => SetNewUser(e.target.value)}
                                        />
                                        <button 
                                            style={{height: "100%", background: "none", border: "none", color: "var(--Blue-Link)"}} 
                                            onClick={() => {AddUser(NewUser); SetNewUser(null)}}
                                        >
                                            Добавить
                                        </button>
                                    </>
                                }  
                                <div style={{display: "flex"}}>
                                    <User fill="var(--bia-gray-color-1)"/>
                                    <ButtonMore Delete={DeleteUser} Id={el.id}/> 
                                </div>
                            </CellStart>
                            {AddDayOperator(el.id, el.schedule)}
                        </Row>
                    )
                })}
                <Row style={{border: "none"}}>
                    <CellStart 
                        style={{ color: "var(--Blue-Link)", justifyContent: "flex-start"}} 
                        onClick={() => SetUsers([ ...Users, {name: ""}])}
                    >
                        <Plus/> Добавить сотрудника
                    </CellStart>
                    {AddBottomRow()}
                </Row>
            </tbody>
        </Table>
    )
}

export default DateTable