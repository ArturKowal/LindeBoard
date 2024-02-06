import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFieldWithButton = () => {

  let [key, setKey] = useState("");

  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKey((event.target as HTMLInputElement).value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!key) {
      key = "default"
    }
    navigate("/offers/results/" + key.split(" "));
  };

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
        onChange={(event) => {
          handleEvent(event);
        }}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFieldWithButton;
