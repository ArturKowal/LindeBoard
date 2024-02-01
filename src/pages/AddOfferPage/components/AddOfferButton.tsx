interface Props {
  onClick: () => void;
}

const AddOfferButton = ({ onClick }: Props) => {
  return (
    <div>
      <div className="">
        <a
          href="/offers"
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
