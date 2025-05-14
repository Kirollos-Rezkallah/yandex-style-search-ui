import { useRef, useEffect, useState } from "react";
import SearchCard from "./components/SearchCard";
import AdSearchCard from "./components/AdSearchCard";

import SearchInput from "./components/SearchInput";

const mockResults = [
  {
    title: "React – A JavaScript library for building UIs",
    link: "https://reactjs.org",
    description: "React makes it painless to create interactive UIs...",
    favicon: "https://reactjs.org/favicon.ico",
  },
  {
    title: "Yandex Search",
    link: "https://yandex.com",
    description:
      "Yandex is a technology company that builds intelligent products...",
    favicon: "https://yandex.com/favicon.ico",
  },
];

function App() {
  const cardRefs = useRef([]);
  const [query, setQuery] = useState("");
  // const filteredResults = mockResults.filter((r) =>
  //   r.title.toLowerCase().includes(query.toLowerCase())
  // );

  useEffect(() => {
    const handleKeyDown = (e) => {
      const focusedIndex = cardRefs.current.findIndex(
        (el) => el === document.activeElement
      );

      const removeAllManualFocus = () => {
        cardRefs.current.forEach((el) => el?.classList?.remove("manual-focus"));
      };

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = cardRefs.current[focusedIndex + 1];
        if (next) {
          removeAllManualFocus();
          next.classList.add("manual-focus");
          next.focus();
        }
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = cardRefs.current[focusedIndex - 1];
        if (prev) {
          removeAllManualFocus();
          prev.classList.add("manual-focus");
          prev.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main>
      <SearchInput
        value={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
      />

      <h1
        className="fade-heading"
        style={{
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          animationDelay: "0ms",
        }}>
        Search Results
      </h1>

      {mockResults.map((result, i) => {
        const isAd = i === 1;
        const CardComponent = isAd ? AdSearchCard : SearchCard;

        return (
          <CardComponent
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            tabIndex="0"
            className="search-card"
            style={{ animationDelay: `${i * 100}ms` }} // 👈 delay per card
            {...result}
          />
        );
      })}
    </main>
  );
}

export default App;
