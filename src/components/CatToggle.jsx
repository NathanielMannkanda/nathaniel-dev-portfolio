import "./CatToggle.css";
import { useState, useEffect } from "react";


export default function CatToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const cat = document.getElementById("oneko");
    if (!cat) return;

    cat.style.display = enabled ? "block" : "none";
  }, [enabled]);

  return (
    <div className="switch-container">
      <div>
        Disable Cat 
      </div>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>

  );
}