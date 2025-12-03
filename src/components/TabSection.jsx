import React, { useState } from "react";

export default function TabSection(){
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tab-section">
        <div className="container">

            {/* Tab Buttons */}
            <div className="tab-buttons">
                <button
                className={activeTab === "tab1" ? "active" : ""}
                onClick={() => setActiveTab("tab1")}
                >
                Tab 1
                </button>

                <button
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => setActiveTab("tab2")}
                >
                Tab 2
                </button>

                <button
                className={activeTab === "tab3" ? "active" : ""}
                onClick={() => setActiveTab("tab3")}
                >
                Tab 3
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">

                {activeTab === "tab1" && (
                    <div className="content">
                        <p>This is Tab 1 Content</p>

                    </div>
                )}

                {activeTab === "tab2" && (
                    <div className="content">
                        <p>This is Tab 2 Content</p>
                    </div>
                )}

                {activeTab === "tab3" && (
                    <div className="content">
                        <p>This is Tab 3 Content</p>
                    </div>
                )}

            </div>

        </div>
    </div>
  );
}