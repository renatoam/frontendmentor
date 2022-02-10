import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from "./styles.module.css";
import NFTImage from "../nftimage";
import NFTTitle from "../nfttitle";
import NFTText from "../nfttext";
import NFTInfo from "../nftinfo";
import NFTAuthor from "../nftauthor";

export default function NFT({ children }: ChildrenType) {
  return <section className={styles.wrapper}>{children}</section>;
}

NFT.Image = NFTImage;
NFT.Title = NFTTitle;
NFT.Text = NFTText;
NFT.Info = NFTInfo;
NFT.Author = NFTAuthor;
