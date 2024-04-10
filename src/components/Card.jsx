import { useState } from "react"

export const Card = ({image , title , para, optionNo})=>{

    function handleChange(e){
        // console.log(e.target.)
    }

    const [option , setOption] = useState(false)

    function handleClick(){
        setOption(!option)
    }

    return (
        <div onClick={handleClick} className={option? "flex max-h-64 border-2 border-pink-500 hover:cursor-pointer flex-col my-2 text-center items-center p-4 max-w-68 rounded-2xl max-w-64":"flex border hover:cursor-pointer flex-col my-2 text-center items-center p-6 max-w-64 max-h-68 rounded-2xl"}>
            <div className={option?"flex flex-col items-center -translate-y-20 ":"flex flex-col items-center translate-y-0 "}>
                <img onClick={handleClick} className={option? "max-w-52 hover:cursor-pointer  max-h-32":"max-w-52 mb-0 hover:cursor-pointer  max-h-32"} src={image} alt="image" />
                <span onClick={handleClick} className="font-bold hover:cursor-pointer m-1 mt-1 text-lg ">{title}</span>
                <p onClick={handleClick} className={option?"text-gray-500 max-w-56 mb-1 mt-1 text-sm" : "text-sm text-gray-500 max-w-56 mt-1 mb-1 hidden"}>{para}</p>
                <div className="size-5 mt-1 rounded-full border">
                    <input name = {optionNo} checked = {option} onChange={handleChange}  className="rounded-checkbox size-6 border-1 rounded-full accent-pink-500" type="checkbox" />
                </div>
            </div>

        </div>
    )
}