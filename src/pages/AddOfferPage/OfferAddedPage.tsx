import { useParams } from "react-router-dom";
import Offer from "../SingleOfferPage/components/Offer";
import Alert from "./components/Alert";

interface OfferProps {
  offerId: string;
  title: string;
  description: string;
  salary: number;
}

let offerTest: OfferProps = {
  offerId: "1",
  title: `Zatrudnię Budowlańca do Pracy przy Stawianiu Domów Jednorodzinnych`,
  description: `Firma budowlana poszukuje doświadczonego budowlańca do współpracy przy projektach budowy domów jednorodzinnych. Oferujemy stabilne warunki zatrudnienia oraz atrakcyjne wynagrodzenie.

    Wymagania:
    
    Doświadczenie w pracy na budowie domów jednorodzinnych
    Znajomość technologii i materiałów budowlanych
    Umiejętność pracy z rysunkiem technicznym
    Sumienność i dokładność w wykonywaniu powierzonych zadań
    Gotowość do pracy w zespole
    Oferujemy:
    
    Stabilne zatrudnienie na podstawie umowy o pracę
    Atrakcyjne wynagrodzenie z możliwością premii
    Przyjazną atmosferę pracy
    Możliwość rozwoju zawodowego
    Osoby zainteresowane prosimy o przesyłanie CV wraz z listem motywacyjnym na adres e-mail: [adres e-mail] lub kontakt telefoniczny pod numerem [numer telefonu].
    
    Zapraszamy do współpracy!`,
  salary: 4000,
};

const OfferAddedPage = () => {

  let params = useParams(); // TO GET OFFER ID

  return (
    <div className="container">
      <Offer item={offerTest}></Offer>
      <Alert></Alert>
    </div>
  );
};

export default OfferAddedPage;
