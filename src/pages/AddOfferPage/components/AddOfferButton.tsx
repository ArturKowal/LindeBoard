interface Props {
  onClick: () => void;
}

const AddOfferButton = ({ onClick }: Props) => {
  return (
    <div>
      <div className="">
        <a
          // href="/offer/newOfferAdded/:15" // TODO do zmiany przy połączniu z backendem
          className="btn btn-dark addOdderButton"
          role="button"
          aria-pressed="true"
          onClick={() => {
            onClick();
          }}
        >
          Add offer
        </a>
      </div>
    </div>
  );
};

export default AddOfferButton;
