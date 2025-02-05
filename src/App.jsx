import bgMainDesktop from "./assets/bg-main-desktop.png";
import FormData from "./components/FormData";
import CardsAssets from "./components/CardsAssets";
import Confirm from "./components/confirm";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState(" ");
  const [cardName, setCardName] = useState("Your name");
  const [cardExp, setCardExp] = useState(" ");
  const [cardCvc, setCardCvc] = useState("CVC");
  const [send, setSend] = useState(false);
  console.log(send);

  return (
    <div
      className="bg-slate-100
      flex flex-col items-center
      h-screen w-screen relative
      md:flex-row
      
      
    "
    >
      <img
        className="
      absolute top-0
      h-[25vh] w-screen
      md:relative md:h-full md:w-[280px] md:top-0 md:left-0
      min-lg:w-[50vh] min-lg:h-full
      "
        src={bgMainDesktop}
        alt=""
      />
      <div className="
      relative w-[160px] h-full
      "
      >
        <CardsAssets
          cardNumber={cardNumber}
          cardName={cardName}
          cardExp={cardExp}
          cardCvc={cardCvc}
          send={send}
        />
      </div>
      
      <div className="absolute top-[30vh] flex justify-center pt-10 min-lg:w-[80vh] min-md:static">
        <div className="flex justify-center items-center">
          <Confirm send={send} />
          <FormData
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            setCardName={setCardName}
            setCardExp={setCardExp}
            setCardCvc={setCardCvc}
            setSend={setSend}
            send={send}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
