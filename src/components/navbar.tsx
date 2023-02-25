// @ts-ignore
import logo from '../assets/logo2.png';
// @ts-ignore
import menubutton from '../assets/menu-button.svg';
import './styles/navbar.css';
// @ts-ignore
import {Link} from "react-scroll";
import React from "react";
import ReactDOM from "react-dom";
import react from "@vitejs/plugin-react";
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';

const modalRoot = document.getElementById("modal-root");

// @ts-ignore
const Modal = props => {
    return ReactDOM.createPortal(
        <div className="overlay fixed z-10 block w-screen h-screen bg-black">

        </div>,
        modalRoot);
};


export function NavBar()
{
    const [open, setOpen] = React.useState(false);
    return(
      <div className={"flex flex-row w-screen p-5"}>
          <div className={"h-full w-1/3"}>
              <img src={logo} className={"logo-img"}/>
          </div>
          <div className={"flex w-1/3 h-full items-center justify-center"}>
              <table className={"border-separate border-spacing-10 font-serif text-xl font-bold text-white"}>
                  <tr>
                      <td>Home</td>
                      <td><Link to={"about"}>About</Link></td>
                      <td><Link to={"services"}>Services</Link></td>
                      <td>
                          <button onClick={() => setOpen(!open)}>Contact</button>
                          {open && <Modal in={open}>Click anywhere to close</Modal>}
                      </td>
                  </tr>
              </table>
          </div>
          <div className={"flex w-1/3 items-center justify-end pr-32"}>
              <div className={"bg-white border-2 rounded-full bg-opacity-25"}>
                  <svg className={"p-2"} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#FFFFFF">
                      <path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </svg>
              </div>
          </div>
      </div>
    );
}