import React from 'react';
import { Zap } from 'lucide-react';

interface TotalConsumptionProps {
  totalKwh: number;
}
const TotalConsumption: React.FC<TotalConsumptionProps> = ({ totalKwh }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        <Zap className="mr-2" />
        Consommation totale journalière
      </h2>
      <p className="text-3xl font-bold text-blue-700">
        {totalKwh.toFixed(2)} kWh
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Ceci est une estimation de la consommation. Multipliez ceci par le nombre de jour pour determiner combien de kWh seront nécessaire.
      </p>
    </div>
  );
};

export default TotalConsumption;