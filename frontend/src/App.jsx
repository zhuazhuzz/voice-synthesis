import { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import DetailsForm from './components/DetailsForm';


function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <h1 className="text-3xl font-bold text-center mb-8">Select a Voice</h1>
      <CharacterSelect selected={selectedCharacter} setSelected={setSelectedCharacter} />
      {selectedCharacter && (
        <div className="text-center text-lg mb-6">You selected: <strong>{selectedCharacter}</strong></div>
      )}
      <DetailsForm />
    </div>
  );
}

export default App;
