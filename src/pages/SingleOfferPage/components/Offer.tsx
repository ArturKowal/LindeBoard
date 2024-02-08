interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

const Offer = ({ item }: { item: OfferProps }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item center fontSizeLarger">
          <header>{item.title}</header>
        </li>
        <li className="list-group-item list-group-item-success center">
          {item.description}
        </li>
        <li className="list-group-item list-group-item-dark alignLeft">
          Pracodawca oferuje: {item.salary} PLN brutto/ miesiąc pracy
        </li>
        <li className="list-group-item alignRight fontSizeSmaller">
          id oferty: {item.offerId}
        </li>
      </ul>
    </div>
  );
};

export default Offer;
