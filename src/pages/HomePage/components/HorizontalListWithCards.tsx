import Card from "../components/Card";

interface offer {
  title: string;
  description: string;
}

let offerOne: offer = {
  title: "Budowlaniec",
  description: "Zatrudnie budowlańca",
};

let offerTwo: offer = {
  title: "Hydraulik",
  description: "Wynajmę hydraulika",
};

let offerThree: offer = {
  title: "Programista",
  description: "Zatrudnie programistę C++/C/C#",
};

let offerFour: offer = {
  title: "Naukowiec od zaraz",
  description: "Poszukiwany naukowiec do pracy nad chodowlą tkanek",
};


const HorizontalListWithCards = () => {
  return (
    <div
      className="container HorizontalListWithCards"
      style={{ paddingTop: 50 }}
    >
      <strong>Recently added:</strong>
      <div className="navbar">
        <div className="">
          <Card title={offerOne.title} description={offerOne.description}></Card>
        </div>
        <div className="">
          <Card title={offerTwo.title} description={offerTwo.description}></Card>
        </div>
        <div className="">
          <Card title={offerThree.title} description={offerThree.description}></Card>
        </div>
        <div className="">
          <Card title={offerFour.title} description={offerFour.description}></Card>
        </div>
      </div>
    </div>
  );
};

export default HorizontalListWithCards;
