import { useState, useEffect } from "react";

function FormData({ setCardNumber, setCardName, setCardExp, setCardCvc }) {
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");

  useEffect(() => {
    setCardExp(`${mm}/${yy}`);
  }, [mm, yy]);

  return (
    <div className="w-full">
      <form
        className="flex flex-col gap-4 [&_input]:rounded-md [&_input]:h-[40px] [&_input]:bg-slate-100 [&_input]:border-1 [&_input]:border-[#8e8593] [&_input]:p-3 [&_input]:text-[15px] [&_input]:w-full [&_input]:outline-none [&_p]:text-[10px] font-semibold"
        action=""
      >
        <div>
          <p>CARDHOLER NAME</p>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className=""
            maxLength="16"
            onChange={(e) => setCardName(e.target.value || "Your name")}
          />
        </div>
        <div>
          <p>CARD NUMBER</p>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className=""
            maxLength="16"
            pattern="([0-9]{16})"
            onChange={(e) =>
              setCardNumber(e.target.value || "Insert your Card number")
            }
          />
        </div>
        <div className="flex space-x-4">
          <div className="">
            <p>EXP. DATE (MM/YY)</p>
            <div className="w-[130px] flex space-x-2">
              <input
                type="text"
                maxLength="2"
                max="31"
                pattern="([0-9]{2})"
                value={mm}
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
              />
              <input
                type="text"
                pattern="^([0-9]{2})$"
                value={yy}
                maxlength="2"
                placeholder="YY"
                className=""
                onChange={(e) => {
                  setYy(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <p>CVC</p>
            <input
              type="text"
              placeholder="e.g. 123"
              maxLength="3"
              pattern="([0-9]{3})"
              className=""
              onChange={(e) => setCardCvc(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-[#21092f] text-white font-semibold h-[45px] rounded-md cursor-pointer hover:bg-[#3a0e5d]">
          Confirm
        </button>
      </form>
    </div>
  );
}
export default FormData;
