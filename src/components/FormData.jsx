import { useState, useEffect } from "react";

function FormData({
  cardNumber,
  setCardNumber,
  setCardName,
  setCardExp,
  setCardCvc,
  setSend,
  send,
}) {
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");

  useEffect(() => {
    setCardExp(`${mm}/${yy}`);
  }, [mm, yy]);

  return (
    <div className={`w-full p-5 ${!send ? "" : "hidden"}`}>
      <form
        className="flex flex-col space-y-1 gap-4 
        
        [&_input]:rounded-md [&_input]:h-[40px] [&_input]:bg-slate-100 [&_input]:border-1 [&_input]:border-[#8e8593] [&_input]:p-3 [&_input]:text-[15px] [&_input]:w-full [&_input]:outline-none 
        
        [&_p]:text-[10px] 
        font-semibold
        min-lg:w-[50vh] min-lg:justify-center min-lg:h-screen"
        action=""
      >
        <div className="space-y-2">
          <p>CARDHOLER NAME</p>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className=""
            maxLength="16"
            onChange={(e) => setCardName(e.target.value || "Your name")}
            required
          />
        </div>
        <div className="space-y-2">
          <p>CARD NUMBER</p>
          <input
            type="text"
            placeholder={
              cardNumber.trim() === "" ? "e.g. 1234 5678 9123 0000" : ""
            }
            className=""
            maxLength="19"
            pattern="([0-9]{19})"
            value={cardNumber.trim()}
            onChange={(e) => {
              let inputValue = e.target.value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim();

              setCardNumber(inputValue);
            }}
            required
          />
          {(!cardNumber.trim() === "" ||
            /[a-zA-Z]|[^\w\s]|_/.test(cardNumber)) && (
            <p className="text-red-500">Wrong format, numbers only</p>
          )}
        </div>
        <div className="flex space-x-4 ">
          <div className="space-y-2">
            <p>EXP. DATE (MM/YY)</p>
            <div className="w-[130px] flex space-x-2">
              <input
                type="text"
                maxLength="2"
                max="31"
                pattern="([0-9]{2})"
                value={mm==="00"? "":mm}
                placeholder="MM"
                className=""
                onChange={(e) => {
                  let inputValue = e.target.value;
                  if (inputValue) {
                    const numericValue = parseInt(inputValue, 10);
                    if (numericValue > 31) {
                      inputValue = "31";
                    }
                  }
                  setMm(inputValue);
                }}
                required
              />

              <input
                type="text"
                pattern="^([0-9]{2})$"
                value={yy==="00"? "":yy}
                maxlength="2"
                placeholder="YY"
                className=""
                onChange={(e) => {
                  setYy(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <p>CVC</p>
            <input
              type="text"
              placeholder="e.g. 123"
              maxLength="3"
              pattern="([0-9]{3})"
              className=""
              onChange={(e) => setCardCvc(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSend(true);
          }}
          className="bg-[#21092f] text-white font-semibold h-[45px] rounded-md cursor-pointer hover:bg-[#3a0e5d]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
export default FormData;
