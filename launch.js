
import { useState } from "react";
import axios from "axios";

export default function Launch() {
  const [status, setStatus] = useState("");

  const launchAutomation = async () => {
    setStatus("Launching...");
    const res = await axios.post("http://localhost:8000/deploy-automation", {
      project_name: "Instant Niche Launchpad",
      niche: "AI-powered Study Planner",
      target_url: "https://your-niche-site.carrd.co"
    });
    setStatus(res.data.message);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Launch Micro-SaaS</h2>
      <button onClick={launchAutomation}>Launch</button>
      <p>{status}</p>
    </div>
  );
}
