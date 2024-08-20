import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const WalletConnectionProvider =({children}) => {
     const endpoint  = useMemo(()=>"https://methodical-burned-pond.solana-devnet.quiknode.pro/9d6798bad2c053f17ef440a729f12d901d7b542c",[])
     const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
     return(
        <ConnectionProvider endpoint={endpoint} >

            <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
     )

}
export default WalletConnectionProvider;  // eslint-disable-line