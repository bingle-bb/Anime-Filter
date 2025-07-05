const Filter = ({ search, setSearch }) => {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
