import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

function CardsAssets({ cardNumber, cardName, cardExp, cardCvc }) {
  return (
    <div className=" ">
      <div
        className=" 
        w-[250px]
        absolute top-[5%] right-[-40%]
        md:w-[45vh] md:left-[-25vh] md:top-[55vh]
        min-lg:w-[50vh] min-lg:left-[-30vh]
        "
        
      >
        <img className="shadow-xl w-full" src={cardBack} alt="" />
        <p
          className="
        text-white text-[14px] font-light
        absolute right-[13%] top-[41%] 
        min-lg:text-6xl min-lg:top-[43%] 
        "
        >
          {cardCvc}
        </p>
      </div>
      <div
        className="
        w-[250px]
        absolute top-[50%] left-[-40%]
        md:w-[45vh] md:left-[-35vh] md:top-[28vh]
        min-lg:w-[50vh] min-lg:left-[-40vh] min-lg:top-[25vh]
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
          text-white text-1xl font-normal
          min-lg:text-7xl"
          >
            {cardNumber.trim() !== "" ? cardNumber : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between pt-2 font-light text-[10px] min-lg:pt-[3vh]">
            <p className="text-white text-1xl min-lg:text-6xl">{cardName}</p>
            <p className="text-white text-1xl min-lg:text-6xl">{cardExp.trim() !== "" ? cardExp : "00/00"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardsAssets;
