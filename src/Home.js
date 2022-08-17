import React from "react";
import Info from "./DashboardPanel/Info";
import Allocation from "./DashboardPanel/Allocation";
import Performance from "./DashboardPanel/Performance";
import Positions from "./DashboardPanel/Positions";

export default function Home() {
    return (
        //console.log("home!")
        < div >
            <div className="panels">
                <div className="panel-info">
                    <Info />
                </div>
                <div className="panel-allocation">
                    <Allocation />
                </div>
                <div className="panel-balance">
                    <Performance />
                </div>
                <div className="panel-positions">
                    <Positions />
                </div>
            </div>
        </div >
    );
}