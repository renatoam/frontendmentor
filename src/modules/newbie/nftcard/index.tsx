import NFT from "./components/nftwrapper";

export default function NFTCard() {
  return (
    <NFT>
      <NFT.Image />
      <NFT.Title />
      <NFT.Text />
      <NFT.Info />
    </NFT>
  );
}
