import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xb701440cd6Ce6A98ea5cE8BaCA63e8A9356101b2", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Acces Cube",
        description: "This NFT will give you access to CubeBaseDAO!",
        image: readFileSync("scripts/assets/nft2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();