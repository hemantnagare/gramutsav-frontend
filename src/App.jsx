import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
    Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Ustav from "./pages/Ustav";
import VarganiDetails from "./pages/VarganiDetails";
import PaymentSuccess from "./pages/PaymentSuccess";
import AllShareholders from "./pages/AllShareHolders";
import PaymentReport from "./pages/PaymentReport";

function Navbar() {

    return (

        <nav
            style={{
                display: "flex",
                gap: "20px",
                padding: "20px",
                backgroundColor: "#ff9933"
            }}
        >

            <Link
                to="/home"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}
            >
                Home
            </Link>

            <Link
                to="/ustav"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}
            >
                Ustav
            </Link>

        </nav>
    );
}

function AppContent() {

    const location = useLocation();

    const token =
        localStorage.getItem("token");

    const hideNavbar =
        location.pathname === "/";

    return (

        <div>

            {
                token &&
                !hideNavbar &&
                <Navbar />
            }

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/home"
                    element={
                        token
                            ? <Home />
                            : <Navigate to="/" />
                    }
                />

                <Route
                    path="/ustav"
                    element={
                        token
                            ? <Ustav />
                            : <Navigate to="/" />
                    }
                />

                <Route
                    path="/vargani-details"
                    element={
                        token
                            ? <VarganiDetails />
                            : <Navigate to="/" />
                    }
                />

               <Route
    path="/payment-success"
    element={<PaymentSuccess />}
/>

                 <Route
                    path="/payment-report"
                    element={<PaymentReport />}
                />
           

            <Route
    path="/all-shareholders"
    element={
        token
            ? <AllShareholders />
            : <Navigate to="/" />
    }
/>
 </Routes>

        </div>
    );
}

function App() {

    return (

        <BrowserRouter>

            <AppContent />

        </BrowserRouter>
    );
}

export default App;