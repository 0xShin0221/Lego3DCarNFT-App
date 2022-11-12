import type { NextPage } from "next";
import { Layout } from "@/components/layout";
// import Moralis from "moralis";
// import { EvmChain } from "@moralisweb3/evm-utils";
import { MintStats } from "@/components/Stats/MintStats";
import { MintCar } from "@/components/Cards/MintCar";
import { ABI, CONTRACT_ADDRESS } from "src/constants";
import { useContractRead } from "@web3modal/react";
import { utils, BigNumber } from "ethers";

const Home: NextPage = () => {
  const maxSupply = 10000;
  const { data, error, isLoading, refetch } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "totalSupply",
  });
  if (error) {
    return <div>error:Contact to @0xShin0221,pls</div>;
  }
  return (
    <Layout
      title="LegoCar3D - Full onchain NFT"
      desc="LegoCar3D - Full onchain NFT by @0xShin0221"
    >
      {isLoading && data ? (
        <progress className="progress w-56">Loading...</progress>
      ) : (
        <>
          <h2 className="mb-6 mt-20 text-xl">3D full onchain NFT</h2>
          <p>
            Full OnChain Generative 3DNFT Car implemented with{" "}
            <a className="link" href="https://threejs.org/">
              Three.js
            </a>{" "}
            based on the deployed smart contract with{" "}
            <a
              className="link"
              href="https://opensea.io/collection/roses-by-dom"
            >
              Roses.{" "}
            </a>
            <p>I made this at #TokyoWeb3hackathon hosted by Akindo.</p>
            Special thanks to dom@dhof
          </p>
          <div className="alert my-8 shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0 stroke-info"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Only available on Test network.</span>
              <div className="text-xs">Goerli ETH is needed to MINT</div>
            </div>
            <div className="flex-none">
              <button className="btn-ghost btn-sm btn">
                Görli Testnet: 0x5
              </button>
            </div>
          </div>
          <MintStats
            maxSupply={maxSupply}
            latestTokenId={(data as BigNumber)?.toNumber()}
          />
          <MintCar
            unitPrice={0.01}
            maxSupply={maxSupply}
            latestTokenId={(data as BigNumber)?.toNumber()}
          />
          <div
            tabIndex={0}
            className=" collapse-open  rounded-box  collapse collapse border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">Author</div>
            <div className="collapse-content">
              <a
                className="link"
                href="https://twitter.com/0xShin0221"
                target={"_blank"}
                rel="noreferrer"
              >
                @0xShin0221
              </a>
              <p>sintaronettt@gmail.com</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className=" collapse-open  rounded-box collapse collapse border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">Open Sea</div>
            <div className="collapse-content">
              <a
                className="link"
                href=" https://testnets.opensea.io/collection/lego-3d-car-by-0xshin"
                target={"_blank"}
                rel="noreferrer"
              >
                https://testnets.opensea.io/collection/lego-3d-car-by-0xshin
              </a>
            </div>
          </div>
          <div
            tabIndex={0}
            className=" collapse-open  rounded-box collapse collapse border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">Etherscan</div>
            <div className="collapse-content">
              <a
                className="link"
                href=" https://goerli.etherscan.io/address/0x5b4c18b5c760781bac268f14b2290ea2783f7ed0"
                target={"_blank"}
                rel="noreferrer"
              >
                https://goerli.etherscan.io/address/0x5b4c18b5c760781bac268f14b2290ea2783f7ed0
              </a>
            </div>
          </div>
          <div
            tabIndex={0}
            className=" collapse-open  rounded-box collapse collapse border border-base-300 bg-base-100"
          >
            <div className="collapse-title text-xl font-medium">Github</div>
            <div className="collapse-content">
              <a
                className="link"
                href="https://github.com/sintaro/Lego3DCar-App"
                target={"_blank"}
                rel="noreferrer"
              >
                https://github.com/sintaro/Lego3DCar-App
              </a>
              <br />
              <a
                className="link"
                href="https://github.com/sintaro/Lego3DCar-Contract"
                target={"_blank"}
                rel="noreferrer"
              >
                https://github.com/sintaro/Lego3DCar-Contract
              </a>
            </div>
          </div>
          <footer className="footer footer-center  p-4 text-base-content">
            <div>
              <p>@LEGO Car 3D full on-chain NFT</p>
            </div>
          </footer>
        </>
      )}
    </Layout>
  );
};

export default Home;
