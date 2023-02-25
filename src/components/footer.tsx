import React from "react";
import './styles/footer.css';
// @ts-ignore
import logo from '../assets/logo2.png';

export class Footer extends React.Component<any, any> {


    public render() {
        return(
            <div className={"flex flex-row w-screen bg-green-800 mt-60 bg-[url('src/assets/bg-nav.jpg')] bg-fixed bg-cover bg-bottom"}>
                <div className={"flex bg-green-800 bg-opacity-90"}>
                    <div className={"flex w-1/2"}>
                        <img src={logo} className={"w-1/2 h-fit p-20"}/>
                    </div>
                    <div className={"flex w-1/2 justify-end p-20"}>
                        <table className={"border-separate text-white text-2xl"}>
                            <tbody>
                                <tr>
                                    <td className={"pr-5"}>Impressum </td>
                                    <td className={"pr-36"}>Kontakt </td>
                                    <td className={""}>| Datenschutzerklärung</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}