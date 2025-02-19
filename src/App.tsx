import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import ApplianceForm from './components/ApplianceForm';
import ApplianceList from './components/ApplianceList';
import TotalConsumption from './components/TotalConsumption';

export interface Appliance {
  id: string;
  name: string;
  consumption: number;
  hoursPerDay: number;
}

function App() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);

  const addAppliance = (appliance: Appliance) => {
    setAppliances([...appliances, appliance]);
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(appliance => appliance.id !== id));
  };

  const totalConsumption = appliances.reduce(
    (total, appliance) => total + appliance.consumption * appliance.hoursPerDay / 1000,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <Calculator className="mr-2" />
            Calculatrice de Consommation Electrique
          </h1>
        </header>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ApplianceForm onAddAppliance={addAppliance} />
          <ApplianceList appliances={appliances} onRemoveAppliance={removeAppliance} />
          <TotalConsumption totalKwh={totalConsumption} />
        </div>
      </div>
    </div>
  );
}

export default App;