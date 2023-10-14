import styled from "styled-components";

import { useState } from "react";

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

const Modal = styled.div`
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.14);
    overflow: hidden;
    gap:1px;
    margin-top: 240px;
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

function UserCell({idSchedule, idUser, Func, TypeId, Date}) {
    const [isShow, Show] = useState(false);
    const TypeList = [
        {id: 1, name: "1", BGcolor: "none"},
        {id: 2, name: "н", BGcolor: "var(--Red-Shade)"},
        {id: 3, name: "о", BGcolor: "var(--Blue-Status)", color: "var(--White)"},
        {id: 4, name: "б", BGcolor: "var(--Yellow-Status)"},
        {id: 5, name: "у", BGcolor: "var(--Red-Status)", color: "var(--White)"}
    ];
    return(
        <Cell 
            style={{backgroundColor: TypeList[TypeId]?.BGcolor, color: TypeList[TypeId]?.color, 
                    outline: isShow? "2px solid var(--Red)": null, borderRadius: isShow? "2px" : null,
                    zIndex: isShow? "1000" : null  
            }} onClick={() => Show(!isShow)}>
            {TypeList[TypeId]?.name}
            {isShow? 
            <Modal onClick={() => {Show(!isShow)}}>
                <Button onClick={() => idSchedule? Func(idSchedule, 1) : Func(idUser, Date, 1)}>Рабочик День</Button>
                <Button onClick={() => idSchedule? Func(idSchedule, 2) : Func(idUser, Date, 2)}>Выходной</Button>
                <Button onClick={() => idSchedule? Func(idSchedule, 3) : Func(idUser, Date, 3)}>Отпуск</Button>
                <Button onClick={() => idSchedule? Func(idSchedule, 4) : Func(idUser, Date, 4)}>Больничный</Button>
                <Button onClick={() => idSchedule? Func(idSchedule, 5) : Func(idUser, Date, 5)}>Увольнение</Button>
            </Modal>
            :null}
        </Cell>
    )
}

export default UserCell