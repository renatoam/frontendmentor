import Divider from "../../../common/components/atoms/divider";
import NFT from "./components/nftwrapper";

export default function NFTCard() {
  return (
    <NFT>
      <NFT.Image />
      <NFT.Title />
      <NFT.Text />
      <NFT.Info />
      <Divider />
      <NFT.Author />
    </NFT>
  );
}
