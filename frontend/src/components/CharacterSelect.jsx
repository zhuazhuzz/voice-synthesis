
import CharacterCard from './CharacterCard';

const characters = [
  { name: 'Astra', image: '../img/char1.png' },
  { name: 'Ryo', image: '../img/char2.png' },
  { name: 'Kaida', image: '../img/char3.png' },
];

export default function CharacterSelect({ selected, setSelected }) {
  return (
    <div className="flex gap-6 justify-center mb-6">
      {characters.map((char) => (
        <CharacterCard
          key={char.name}
          name={char.name}
          image={char.image}
          onSelect={() => setSelected(char.name)}
          isSelected={selected === char.name}
        />
      ))}
    </div>
  );
}
