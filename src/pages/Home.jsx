import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                margin: "0",
                padding: "0",
                fontFamily: "Arial, sans-serif",
                background:
                    "linear-gradient(to right, #ff9933, #ffffff, #138808)"
            }}
        >

            {/* HEADER */}

            <div
                style={{
                    background: "#8B0000",
                    color: "white",
                    padding: "20px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                }}
            >

                <h1
                    style={{
                        margin: "0",
                        fontSize: "35px"
                    }}
                >
                    🌾 ग्रामउत्सव
                </h1>

                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "white",
                        color: "#8B0000",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    लॉगआउट
                </button>

            </div>

            {/* HERO SECTION */}

            <div
                style={{
                    textAlign: "center",
                    paddingTop: "80px",
                    paddingBottom: "50px"
                }}
            >

                <h1
                    style={{
                        fontSize: "60px",
                        color: "#8B0000",
                        marginBottom: "20px",
                        textShadow: "2px 2px 5px rgba(0,0,0,0.2)"
                    }}
                >
                    ग्रामउत्सव मध्ये आपले स्वागत आहे
                </h1>

                <p
                    style={{
                        fontSize: "24px",
                        color: "#333",
                        maxWidth: "900px",
                        margin: "auto",
                        lineHeight: "40px",
                        fontWeight: "500"
                    }}
                >
                    ग्रामउत्सव व्यवस्थापन प्रणाली
                    <br />
                    सभासद वर्गणी, देणगी, पेमेंट व ग्राम माहिती
                    व्यवस्थापनासाठी आधुनिक डिजिटल प्लॅटफॉर्म
                </p>

            </div>

            {/* CARDS SECTION */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "30px",
                    padding: "40px"
                }}
            >

                {/* CARD 1 */}

                <div
                    style={{
                        background: "white",
                        borderRadius: "20px",
                        padding: "30px",
                        textAlign: "center",
                        boxShadow:
                            "0 8px 20px rgba(0,0,0,0.2)"
                    }}
                >

                    <div
                        style={{
                            fontSize: "70px"
                        }}
                    >
                        👨‍🌾
                    </div>

                    <h2
                        style={{
                            color: "#d35400",
                            marginBottom: "15px"
                        }}
                    >
                        सभासद माहिती
                    </h2>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "28px"
                        }}
                    >
                        गावातील सर्व सभासदांची माहिती
                        सहजपणे पाहा व व्यवस्थापित करा.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/all-shareholders")
                        }
                        style={{
                            marginTop: "20px",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(to right,#ff512f,#dd2476)",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        उघडा
                    </button>

                </div>

                {/* CARD 2 */}

                <div
                    style={{
                        background: "white",
                        borderRadius: "20px",
                        padding: "30px",
                        textAlign: "center",
                        boxShadow:
                            "0 8px 20px rgba(0,0,0,0.2)"
                    }}
                >

                    <div
                        style={{
                            fontSize: "70px"
                        }}
                    >
                        💳
                    </div>

                    <h2
                        style={{
                            color: "#138808",
                            marginBottom: "15px"
                        }}
                    >
                        ऑनलाइन पेमेंट
                    </h2>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "28px"
                        }}
                    >
                        PhonePe द्वारे सुरक्षित ऑनलाइन
                        वर्गणी व देणगी पेमेंट करा.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/ustav")
                        }
                        style={{
                            marginTop: "20px",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(to right,#11998e,#38ef7d)",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        पेमेंट करा
                    </button>

                </div>

                {/* CARD 3 */}

                <div
                    style={{
                        background: "white",
                        borderRadius: "20px",
                        padding: "30px",
                        textAlign: "center",
                        boxShadow:
                            "0 8px 20px rgba(0,0,0,0.2)"
                    }}
                >

                    <div
                        style={{
                            fontSize: "70px"
                        }}
                    >
                        📊
                    </div>

                    <h2
                        style={{
                            color: "#8e44ad",
                            marginBottom: "15px"
                        }}
                    >
                        अहवाल
                    </h2>

                    <p
                        style={{
                            color: "#555",
                            lineHeight: "28px"
                        }}
                    >
                        जमा वर्गणी, पेमेंट इतिहास व
                        आर्थिक अहवाल पाहा.
                    </p>

                    <button
                      onClick={() =>
                            navigate("/payment-report")
                      }

                        style={{
                            marginTop: "20px",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(to right,#8e2de2,#4a00e0)",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        अहवाल पहा
                    </button>

                </div>

            </div>

            {/* EXTRA INFO SECTION */}

            <div
                style={{
                    margin: "40px",
                    background: "rgba(255,255,255,0.8)",
                    padding: "40px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow:
                        "0 8px 20px rgba(0,0,0,0.2)"
                }}
            >

                <h2
                    style={{
                        color: "#8B0000",
                        marginBottom: "20px",
                        fontSize: "35px"
                    }}
                >
                    🌟 ग्रामउत्सव वैशिष्ट्ये
                </h2>

                <p
                    style={{
                        fontSize: "20px",
                        lineHeight: "38px",
                        color: "#444"
                    }}
                >
                    ✔ सभासद व्यवस्थापन
                    <br />
                    ✔ ऑनलाइन वर्गणी संकलन
                    <br />
                    ✔ PhonePe पेमेंट सुविधा
                    <br />
                    ✔ डिजिटल अहवाल
                    <br />
                    ✔ सुरक्षित डेटा व्यवस्थापन
                </p>

            </div>

            {/* FOOTER */}

            <div
                style={{
                    marginTop: "50px",
                    background: "#8B0000",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "18px"
                }}
            >
                © २०२६ ग्रामउत्सव | विकसित करणारे : हेमंत नागरे
            </div>

        </div>
    );
}

export default Home;