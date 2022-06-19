import { formatEther } from "ethers/lib/utils";
import { useAccount, useBalance } from "wagmi";

export function Balance() {
  const { data: user } = useAccount();
  const { data } = useBalance({ addressOrName: user?.address });

  return (
    <div className="btn btn-ghost btn-sm rounded-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2 hover:text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <span>{data ? `BNB ${data.formatted}` : ""}</span>
    </div>
  );
}

export default Balance;