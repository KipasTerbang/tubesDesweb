/* eslint-disable react/prop-types */

import { useState } from "react";

const TabSwitch = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState("day");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="flex items-center gap-4">
            <button
                className={` py-1 w-12 px-2 rounded ${activeTab === "day"
                        ? "bg-blue text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                onClick={() => handleTabChange("day")}
            >
                Day
            </button>
           
            <button
                className={`py-1 w-12 flex justify-center px-2 rounded ${activeTab === "week"
                        ? "bg-blue text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                onClick={() => handleTabChange("week")}
            >
                <p>Week</p>
            </button>
        </div>
    );
};

export default TabSwitch;
