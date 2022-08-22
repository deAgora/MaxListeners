import { ConnectButton } from "@web3uikit/web3";

export default function Header() {
  return (
    <div className="p-5 border-b-2 flex flex-row bg-slate-400">
      <h1 className="py-4 px-4 font-blog text-3xl">Maxlisteners Example</h1>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false}></ConnectButton>
      </div>
    </div>
  );
}
