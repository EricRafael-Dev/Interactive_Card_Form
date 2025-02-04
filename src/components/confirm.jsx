import confirmLogo from "../assets/icon-complete.svg";

function Confirm({ send }) {
  return (
    <div className={`${!send ? "hidden" : ""} [&_h1]:font-bold [&_h1]:text-3xl [&_p]:text-slate-500 w-full flex flex-col items-center justify-center gap-7 `}>
      <img className="w-[30%]" src={confirmLogo} alt="" />
      <h1>THANK YOU!</h1>
      <p>We're added your card details</p>
      <form className="w-[150%] flex mt-3" action="">
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
          }}  
          className="w-full bg-[#21092f] text-white font-semibold h-[45px] rounded-md cursor-pointer hover:bg-[#3a0e5d]"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
export default Confirm;
