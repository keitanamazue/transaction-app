/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-cyan-900 px-20 py-4 shadow-xl shadow-gray">
      <h2 className="text-white text-2xl">Transactions</h2>

      <nav>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">Market</Link>
          </li>
          <li>
            <Link href="/">Exchange</Link>
          </li>
          <li>
            <Link href="/">BlockChain</Link>
          </li>
          <li>
            <Link href="/">wallet</Link>
          </li>
        </ul>
      </nav>

      <button>
        <img
          className="w-12 h-12 rounded-full"
          src="https://pbs.twimg.com/profile_images/1435549345378562049/n5TZa_Oy_400x400.jpg"
          alt="account"
        />
      </button>
    </header>
  );
};
