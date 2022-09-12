

export default function Wallet({
    name,
    amount,
    max
}) {
    const classNames = []
    if (amount > max) {
        classNames.push("bg-red", "bg-opacity-10")
    } else {
        classNames.push("bg-white", "border")
    }

    return (
        <div className={classNames.join(" ")}>
            <div className="card-body">
                <div >
                    <div className="card-title">{name}</div>
                    
                </div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" variant={getProgressBarVariant(amount, max)}
                        min={0}
                        max={max}
                        now={amount}></div>
                </div>
            </div>
        </div>

    )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return "bg-[#FCAC12]"
    if (ratio < 0.75) return "bg-[#FD3C4A]"
    return "bg-[#00A86B]"
  }

