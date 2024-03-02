import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
export const DropDown = ({handler,selected}) => {
  function setCloseDropdownListner () {
    document.addEventListener("click",
      ()=>{
        setDropdown(false);
      }
    )}
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
    const [showDropdown,setDropdown] = useState(false);
  return (
    <div className="relative w-full min-h-[2.5rem]"  onClick={(e)=>{
      e.stopPropagation();
      setDropdown(true);
      setCloseDropdownListner();
    }
    }>
      {showDropdown ?
        <div className="absolute z-[500] w-fit right-0 min-w-[5rem] top-0 rounded-md overflow-hidden">
          {titles.map(function (title, index) {
            return <div key={index} onClick={() => handler(title)}
                        className={`px-3 w-[8vw] hover:border-b-white border-b-[2px] border-[${colorMap2}] text-white hover:cursor-pointer py-2 text-center text-sm ${colorMap2[title]}`}>{title}</div>
          })}
        </div> :
        <div className={` ${colorMap[selected]} justify-between flex w-[8vw] items-center absolute right-0 px-3 py-2 rounded-md text-center text-sm hover:cursor-pointer`}>
          <span>{selected}</span><MdArrowDropDown className={"text-2xl"}/>
        </div>
      }
    </div>
  )
}
