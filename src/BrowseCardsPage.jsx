import React, { useState } from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { ImSubscript } from "react-icons/im";
import Mycard from './componenet/mycard';
import Genereatecard from './componenet/genereatecard';
import Calender from './componenet/calender';
import Subplan from './componenet/subplan';

function BrowseCardsPage() {
  const [selected, setSelected] = useState("My Cards");

  const renderContent = () => {
    switch (selected) {
      case "My Cards":
        return <div>< Mycard/></div>;
      case "Generate Cards":
        return <div><Genereatecard/></div>;
      case "Calendar":
        return <div><Calender/></div>;
      case "Subs Plan":
        return <div>< Subplan/></div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="h-[85vh] w-[23%] border-r border-gray-200 bg-white p-4">
        <nav className="flex flex-col space-y-2">
          <NavItem icon={<FaMobileScreen />} label="My Cards" onClick={setSelected} selected={selected} />
          <NavItem icon={<CiCreditCard1 />} label="Generate Cards" onClick={setSelected} selected={selected} />
          <NavItem icon={<SlCalender />} label="Calendar" onClick={setSelected} selected={selected} />
          <NavItem icon={<ImSubscript />} label="Subs Plan" onClick={setSelected} selected={selected} />
        </nav>
      </aside>

      {/* Content Area */}
      <main className="p-6 w-full">
        <h1 className="text-2xl font-semibold mb-4">{selected}</h1>
        <div className="text-gray-600">{renderContent()}</div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, onClick, selected }) {
  const isActive = selected === label;

  return (
    <div
      onClick={() => onClick(label)}
      className={`flex items-center h-14 px-4 rounded-lg cursor-pointer transition ${
        isActive ? "bg-red-100 text-red-500" : "hover:bg-gray-100 text-red-400"
      }`}
    >
      <div className="text-2xl">{icon}</div>
      <p className="text-lg ml-4">{label}</p>
    </div>
  );
}

export default BrowseCardsPage;
