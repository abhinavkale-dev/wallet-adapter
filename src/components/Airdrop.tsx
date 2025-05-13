import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {

    const wallet = useWallet()
    const { connection } = useConnection()

    async function sendAirdropToUser() {
          if (wallet.publicKey) {
              await connection.requestAirdrop(wallet.publicKey, 10)
          } else {
              console.error("Wallet public key is null");
          }
          alert("SOL airdropped")
    }

  return (
    <div>
        Pub Key - {wallet.publicKey?.toString()}
            <input type="text" placeholder="Amount"/>
            <button onClick={sendAirdropToUser}>Airdrop</button>
    </div>
  )
}
