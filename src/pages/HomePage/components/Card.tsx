
interface offer {
  title: string;
  description: string;
}


const Card = ({ title, description }: offer) => {
  return (
    <div className="card" style={{ minWidth: 230, maxWidth: 230, backgroundColor: "#D9EDBF"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href="#" className="btn btn-primary">
        Check this out!
        </a>
      </div>
    </div>
  );
};

export default Card;
