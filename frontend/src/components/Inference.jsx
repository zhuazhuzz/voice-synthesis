import React from "react";
import { useState } from "react";



export default function Inference() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("english");
  const [count, setCount] = React.useState(0);

  const handlePlay = async () => {
    if (!text.trim()) {
      alert("Please enter text.");
      return;
    }

    const routeMap = {
      english: "/synthesize/en",
      chinese: "/synthesize/zh",
      japanese: "/synthesize/ja",
    };

    const endpoint = routeMap[language];

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Synthesis failed");
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error("Error:", err);
      alert("Synthesis failed. Check logs.");
    }
  };

  return (
    <div className="h-full bg-gray-600 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">Select a Voice</h1>
      <div className="w-full max-w-2xl mx-auto px-6">
        <textarea
          className="w-full p-4 border rounded resize-none"
          rows="6"
          maxLength={100}
          placeholder="Enter Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setCount(e.target.value.length);
          }}
        ></textarea>

        <div className="text-sm text-gray-600 mt-1 text-right">
          {count}/100 characters
        </div>

        <div className="flex justify-between mt-2">
          <select
            className="bg-white border rounded px-3 py-1 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English (EN)</option>
            <option value="chinese">Chinese (中文)</option>
            <option value="japanese">Japanese (日本語)</option>
          </select>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm shadow"
            onClick={handlePlay}
          >
            ▶️ Play
          </button>
        </div>

        {/* <BackendStatus /> */}
      </div>
    </div>
  );
}

