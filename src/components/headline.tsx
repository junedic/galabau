export function Headline(props: { txt: string; type: number; })
{
    let txt_size: string = "";
    switch(props.type) {
        case 0: txt_size = "text-sm";
                break;
        case 1: txt_size = "text-base";
                break;
        case 2: txt_size = "text-lg";
                break;
        case 3: txt_size = "text-xl";
                break;
        default: txt_size = "text-base";
                 break;
    }
    return(
        <div className={"flex justify-center mt-20"}>
            <span className={"bg-green-100 bg-opacity-50 p-4 border-2 border-green-400 rounded-full "+txt_size}>{props.txt}</span>
        </div>
    );
}