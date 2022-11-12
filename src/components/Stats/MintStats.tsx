import React, { FC } from "react";

type Props = {
  maxSupply: number;
  latestTokenId: number;
};
export const MintStats: FC<Props> = ({ maxSupply, latestTokenId }) => {
  const remainingSupply = maxSupply - latestTokenId;
  const remainingPercentage = (remainingSupply / maxSupply) * 100;
  return (
    <div className="stats  my-4 w-full shadow lg:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-primary">
          <div className="stat-value text-primary">{latestTokenId}</div>
        </div>
        <div className="stat-title">LatestTokenId</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="stat-value text-secondary">{maxSupply}</div>
        </div>
        <div className="stat-title">MaxSupply</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <div className="stat-value">{remainingPercentage}</div>
        </div>
        <div className="stat-title">Latest (%)</div>
      </div>
    </div>
  );
};
