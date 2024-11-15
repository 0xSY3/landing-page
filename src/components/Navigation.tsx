import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";

import { NearContext } from "@/wallets/near";
import { Github } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const {
    signedAccountId,
    wallet,
  }: { signedAccountId: string | null; wallet: any } = useContext(NearContext);
  const [action, setAction] = useState<() => void>(() => {});
  const [label, setLabel] = useState("Loading...");
  const pathName = usePathname();

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Disconnect ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel("Connect Wallet");
    }
  }, [signedAccountId, wallet]);

  return (
    <nav className="w-full">
      <div className="fixed w-full flex flex-row gap-20 p-6 items-center">
        <Link href="/" className="inline-flex gap-4 items-center">
          <Image
            priority
            src="/logo_black.png"
            alt="Logo"
            width="30"
            height="24"
            className="object-contain"
          />
          <span className="text-lg font-bold">NexusFi</span>
        </Link>
        <div className="flex flex-row gap-10">
          <Link href="/" className="opacity-50">
            Home
          </Link>
          <Link href="/docs" className="opacity-50">
            Docs
          </Link>
          <Link href="/about" className="opacity-50">
            About
          </Link>
        </div>
        {pathName === "/" ? (
          <Link
            href="/app"
            className="font-semibold px-4 py-2 border-[#151515] border rounded-full ml-auto"
          >
            Launch App
          </Link>
        ) : (
          <div className="ml-auto inline-flex">
            <button
              className="font-bold px-4 py-2 border-[#151515] border rounded-full"
              onClick={action}
            >
              {label}
            </button>
            <Link
              href="https://github.com/thedudeontitan/nexusfi"
              className="flex bg-[#151515] text-[#fbfbe4] rounded-full p-2 items-center"
            >
              <Github />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
