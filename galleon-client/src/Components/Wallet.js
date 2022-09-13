function Wallet({ amount, max }) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-red", "bg-opacity-10");
  } else {
    classNames.push("bg-white");
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="flex items-center justify-center">
        <div className="py-10 w-96 border-2 flex items-center flex-col">
          <div>
            <div className="pb-2">Your Wallet:</div>
          </div>
          <div className="w-6/12 rounded-full ">
            <div
              className="bg-gray-200 text-xs font-medium text-blue-100 text-center py-2 leading-none rounded-full"
              variant={getProgressBarVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "bg-[#FCAC12]";
  if (ratio < 0.75) return "bg-[#FD3C4A]";
  return "bg-[#00A86B]";
}

export default Wallet;
