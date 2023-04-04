import { ThirdwebNftMedia, useContractMetadata, useNFTs, useContract } from '@thirdweb-dev/react';
export const Nfts = () => {
  const { contract } = useContract('0x234A6231fd817b2007253b6c7F672DA141E7ecE8');
  const { data: nfts, isLoading: loadingNfts, error: errorNfts } = useNFTs(contract);

  const { data: metadata, isLoading: loadingMetadata, error: errorMetadata } = useContractMetadata(contract);

  if (errorNfts || errorMetadata) {
    return <p>Error loading data</p>;
  }

  return (
    <main className="container">
      {!loadingMetadata && metadata &&
        <header className="heading">
          <div>
           <h4>{metadata.name}</h4>
          </div>
        </header>
      }

      {!loadingNfts ?
      (<div className="gallery">
        {nfts?.map((e, Nfts) =>
          <div key={Nfts} className="nftcard">
            <ThirdwebNftMedia metadata={e.metadata} width={300} height={300}/>
          </div>
        ) || []}
      </div>)
      : (<p className="loading">Loading...</p>) }
    </main>
  );
};
export default Nfts;