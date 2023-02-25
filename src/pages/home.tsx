import React from "react";
import {NavBar} from "../components/navbar";
import {Terminal} from "../components/terminal";
// @ts-ignore
import homenav from "../assets/bg-nav.jpg";
import {Headline} from "../components/headline";
import {Footer} from "../components/footer";

// @ts-ignore
import paving from '../assets/paving.jpeg'
// @ts-ignore
import fence from '../assets/fence.jpeg'
// @ts-ignore
import excavation from '../assets/excavation.jpeg'
import ReactDOM from "react-dom";

export class Home extends React.Component<any, any> {
    txt_about = "GalaBau-HAUS&HOF wurde gegründet um Hausverwaltungen bei der Bewältigung von Routinearbeiten zu unterstützen und deren Ressourcen passgenau zu ergänzen. worauf Hausverwaltungen besonderen Wert legen: Zuverlässigkeit, Flexibilität und Transparenz bei Kosten und Abläufen. Das Angebot wurde bestens angenommen und im Laufe der Jahre gezielt erweitert. Heute ist HAUS & HOF stark nachgefragt bei Hausverwaltungen, Unternehmen und Privatleuten. Das liegt zum einen an der hohen Qualität und dem guten Preis-Leistungs-Verhältnis – aber auch an unserer kontinuierlichen Arbeitsweise: Wir legen Wert auf eine langjährige, konstante Zusammenarbeit, die beiden Seiten Planungssicherheit gibt."
    txt_paving = "We specialise in all aspects of paving. From driveways & footpaths to more elaborate decorative jobs. We provide professional service for residential paving jobs such as driveways, pool surroundings, steps, patios, courtyards and more. Paving can be an incredibly versatile part of your outdoor area. Well considered design and professional installation will increase the value of your home and the quality of your outdoor lifestyle. For all your outdoor paving that needs contact GalaBau-Haus&Hof.";
    big = 1;
    public render()
    {
        return(
            <div className={"flex overflow-hidden flex-col w-screen max-w-full"}>
                <div id={"nav-screen"} className={"w-screen max-w-full bg-[url('src/assets/bg-nav.jpg')] bg-fixed bg-cover bg-top"}>
                    <div className={"flex max-w-full flex-none flex-col w-screen bg-green-400 bg-opacity-30"}>
                        <NavBar/>
                        <div className={"flex max-w-full flex-none w-screen justify-center pt-56 my-40"}>
                            <span className={"font-serif text-5xl text-white"}>
                                <span className={"opacity-80"}>Redefining <span className={"text-green-200 text-lime-300"}>beauty</span> in Mannheim & Rhein-Neckar.</span>
                                <br/>
                                <span className={"flex opacity-80 justify-center"}>One project at a time.</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div id={"about"} className={"flex max-w-full flex-none h-1/6 w-screen"}>
                    <Terminal img_src={homenav} header="Über Uns" txt={this.txt_about} type={this.big}/>
                </div>
                <div id={"services"}>
                    <Headline txt={"Landscaping Services"} type={3}/>
                    <div className={"flex h-1/6 w-screen overflow-hidden"}>
                        <div id={""} className={"max-w-full"}>
                            <div id={"row"} className={"flex max-w-full flex-row"}>
                                <Terminal img_src={paving} header="Pflasterarbeiten" type={0}/>
                                <Terminal img_src={fence} header="Zäune" type={0}/>
                                <Terminal img_src={excavation} header="Baggerarbeiten" type={0}/>
                            </div>

                            <div id={"row"} className={"flex max-w-full flex-row"}>
                                <Terminal img_src={homenav} header="Gartenpflege" txt={this.txt_paving} type={0}/>
                                <Terminal img_src={homenav} header="Landschaftsdesign" txt={this.txt_paving} type={0}/>
                            </div>
                        </div>
                </div>
                </div>
                <div id={"footer"}>
                    <Footer/>
                </div>
            </div>
        );
    }
}

/*
 */