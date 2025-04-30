export default function CharacterCard({ name, image, onSelect, isSelected }) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer p-4 rounded-xl shadow-md border-2 transition ${
        isSelected ? "border-blue-500 scale-105" : "border-gray-300"
      } hover:border-blue-400 hover:scale-105`}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto"
      />
      <p className="mt-2 text-center font-semibold">{name}</p>
    </div>
  );
}
