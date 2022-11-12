import React, { FC } from "react";
import Image from "next/image";
import { useContractWrite, useWaitForTransaction } from "@web3modal/react";
import { ABI, CONTRACT_ADDRESS } from "src/constants";
import { utils } from "ethers";
type Props = {
  unitPrice: number;
  latestTokenId: number;
  maxSupply: number;
};

export const MintCar: FC<Props> = ({ unitPrice, latestTokenId, maxSupply }) => {
  const config = {
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "mint",
    overrides: { value: utils.parseEther("0.01") },
    chainId: 5,
  };
  const { data, error, isLoading, write } = useContractWrite(config);
  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });
  return (
    <div className="card bg-base-300 shadow-xl ">
      <figure>
        <Image src="/car.gif" alt="LEGOCar3d" width="400" height="400" />
      </figure>
      <div className="card-body">
        <div className="card-actions items-center justify-between">
          <div className="text-xl font-bold text-accent-focus">
            {unitPrice} ETH
          </div>
          {latestTokenId === maxSupply ? (
            <>
              <button className="btn btn-disabled btn-primary btn-sm ">
                Sold Out{""}
                <a
                  className="link"
                  href=" https://testnets.opensea.io/collection/lego-3d-car-by-0xshin"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  : Check at OpenSea
                </a>
              </button>

              <a
                className="link"
                href=" https://testnets.opensea.io/collection/lego-3d-car-by-0xshin"
                target={"_blank"}
                rel="noreferrer"
              >
                https://testnets.opensea.io/collection/lego-3d-car-by-0xshin
              </a>
            </>
          ) : error ? (
            <div
              tabIndex={0}
              className="collapse-open rounded-box collapse border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Error Message
              </div>
              <div className="collapse-content">
                <p>{JSON.stringify(error)}</p>
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => write()}
              >
                Retry Mint
              </button>
            </div>
          ) : isLoading ? (
            <>
              <button className="btn btn-ghost btn-lg">
                <progress className="progress w-56">Loading...</progress>
              </button>
            </>
          ) : isWaiting ? (
            <button className="btn btn-ghost">
              {" "}
              <progress className="progress w-56">Waiting...</progress>
            </button>
          ) : (
            <button className="btn btn-primary btn-lg" onClick={() => write()}>
              Mint
            </button>
          )}
        </div>
        {receipt && (
          <div className="alert  shadow-lg">
            <a
              className="link text-xs"
              href={"https://goerli.etherscan.io/tx/" + receipt.transactionHash}
            >
              Check tx at Etherscan :{receipt.blockHash}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
