import { useState } from "react";
import "../styles/PyramidGame.css"; // we’ll create this too
import pharaohImg from "../assets/pharaoh.png";
import happyPharaohImg from "../assets/pharaoh-happy.png";
import backgroundImg from "../assets/background.png";
import cupImg from "../assets/cup.png";
import stoneImg from "../assets/stone.png";
function PyramidGame() {
  const MAX_BLOCKS = 15;
  const [blocks, setBlocks] = useState(0);
  const rows = [1, 2, 3, 4, 5]; // bottom to top

  const handleAddBlock = () => {
    if (blocks < MAX_BLOCKS) {
      setBlocks((b) => b + 1);
    }
  };

  return (
    <div className="pyramid-game">
      <img src={backgroundImg} alt="desert" className="background" />

      {blocks < MAX_BLOCKS ? (
        <img src={pharaohImg} alt="pharaoh" className="pharaoh" />
      ) : (
        <img
          src={happyPharaohImg}
          alt="happy pharaoh"
          className="pharaoh happy"
        />
      )}

      <div className="pyramid">
        {rows.map((count, rowIndex) => (
          <div key={rowIndex} className="pyramid-row">
            {Array.from({ length: count }).map((_, colIndex) => {
              const currentBlockIndex =
                rows.slice(0, rowIndex).reduce((acc, n) => acc + n, 0) +
                colIndex;
              return (
                <div
                  key={colIndex}
                  className="block"
                  style={{
                    backgroundImage:
                      blocks > currentBlockIndex ? `url(${stoneImg})` : "none",
                    backgroundSize: "cover",
                  }}></div>
              );
            })}
          </div>
        ))}
      </div>

      {blocks >= MAX_BLOCKS ? (
        <div className="celebration">
          <img src={cupImg} alt="trophy" />
          <p>🏆 Great job, Pharaoh! Your pyramid is complete!</p>
          <img
            src={happyPharaohImg}
            alt="happy pharaoh"
            className="pharaoh-happy"
          />
          <button onClick={() => setBlocks(0)}>🔁 Play again</button>
        </div>
      ) : (
        <img
          src={stoneImg}
          alt="stone block"
          className="stone-button"
          onClick={handleAddBlock}
        />
      )}
    </div>
  );
}

export default PyramidGame;
