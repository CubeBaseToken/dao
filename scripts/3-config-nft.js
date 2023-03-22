import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x4D893bfB43181F5A0f5d5544Ad16bD2742a8A7d3", "edition-drop"); //collection smart contract
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