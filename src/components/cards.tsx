import Link from "next/link";

export const Cards = () => {
  return (
    <div className="">
      <Link
        href="https://docs.near.org/build/web3-apps/quickstart"
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Near Docs <span>-&gt;</span>
        </h2>
        <p>Learn how this application works, and what you can build on Near.</p>
      </Link>

      <Link href="/hello-near" className="" rel="noopener noreferrer">
        <h2>
          Near Integration <span>-&gt;</span>
        </h2>
        <p>Discover how simple it is to interact with a Near smart contract.</p>
      </Link>
    </div>
  );
};
