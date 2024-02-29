import { useState } from "react";

export const DropDown = ({handler,selected}) => {
    const colorMap = {
        "pending": "bg-[#EFB700]",
        "approved": " bg-green-500",
        "rejected": "bg-red-500"
    }
    const colorMap2 = {
        "pending": "bg-[#EFB700] border-yellow-500",
        "approved": "bg-green-500 border-green-500",
        "rejected": "bg-red-500 border-red-500"
    }
    const titles = ["pending", "rejected", "approved"];
    const [showDropdown,setDropdown] = useState(true);
  return (
    <div className="relative min-h-[2.5rem]"  onClick={()=>{setDropdown(prev=>!prev)}}>
        <div  className={` ${colorMap[selected]} px-3 py-2 rounded-md text-center text-sm hover:cursor-pointer`}>
            {selected}
        </div>
            
        {showDropdown?"":
            <div className="absolute right-0 min-w-[5rem] top-0 rounded-md overflow-hidden">
            {titles.map(function(title, index) {
                return <div key={index} onClick={()=>handler(title)} className={`px-3 hover:border-b-white border-b-[2px] border-[${colorMap2}] text-white hover:cursor-pointer py-2 text-center text-sm ${colorMap2[title]}`}>{title}</div>
            })}
        </div>
        }
    </div>
  )
}
