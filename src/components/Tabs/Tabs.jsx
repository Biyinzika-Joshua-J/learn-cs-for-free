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
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabNames.map((name, idx) => (
          <button onClick={()=>changeTabHandler(idx)} key={idx} className={`inline-block p-4 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 ${activeTab==idx?'bg-gray-500 text-white':'bg-gray-100 text-black  '} py-2 px-2`}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
