import React, { Component } from 'react';
  import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainMenu from './component/MainMenu';
import './App.css'

import Main from './page/Main';
import Task from './page/Task';
import Selection from './page/Selection';
import LoadFile from './page/LoadFile';
import ControlUser from './page/ControlUser';
import Indicator from './page/Indicator';
import Grade from './page/Grade';
import Limit from './page/Limit';
import Schedule from './page/Schedule';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "schedule",
    element: <Schedule/>,
  },
  {
    path: "task",
    element: <Task/>,
  },
  {
    path: "selection",
    element: <Selection/>,
  },
  {
    path: "loadfile",
    element: <LoadFile/>,
  },
  {
    path: "controluser",
    element: <ControlUser/>,
  },
  {
    path: "indicator",
    element: <Indicator/>,
  },
  {
    path: "grade",
    element: <Grade/>,
  },
  {
    path: "limit",
    element: <Limit/>,
  },
]);

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem("isLogined") === undefined){localStorage.setItem("isLogined", false)};
  }

  render(){
    return(
      <>
        <MainMenu/>
        <div style={{width: "100%"}}>
          <RouterProvider router={router}/>
        </div>
      </>
    )
  }
}

export default App