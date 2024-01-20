const HomePage = () => {
  return (
    <div className="input-group mb-3 w-50 position-absolute top-50 start-50 translate-middle">
      <input
        type="text"
        className="form-control"
        placeholder="Stanowisko"
        aria-label="Recipient's username123"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Szukaj
      </button>
    </div>
  );
};

export default HomePage;
