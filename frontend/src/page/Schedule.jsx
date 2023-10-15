import React, { useEffect, useState } from "react";

import MainHeader from '../component/MainHeader';
import Content from "../component/Content";
import Input from "../component/Input";
import Button from "../component/Button";
import Selector from "../component/Selector";
import DateTable from "../component/DateTable";

import MounthList from "../resurses/MounthList";
import CityList from "../resurses/CityList";

import {ReactComponent as Search} from "../resurses/icons/search.svg"

function Schedule() {
    var now = new Date();
    const [NowMounth, SetMoouth] = useState(now.getMonth());
    const [Users, SetUsers] = useState();

    useEffect(() => {UpdateUser()}, [NowMounth]);

    function UpdateUser(){
        let Userdata = [];
        fetch("/user", {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            Userdata = data;
            fetch("/schedule/" + (Number(NowMounth)+1), {
                method: "GET",
            })
            .then((response) => response.json())
            .then((data) => {
                data.forEach(date => {
                    Userdata.forEach(user => {
                        if(user.id === date.user_id) {
                            user.schedule === undefined? user.schedule = [date] : user.schedule = [...user.schedule, date];
                        }
                    })                    
            });
            SetUsers(Userdata);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }

    function AddUser(name) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name })
        };
        fetch('/user', requestOptions)
        .then(async res => {
            if(res.status >= 400){
                alert("Введите имя сотрудника")
            } else{
                await UpdateUser();
            }
        })
    } 

    async function DeleteUser(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };
        fetch('/user/' + id, requestOptions)
        .finally( await UpdateUser())
    } 
    
    function AddSchedule(userId, date, typeId) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId, date: newDate.toISOString(), type_id: typeId })
        };
        fetch('/schedule', requestOptions)
        .then(async res => {
            await UpdateUser();
        })
    } 

    function ChangeSchedule(id, typeId) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type_id: typeId })
        };
        fetch('/schedule/' + id, requestOptions)
        .then(async res => {
            await UpdateUser();
        })
    } 

    return(
        <>
        <MainHeader NamePage={"График смен"}/>
        <Content>
            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <div style={{display: "flex", gap: 20}}>
                    <Input Placeholder={"Поиск"} Img={Search}/>
                    <Button>Фильтры</Button>
                </div>
                <div style={{display: "flex",  gap: 20}}>
                    <Selector value={NowMounth} onChange={(e) => SetMoouth(e.target.value)}>
                        {MounthList.map((el, i) => {
                            return <option value={i} key={i}>{el}</option>
                        })}
                    </Selector>
                    <Selector>
                        {CityList.map((el, i) => {
                            return <option value={i} key={i}>{el}</option>
                        })}
                    </Selector>
                </div>
            </div>
            <DateTable 
                NowMounth={NowMounth} 
                users={Users} 
                AddUser={AddUser} 
                DeleteUser={DeleteUser}
                AddSchedule={AddSchedule} 
                ChangeSchedule={ChangeSchedule}
            />
        </Content>
        </>
    )
}

export default Schedule