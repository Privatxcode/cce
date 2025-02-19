import React from 'react';
import { Trash2 } from 'lucide-react';
import { Appliance } from '../App';

interface ApplianceListProps {
  appliances: Appliance[];
  onRemoveAppliance: (id: string) => void;
}

const ApplianceList: React.FC<ApplianceListProps> = ({ appliances, onRemoveAppliance }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Appareils</h2>
      {appliances.length === 0 ? (
        <p className="text-gray-500">Aucun appareil ajouté.</p>
      ) : (
        <ul className="space-y-2">
          {appliances.map((appliance) => (
            <li key={appliance.id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
              <div>
                <span className="font-medium">{appliance.name}</span>
                <span className="text-sm text-gray-600 ml-2">
                  ({appliance.consumption}W, {appliance.hoursPerDay} heures/jour)
                </span>
              </div>
              <button
                onClick={() => onRemoveAppliance(appliance.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplianceList;