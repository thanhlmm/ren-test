import BlackHole from "./BlackHole";
import { Header } from "./Header";
import MyNFT from "./MyNFT";
import RecentBoughtNFT from "./RecentBoughtNFT";

export default function Demo() {
  return (
    <>
      <Header />
      <RecentBoughtNFT />
      <MyNFT />
      <BlackHole />
    </>
  );
}
