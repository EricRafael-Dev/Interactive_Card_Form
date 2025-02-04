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
      flex flex-col justify-between
      h-screen w-screen relative
      md:flex-row
      min-[425px]:bg-slate-800
    "
    >
      <img className="
      h-[35vh]
      md:h-full
      " src={bgMainDesktop} alt="" />
      <CardsAssets
        cardNumber={cardNumber}
        cardName={cardName}
        cardExp={cardExp}
        cardCvc={cardCvc}
        send={send}
      />
      <div className=" flex justify-center mt-15">
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
