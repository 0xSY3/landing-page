"use client";
import { useState, useEffect, useContext, ChangeEvent } from "react";
import { Cards } from "@/components/cards";
import { NearContext } from "@/wallets/near";
import { HelloNearContract } from "@/config";

const CONTRACT = HelloNearContract;

export default function HelloNear(): JSX.Element {
  const { signedAccountId, wallet } = useContext(NearContext);

  const [greeting, setGreeting] = useState<string>("loading...");
  const [newGreeting, setNewGreeting] = useState<string>("loading...");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useEffect(() => {
    if (!wallet) return;

    wallet
      .viewMethod({ contractId: CONTRACT, method: "get_greeting" })
      .then((greeting: unknown) => setGreeting(greeting as any));
  }, [wallet]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  const handleGreetingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewGreeting(e.target.value);
  };

  const storeGreeting = async (): Promise<void> => {
    if (!wallet) return;

    setShowSpinner(true);
    try {
      await wallet.callMethod({
        contractId: CONTRACT,
        method: "set_greeting",
        args: { greeting: newGreeting },
      });
      const greeting = await wallet.viewMethod({
        contractId: CONTRACT,
        method: "get_greeting",
      });
      setGreeting(greeting as any);
      console.log("hello:", greeting);
    } catch (error) {
      console.error("Failed to store greeting:", error);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <div className="flex justify-between items-center text-sm w-full max-w-[var(--max-width)] z-10 font-mono">
        <p className="relative m-0 p-4 bg-[rgba(var(--callout-rgb),0.5)] border border-[rgba(var(--callout-border-rgb),0.3)] rounded-lg">
          Interacting with the contract: &nbsp;
          <code className="font-bold font-mono">{CONTRACT}</code>
        </p>
      </div>

      <div className="flex justify-center items-center relative py-16 w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
          {/* Glow effects */}
          <div className="absolute w-[480px] h-[360px] -ml-[400px] bg-[var(--secondary-glow)] rounded-full blur-[45px]" />
          <div className="absolute w-[240px] h-[180px] bg-[var(--primary-glow)] blur-[45px] z-[-1]" />
        </div>

        <div className="flex flex-col items-center z-10 w-full">
          <h1 className="w-full text-center">
            The contract says: <code>{greeting}</code>
          </h1>

          {loggedIn ? (
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                className="form-control w-64 px-3 py-2 border rounded"
                placeholder="Store a new greeting"
                onChange={handleGreetingChange}
              />
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                onClick={storeGreeting}
              >
                {showSpinner ? (
                  <i className="inline-block w-4 h-4 border-2 border-t-transparent border-gray-600 rounded-full animate-spin" />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          ) : (
            <p className="mt-4 text-center">
              Please login to change the greeting
            </p>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-6 w-full max-w-[var(--max-width)]
        md:grid-cols-2 sm:grid-cols-1 sm:max-w-[320px] sm:text-center"
      >
        <Cards />
      </div>
    </main>
  );
}
