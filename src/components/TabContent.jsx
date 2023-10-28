/* eslint-disable react/prop-types*/

import { useState } from "react";
export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }
  function handleNegativeInc() {
    if (likes >= 1) setLikes(likes - 1);
  }
  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <button onClick={handleNegativeInc}>👎</button>
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>👍</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}
