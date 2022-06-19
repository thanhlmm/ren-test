import { useState } from "react";

import BlackHole from "./BlackHole";
import { Header } from "./Header";
import MyNFT from "./MyNFT";
import RecentBoughtNFT from "./RecentBoughtNFT";

export default function Demo() {
  const [address, setAddress] = useState("");
  return (
    <>
      <Header />

      <div className="flex items-center justify-center my-8">
        <div className="w-1/2 max-w-xs form-control">
          <label className="label">
            <span className="label-text">Your wallet address</span>
            <span
              className="text-blue-700 underline label-text-alt hover:cursor-pointer"
              onClick={() => setAddress("0x31e28829cfb9924aE48bAc476Ea8102985aAAB3e")}
            >
              Try Example
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full max-w-xs input input-bordered"
          />
        </div>
      </div>
      <RecentBoughtNFT address={address} />
      <MyNFT />
      <BlackHole />
    </>
  );
}
