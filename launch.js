
import { useState } from "react";
import axios from "axios";

export default function Launch() {
  const [status, setStatus] = useState("");

  const handleLaunch = async () => {
    setStatus("Launching...");
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/deploy-automation", {
        project_name: "FocusFlow AI",
        niche: "AI-powered Study Planner",
        target_url: "https://focusflow.carrd.co"
      });
      setStatus(JSON.stringify(res.data));
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Launch Micro-SaaS</h2>
      <button onClick={handleLaunch}>Launch</button>
      <pre>{status}</pre>
    </div>
  );
}
