import styled from "styled-components";

import { Children, useState } from "react";

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
    overflow: hidden;

`

const Modal = styled.div`
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.14);
    overflow: hidden;
    gap:1px;
    margin-top: 240px;
` 

function UserCell(props) {
    const {id, ShowRedact, isShowRedact, idSchedule, idUser, Func, TypeId, Date} = props
    const TypeList = [
        {id: 1, name: "1", BGcolor: "var(--White)", color: "var(--Dark)"},
        {id: 2, name: "Н", BGcolor: "var(--Red-Shade)", color: "var(--Dark)"},
        {id: 3, name: "о", BGcolor: "var(--Blue-Status)", color: "var(--White)"},
        {id: 4, name: "б", BGcolor: "var(--Yellow-Status)", color: "var(--Dark)"},
        {id: 5, name: "у", BGcolor: "var(--Red-Status)", color: "var(--White)"}
    ];

    let isSelected = false;
    isShowRedact?.map(el => {
        if(el.id === id.id && el.userID === id.userID){
            isSelected = true
            return;
        }
    })

    const addRedact = () =>{
        let newArray = [];
        let have = false;
        if(isShowRedact.length != 0){
            isShowRedact.map(el =>{
                if(el.id === id.id && el.userID === id.userID){
                    have = true;
                } 
            })
            if(!have){
                newArray = [...isShowRedact, id];
            } else{
                isShowRedact.map(el => {
                    if(el.id === id.id && el.userID === id.userID){

                    } else{
                        newArray.push(el);
                    }
                })
            }
        } else{
            newArray.push(id);
        }
        ShowRedact(newArray);
    }

    return(
        <div>
            <Cell 
                style={{
                    backgroundColor: TypeList[TypeId]?.BGcolor, 
                    color: TypeList[TypeId]?.color, 
                    border: isSelected? "2px solid var(--Red)": null, 
                    maxWidth: isSelected? "17px": "20px", 
                    maxHeight: isSelected? "25px": "27px", 
                    minWidth: isSelected? "17px": "20px", 
                    minHeight: isSelected? "25px": "27px", 
                    borderRadius: isSelected? "2px" : null,
                    zIndex: isSelected? "1000" : null
                }} 
                onClick={() => addRedact()}
            >
                {TypeList[TypeId]?.name || "-"}
            </Cell>
            {props.children}
        </div>
    )
}

export default UserCell