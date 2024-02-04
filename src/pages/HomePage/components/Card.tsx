interface offer {
  offerId: string;
  title: string;
  salary: number;
}

const Card = ({ title, salary, offerId }: offer) => {
  return (
    <div
      className="card"
      style={{ minWidth: 230, maxWidth: 230, backgroundColor: "#D9EDBF" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{salary} PLN/month</p>
        <a href={"/offerId/" + offerId} className="btn btn-warning">
          Check this out!
        </a>
      </div>
    </div>
  );
};

export default Card;
