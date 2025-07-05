const Card = ({ anime }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={anime.attributes.posterImage?.medium}
        className="card-img-top"
        alt={anime.attributes.canonicalTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{anime.attributes.canonicalTitle}</h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          {anime.attributes.synopsis?.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default Card;
