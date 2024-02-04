import { useParams, Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

interface OfferProps {
  offerId: string;
  title: string;
  salary: number;
}

const offerOne: OfferProps = {
  offerId: uuid(),
  title: "Frontend Developer",
  salary: 7000,
};

const offerTwo: OfferProps = {
  offerId: uuid(),
  title: "Backend Developer",
  salary: 6500,
};

const offerThree: OfferProps = {
  offerId: uuid(),
  title: "UX/UI Designer",
  salary: 7500,
};

const offerFour: OfferProps = {
  offerId: uuid(),
  title: "Full Stack Developer",
  salary: 8500,
};

const offerFive: OfferProps = {
  offerId: uuid(),
  title: "Data Scientist",
  salary: 9000,
};

const offerSix: OfferProps = {
  offerId: uuid(),
  title: "Software Engineer",
  salary: 8000,
};

const offerSeven: OfferProps = {
  offerId: uuid(),
  title: "Product Manager",
  salary: 9500,
};

const offerEight: OfferProps = {
  offerId: uuid(),
  title: "DevOps Engineer",
  salary: 8200,
};

const offerNine: OfferProps = {
  offerId: uuid(),
  title: "Network Administrator",
  salary: 6000,
};

const offerTen: OfferProps = {
  offerId: uuid(),
  title: "Mobile App Developer",
  salary: 7200,
};

const offerEl: OfferProps = {
  offerId: uuid(),
  title: "Mobile App Developer",
  salary: 7200,
};

const offerTw: OfferProps = {
  offerId: uuid(),
  title: "Comunication App Developer",
  salary: 9200,
};

const offerTh: OfferProps = {
  offerId: uuid(),
  title: "Mobile Application Developer",
  salary: 7500,
};

const offerEleven: OfferProps = {
  offerId: uuid(),
  title: "UI/UX Developer",
  salary: 7800,
};

const offerTwelve: OfferProps = {
  offerId: uuid(),
  title: "Quality Assurance Engineer",
  salary: 7000,
};

const offerThirteen: OfferProps = {
  offerId: uuid(),
  title: "Systems Analyst",
  salary: 8500,
};

const offerFourteen: OfferProps = {
  offerId: uuid(),
  title: "Cloud Solutions Architect",
  salary: 9500,
};

const offerFifteen: OfferProps = {
  offerId: uuid(),
  title: "Game Developer",
  salary: 8000,
};

const offerSixteen: OfferProps = {
  offerId: uuid(),
  title: "Cybersecurity Specialist",
  salary: 9000,
};

const offerSeventeen: OfferProps = {
  offerId: uuid(),
  title: "Database Administrator",
  salary: 7200,
};

const offerEighteen: OfferProps = {
  offerId: uuid(),
  title: "IT Project Manager",
  salary: 10000,
};

const offerNineteen: OfferProps = {
  offerId: uuid(),
  title: "AI/Machine Learning Engineer",
  salary: 9500,
};

const offerTwenty: OfferProps = {
  offerId: uuid(),
  title: "IT Support Specialist",
  salary: 6000,
};

const offerTwentyOne: OfferProps = {
  offerId: uuid(),
  title: "Technical Writer",
  salary: 6800,
};

const offerTwentyTwo: OfferProps = {
  offerId: uuid(),
  title: "Network Engineer",
  salary: 7800,
};

const offerTwentyThree: OfferProps = {
  offerId: uuid(),
  title: "Web Developer",
  salary: 25200,
};

const offerTwentyFour: OfferProps = {
  offerId: uuid(),
  title: "Business Analyst",
  salary: 8000,
};

const offerTwentyFive: OfferProps = {
  offerId: uuid(),
  title: "Frontend Developer",
  salary: 7500,
};

const offerList: OfferProps[] = [
  offerOne,
  offerTwo,
  offerThree,
  offerFour,
  offerFive,
  offerSix,
  offerSeven,
  offerEight,
  offerNine,
  offerTen,
  offerEl,
  offerTw,
  offerTh,
  offerEleven,
  offerTwelve,
  offerThirteen,
  offerFourteen,
  offerFifteen,
  offerSixteen,
  offerSeventeen,
  offerEighteen,
  offerNineteen,
  offerTwenty,
  offerTwentyOne,
  offerTwentyTwo,
  offerTwentyThree,
  offerTwentyFour,
  offerTwentyFive,
];

const Offers = () => {
  const { keys = "default", page = "1" } = useParams();
  const itemsPerPage = 10;

  const startIndex = (parseInt(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOffers = offerList.slice(startIndex, endIndex);

  const navigate = useNavigate();
  const redirectToOfferDetails = (offerId: string) => {
    navigate(`/offerId/${offerId}`);
  };

  return (
    <div className="container">
      <ul className="list-group center ">
        <li className="list-group-item active" aria-current="true">
        <h2>Offers</h2>
        </li>
      </ul>
      <div>
      <ul>
        {currentOffers.map((offer, index) => (
          <li key={index} onClick={() => redirectToOfferDetails(offer.offerId)}>
            <ul className="list-group list-group-horizontal offerItem">
              <li className="list-group-item list-group-item-info offerTitle">
                Position: <strong>{offer.title}</strong>
              </li>
              <li className="list-group-item list-group-item-success offerSalary">
                Salary: <strong>{offer.salary} PLN/month </strong>
              </li>
            </ul>
            {/* Dodano odstęp pomiędzy ofertami */}
            {index < currentOffers.length - 1 && <hr className="offerSeparator" />}
          </li>
        ))}
      </ul>
      </div>
      <div className="center">
        {offerList.length > itemsPerPage && (
          <div>
            {parseInt(page) > 1 && (
              <Link to={`/offers/results/${keys}/${parseInt(page) - 1}`}>
                {"< Previous Page"}
              </Link>
            )}
            {" | "}
            {endIndex < offerList.length && (
              <Link to={`/offers/results/${keys}/${parseInt(page) + 1}`}>
                {"Next Page >"}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
