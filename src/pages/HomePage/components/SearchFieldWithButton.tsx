const SearchFieldWithButton = () => {
  return (
    <div
      className="input-group"
      style={{ minWidth: 300, maxWidth: 600, padding: 20 , margin: "auto"}}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Position"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFieldWithButton;
