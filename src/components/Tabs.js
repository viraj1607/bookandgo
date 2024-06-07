// Tabs.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full text-center pt-8 box-border border-black-300 rounded-lg">
      <div className="inline-flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-8 py-4 text-lg font-semibold focus:outline-none border border-transparent ${
              activeTab === index ? "text-orange-500 border-blue-500" : "text-black-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Tabs;
