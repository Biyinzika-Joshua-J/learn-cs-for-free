import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { updateActiveTabIdx } from "../../features/tabsSlice";

const tabNames = ["About", "Content", "Read"];

const Tabs = () => {
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(0)

    function changeTabHandler(currentTab){
        setActiveTab(currentTab)
        dispatch(updateActiveTabIdx(currentTab))
    }
 
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="">
        {tabNames.map((name, idx) => (
          <button onClick={()=>changeTabHandler(idx)} key={idx} className={`${activeTab==idx?'bg-gray-500':'bg-gray-300'} py-2 px-2`}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
