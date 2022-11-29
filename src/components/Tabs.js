import { useState } from "react";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      tabBody: "Tab Body 1",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      tabBody: "Tab Body 2",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      tabBody: "Tab Body 3",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          );
        })}
      </div>
      <div className="container">
        {tabs.map((tab, i) => {
          return (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <p>{tab.tabBody}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
