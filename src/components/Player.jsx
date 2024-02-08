import { useState } from "react";

export const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditName = () => {
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !isEditing);
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="textbox"
            value={playerName}
            onChange={handleNameChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditName}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};
