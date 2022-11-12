import { Web3Button } from "@web3modal/react";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-opacity-100 p-4 backdrop-blur backdrop-filter lg:px-12 lg:py-4">
    <div className="navbar-start">
      <div className="btn btn-ghost disabled ml-[-1rem] text-xl normal-case">
        LEGO Car
      </div>
    </div>
    <div className="flex">
      <Web3Button />
    </div>
  </header>
);
