import React, { useState } from "react";
import { ProcedureType } from "@/types/ProcedureType";
import ChevronDownIcon from "@/components/ChevronDownIcon";

interface ProcedureProps {
  procedures: ProcedureType[];
}

const Procedure: React.FC<ProcedureProps> = ({ procedures }) => {
  const [expandedProcedure, setExpandedProcedure] = useState<string | null>(
    null
  );
  const toggleProcedure = (name: string) => {
    if (expandedProcedure === name) {
      setExpandedProcedure(null);
    } else {
      setExpandedProcedure(name);
    }
  };

  return (
    <div className="">
      <h2 className="text-xl mb-4">Procedures</h2>

      {procedures.map((procedure) => (
        <div key={procedure.name} className="mb-8 border-b-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleProcedure(procedure.name)}
          >
            <h3
              className={`text-sm ${
                expandedProcedure === procedure.name
                  ? "text-left"
                  : "text-center"
              }`}
            >
              {procedure.name}
            </h3>
            <ChevronDownIcon
              className={`h-3 w-3 transition-transform ${
                expandedProcedure === procedure.name ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              expandedProcedure === procedure.name
                ? "max-h-[1000px]"
                : "max-h-0"
            }`}
          >
            <div className="mt-2 text-sm text-slate-gray">
              <p>{procedure.description}</p>
              <p>Average Cost: {procedure.averageCost}</p>
              <p>Average Duration: {procedure.averageDays}</p>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full py-3 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Contact Now
      </button>
    </div>
  );
};

export default Procedure;
