import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {ENVIRONMENT, walletConnectV2ProjectId} from "config";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage.tsx";
import {UnlockPage} from "pages/UnlockPage.tsx";

function App() {

    return (
        <DappProvider
            environment={ENVIRONMENT}
            customNetworkConfig={{
                name: "customConfig",
                walletConnectV2ProjectId
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/unlock" element={<UnlockPage />} />
                </Routes>
            </Router>
        </DappProvider>
    )
}

export default App