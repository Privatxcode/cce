import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Appliance } from '../App';

interface ApplianceFormProps {
  onAddAppliance: (appliance: Appliance) => void;
}

const ApplianceForm: React.FC<ApplianceFormProps> = ({ onAddAppliance }) => {
  const [name, setName] = useState('');
  const [consumption, setConsumption] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && consumption && hoursPerDay) {
      onAddAppliance({
        id: Date.now().toString(),
        name,
        consumption: parseFloat(consumption),
        hoursPerDay: parseFloat(hoursPerDay),
      });
      setName('');
      setConsumption('');
      setHoursPerDay('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de l'appareil"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          placeholder="Consommation (watts)"
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(e.target.value)}
          placeholder="Heure par jour"
          className="border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <Plus className="mr-2" size={18} />
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default ApplianceForm;