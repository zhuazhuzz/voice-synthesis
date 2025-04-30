export default function DetailsForm() {
    return (
      <div className="rows-3">
        <input
          type="text"
          placeholder="Enter your message"
          className=""
        />
        <select className="">
          <option>Select Language</option>
          <option>English</option>
          <option>Japanese</option>

        </select>
        <button> Button</button>
      </div>
    );
  }
  