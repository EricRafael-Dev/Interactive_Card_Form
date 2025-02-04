import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

function CardsAssets({ cardNumber, cardName, cardExp, cardCvc }) {
  return (
    <div>
      <div
        className="
        w-[75%]
        absolute top-[5%] right-[5%]
        md:w-[30%] md:left-[15%] md:top-[55%]
        "
        
      >
        <img className="shadow-xl w-full" src={cardBack} alt="" />
        <p
          className="
        text-white text-[14px] font-light
        absolute right-[13%] top-[41%] 
        "
        >
          {cardCvc}
        </p>
      </div>
      <div
        className="
        w-[75%]
        absolute top-[20%] left-[5%]
        md:w-[30%] md:left-[5%] md:top-[30%]
      "
      >
        <img
          className="
          w-[20%]
          absolute top-[10%] left-[8%]"
          src={cardLogo}
          alt=""
        />
        <img className="shadow-xl w-full" src={cardFront} alt="" />
        <div
          className="
          absolute bottom-[10%] left-[8%] right-[8%]"
        >
          <p
            className="
          text-white text-1xl font-normal"
          >
            {cardNumber.trim() !== "" ? cardNumber : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between pt-2 font-light text-[10px]">
            <p className="text-white text-1xl">{cardName}</p>
            <p className="text-white text-1xl">{cardExp.trim() !== "" ? cardExp : "00/00"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardsAssets;
