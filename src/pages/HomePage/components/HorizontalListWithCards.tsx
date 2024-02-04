import Card from "../components/Card";

interface offer {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

let offerOne: offer = {
  offerId: "1",
  title: `Zatrudnię Budowlańca do Pracy przy Stawianiu Domów Jednorodzinnych`,
  description: "Zatrudnie budowlańca",
  salary: 5500,
};

let offerTwo: offer = {
  offerId: "2",
  title: `Zatrudnimy Wykwalifikowanego Hydraulika z Doświadczeniem!`,
  description: `Nasza firma poszukuje doświadczonego Hydraulika, który będzie odpowiedzialny za instalację i naprawy systemów hydraulicznych. Jeśli masz umiejętności hydrauliczne oraz chcesz pracować w przyjaznym środowisku, zapraszamy do aplikowania!`,
  salary: 6400,
};

let offerThree: offer = {
  offerId: "3",
  title: `Poszukujemy Zdolnego Programisty do Zespołu Rozwoju Oprogramowania!`,
  description: `W naszej firmie otwieramy nowe stanowisko dla doświadczonego Programisty. Jeśli masz umiejętności programistyczne, pasję do tworzenia innowacyjnych rozwiązań i chciałbyś dołączyć do dynamicznego zespołu, to ta oferta jest dla Ciebie!`,
  salary: 9000,
};

let offerFour: offer = {
  offerId: "4",
  title: `Praca Dla Marynarza - Dołącz do Załogi na Morzu Przygód!`,
  description: `Zapraszamy do aplikowania na stanowisko Marynarza w naszej renomowanej firmie morskiej. Jeśli posiadasz odpowiednie kwalifikacje, doświadczenie na morzu i jesteś gotów na fascynujące wyzwania, czekamy na Twoją aplikację!`,
  salary: 12000,
};

let offerList: Array<offer> = [offerOne, offerTwo, offerThree, offerFour];

const HorizontalListWithCards = () => {
  return (
    <div
      className="container"
      style={{ paddingTop: 50 }}
    >
      <strong>Recently added:</strong>
      <div className="navbar">
        {offerList.map((offer, i) => (
          <div className="" key={i}>
            <Card
              title={offer.title}
              salary={offer.salary}
              offerId={offer.offerId}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalListWithCards;
