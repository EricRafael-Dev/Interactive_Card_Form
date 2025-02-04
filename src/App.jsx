import bgMainDesktop from "./assets/bg-main-desktop.png";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";
import cardLogo from "./assets/card-logo.svg";
import FormData from "./components/FormData";
import { useState } from "react";

function App() {
const [cardNumber, setCardNumber] = useState(' ');
const [cardName, setCardName] = useState('Your name');
const [cardExp, setCardExp] = useState('Exp. Date');
const [cardCvc, setCardCvc] = useState('CVC');
const [send, setSend] = useState(false);


  return (
    <div className="flex relative">
      <img className="h-screen" src={bgMainDesktop} alt="" />
      <div className="absolute w-[25%] top-20 left-30 rounded-md shadow-xl overflow-hidden">
        <img src={cardFront} alt="" />
        <img className="absolute top-5 left-7" src={cardLogo} alt="" />
        <div className="absolute bottom-0 w-full">
          <p className="text-white text-2xl font-normal absolute left-7 bottom-12">
            {cardNumber!==' '?cardNumber:'Insert your Card number'}
          </p>
          <div className="flex justify-between w-full p-3">
            <p className="text-white text-1xl font-normal pl-4">
              {cardName}
            </p>
            <p className="text-white text-1xl font-normal pr-4">{cardExp}</p>
          </div>
        </div>
      </div>
      <div className="absolute w-[25%] top-70 left-45 rounded-md shadow-xl">
        <img src={cardBack} alt="" />
        <p className="absolute bottom-20 right-10 text-white text-[14px]">
          {cardCvc}
        </p>
      </div>
      <div className="bg-slate-100 h-screen w-screen flex justify-center">
        <div className="flex justify-center items-center">
          <FormData cardNumber={cardNumber} setCardNumber={setCardNumber} setCardName={setCardName} setCardExp={setCardExp} setCardCvc={setCardCvc} setSend={setSend}/>

        </div>
      </div>
    </div>
  );
}
export default App;
