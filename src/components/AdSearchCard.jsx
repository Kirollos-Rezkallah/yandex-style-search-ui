import SearchCard from "./SearchCard";

function AdSearchCard(props) {
  return (
    <div style={{ position: "relative" }}>
      <SearchCard {...props} />
      <span className="ad-badge" role="note" aria-label="Advertisement">
        Ad
      </span>
    </div>
  );
}

export default AdSearchCard;
