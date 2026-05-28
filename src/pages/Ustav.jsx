import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ustav() {

    const [ustavList, setUstavList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetchUstav();

    }, []);

    const fetchUstav = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/ustav/allUstav"
            );

            console.log(response.data);

            setUstavList(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const formatDate = (dateString) => {

        const date = new Date(dateString);

        const day = String(date.getDate())
            .padStart(2, "0");

        const month = String(date.getMonth() + 1)
            .padStart(2, "0");

        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(to right, #ff9933, #ffffff, #138808)",
                padding: "30px"
            }}
        >

            {/* TITLE */}

            <h1
                style={{
                    textAlign: "center",
                    color: "#8B0000",
                    marginBottom: "40px",
                    fontSize: "42px",
                    fontWeight: "bold"
                }}
            >
                🪔🌾 ग्रामउत्सव कार्यक्रम
            </h1>

            {/* CENTER CARDS */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "30px"
                }}
            >

                {
                    ustavList.map((ustav) => (

                        <div
                            key={ustav.id}
                            style={{
                                backgroundColor: "white",
                                borderRadius: "20px",
                                padding: "25px",
                                boxShadow:
                                    "0 6px 15px rgba(0,0,0,0.2)",
                                transition: "0.3s",
                                borderTop: "8px solid orange",
                                width: "380px",
                                textAlign: "center"
                            }}
                        >

                            {/* USTAV NAME */}

                            <h2
                                style={{
                                    color: "#d35400",
                                    marginBottom: "20px",
                                    textAlign: "center",
                                    fontSize: "28px"
                                }}
                            >
                                🎉 {ustav.ustavname}
                            </h2>

                            {/* DETAILS */}

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                    alignItems: "center"
                                }}
                            >

                                {/* MEETING DATE */}

                                <div
                                    style={{
                                        backgroundColor: "#fff3cd",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                >
                                    📅 सभा दिनांक:
                                    <br />
                                    <strong>
                                        {
                                            formatDate(
                                                ustav.ustavMeetingDate
                                            )
                                        }
                                    </strong>
                                </div>

                                {/* START DATE */}

                                <div
                                    style={{
                                        backgroundColor: "#d4edda",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                >
                                    🎊 उत्सव प्रारंभ:
                                    <br />
                                    <strong>
                                        {
                                            formatDate(
                                                ustav.ustavStartDate
                                            )
                                        }
                                    </strong>
                                </div>

                                {/* END DATE */}

                                <div
                                    style={{
                                        backgroundColor: "#f8d7da",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                >
                                    🏁 उत्सव समाप्त:
                                    <br />
                                    <strong>
                                        {
                                            formatDate(
                                                ustav.ustavEndDate
                                            )
                                        }
                                    </strong>
                                </div>

                                {/* PAYMENT START */}

                                <div
                                    style={{
                                        backgroundColor: "#d1ecf1",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                >
                                    💳 वर्गणी सुरू:
                                    <br />
                                    <strong>
                                        {
                                            formatDate(
                                                ustav.ustavPaymentStartDate
                                            )
                                        }
                                    </strong>
                                </div>

                                {/* PAYMENT END */}

                                <div
                                    style={{
                                        backgroundColor: "#e2e3e5",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}
                                >
                                    🧾 वर्गणी समाप्त:
                                    <br />
                                    <strong>
                                        {
                                            formatDate(
                                                ustav.ustavPaymentEndDate
                                            )
                                        }
                                    </strong>
                                </div>

                                {/* AMOUNT */}

                                <div
                                    style={{
                                        backgroundColor: "#ffe5b4",
                                        padding: "14px",
                                        borderRadius: "10px",
                                        width: "100%",
                                        textAlign: "center",
                                        fontSize: "18px"
                                    }}
                                >
                                    💵 वर्गणी रक्कम:
                                    <br />
                                    <strong>
                                        ₹ {ustav.amount}
                                    </strong>
                                </div>

                                {/* BUTTON */}

                                <button
                                    style={{
                                        marginTop: "20px",
                                        width: "100%",
                                        padding: "15px",
                                        background:
                                            "linear-gradient(to right, #ff512f, #dd2476)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "12px",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        cursor: "pointer"
                                    }}
                                    onClick={() =>
                                        navigate("/vargani-details", {
                                            state: {
                                                mobile: "9960308061"
                                            }
                                        })
                                    }
                                >
                                    💰 वर्गणी भरा
                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Ustav;