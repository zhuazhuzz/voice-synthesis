import { useState } from "react";
import BackendStatus from "./components/BackendStatus";

function App() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("english");

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Select a Voice</h1>

      <div className="w-full max-w-4xl mx-auto px-6">
        <textarea
          className="w-full p-4 border rounded resize-none"
          rows="6"
          placeholder="Enter Text"
        ></textarea>

        {/* Bottom Buttons */}
        <div className="flex justify-between mt-2">
          <select
            className="bg-white border rounded px-3 py-1 text-sm"
            defaultValue="english"
          >
            <option value="english">English (EN)</option>
            <option value="chinese">Chinese (中文)</option>
            <option value="japanese">Japanese (日本語)</option>
          </select>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm shadow">
            ▶️ Play
          </button>
        </div>
        <BackendStatus />
      </div>
    </div>
  );
}

export default App;
