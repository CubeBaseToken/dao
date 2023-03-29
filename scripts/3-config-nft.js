import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xD0066d009ec8BBaA3606C188FF65FD94ec8C297A", "edition-drop"); //collection smart contract
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