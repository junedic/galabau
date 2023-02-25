import React from "react";
import './styles/terminal.css';

export class Terminal extends React.Component<any, any> {

    private img_src!: string;
    private txt!: string;
    private type!: number;

    constructor(props: { img_src: string; txt: string; type: number; header:string}) {
        super(props);
        this.img_src = props.img_src;
        this.txt = props.txt;
        this.type = props.type;
    }

    private constructTermSmall()
    {
        return(
            <div className={"flex flex-col w-full overflow-hidden justify-evenly m-20"}>
                <div className={"flex h-full"}>
                    <img src={this.img_src} className={"object-cover"}/>
                </div>
                <div className={"flex justify-center bg-green-800"}>
                    <span className={"text-center text-3xl p-10 text-white"}>{this.props.header}</span>
                    <br/>
                    <span className={"text-base"}>{this.txt}</span>
                </div>
            </div>
        );
    }

    private constructTermBig()
    {
        return(
            <div className={"termbig flex flex-row w-full overflow-hidden p-20 pl-80 pr-80"}>
                <div className={"w-3/5"}>
                    {this.txt}
                </div>
                <div className={"w-2/5 bg-cover bg-[url('src/assets/home-nav-bg.jpg')]"}/>
            </div>
        );
    }

    public render() {
        if(this.type === 0)
            return this.constructTermSmall()
        else if (this.type === 1)
            return this.constructTermBig()
    }
}