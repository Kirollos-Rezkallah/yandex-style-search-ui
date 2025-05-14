import React from "react";

const SearchCard = React.forwardRef(
  ({ title, link, description, favicon, className = "", ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={`search-card ${className}`}
        aria-label={`Search result: ${title}`}
        {...props}>
        <div className="card-header">
          <img src={favicon} alt="" className="favicon" />
          <a
            href={link}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${link}`}>
            {link}
          </a>
        </div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </article>
    );
  }
);

export default SearchCard;
