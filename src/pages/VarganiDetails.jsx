import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function VarganiDetails() {

    const location = useLocation();

    const mobile = location.state?.mobile;

    const [shareholders, setShareholders] =
        useState([]);

    const [selected, setSelected] =
        useState([]);

    useEffect(() => {

        if (mobile) {

            fetchData();
        }

    }, [mobile]);

    // सभासद माहिती मिळवा

    const fetchData = async () => {

        try {

            const res = await axios.get(
                `https://gramutsav.onrender.com/api/shareholder/mobile/${mobile}`
            );

            console.log(res.data);

            setShareholders(res.data);

        } catch (err) {

            console.log(err);
        }
    };

    // चेकबॉक्स निवड

    const handleSelect = (shareNo) => {

        if (selected.includes(shareNo)) {

            setSelected(
                selected.filter(
                    (i) => i !== shareNo
                )
            );

        } else {

            setSelected([
                ...selected,
                shareNo
            ]);
        }
    };

    // एकूण रक्कम

    const totalAmount =
        selected.length * 1100;

    // पेमेंट API

    const handlePayment = async () => {

        try {

            const selectedShares =
                shareholders
                    .filter((s) =>
                        selected.includes(
                            s.khateKramank
                        )
                    )
                    .map((s) => s.khateKramank);

            const response = await axios.post(
                "http://localhost:8080/api/payment/pay",
                {
                    sharesNo: selectedShares,
                    mobileNo: mobile,
                    amount: totalAmount
                }
            );

            // PhonePe पेमेंट पेजवर Redirect

            window.location.href =
                response.data;

        } catch (error) {

            console.log(error);

            alert("पेमेंट अयशस्वी झाले");
        }
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

            {/* शीर्षक */}

            <h1
                style={{
                    textAlign: "center",
                    color: "#8B0000",
                    marginBottom: "30px",
                    fontSize: "40px",
                    fontWeight: "bold"
                }}
            >
                💰 ग्रामउत्सव वर्गणी संकलन
            </h1>

            {/* मुख्य कार्ड */}

            <div
                style={{
                    maxWidth: "1100px",
                    margin: "auto",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "25px",
                    boxShadow:
                        "0 8px 20px rgba(0,0,0,0.2)"
                }}
            >

                {/* टेबल */}

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                backgroundColor: "#ff9933",
                                color: "white",
                                height: "60px",
                                fontSize: "18px"
                            }}
                        >

                            <th>निवडा</th>

                            <th>सभासद क्रमांक</th>

                            <th>पूर्ण नाव</th>

                            <th>मोबाईल नंबर</th>

                            <th>रक्कम</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            Array.isArray(
                                shareholders
                            ) &&
                            shareholders.map(
                                (s, index) => (

                                <tr
                                    key={s.khateKramank}
                                    style={{
                                        textAlign:
                                            "center",

                                        backgroundColor:
                                            index % 2 === 0
                                                ? "#fff8f0"
                                                : "#f5f5f5",

                                        height: "65px"
                                    }}
                                >

                                    {/* चेकबॉक्स */}

                                    <td>

                                        <input
                                            type="checkbox"

                                            checked={
                                                selected.includes(
                                                    s.khateKramank
                                                )
                                            }

                                            onChange={() =>
                                                handleSelect(
                                                    s.khateKramank
                                                )
                                            }

                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                cursor: "pointer"
                                            }}
                                        />

                                    </td>

                                    {/* सभासद क्रमांक */}

                                    <td
                                        style={{
                                            fontWeight:
                                                "bold",

                                            color:
                                                "#d35400"
                                        }}
                                    >
                                        {s.khateKramank}
                                    </td>

                                    {/* पूर्ण नाव */}

                                    <td
                                        style={{
                                            fontWeight:
                                                "600"
                                        }}
                                    >
                                        {s.khatedarNavn}

                                    </td>

                                    {/* मोबाईल नंबर */}

                                    <td>
                                        {
                                            s.mobileNo
                                        }
                                    </td>

                                    {/* रक्कम */}

                                    <td
                                        style={{
                                            color:
                                                "green",

                                            fontWeight:
                                                "bold",

                                            fontSize:
                                                "18px"
                                        }}
                                    >
                                        ₹ 1100
                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

                {/* एकूण रक्कम */}

                <div
                    style={{
                        marginTop: "30px",
                        padding: "20px",
                        backgroundColor:
                            "#f1f1f1",

                        borderRadius: "12px",

                        textAlign: "right",

                        fontSize: "28px",

                        fontWeight: "bold",

                        color: "#d35400"
                    }}
                >
                    एकूण रक्कम :
                    ₹ {totalAmount}
                </div>

                {/* पेमेंट बटन */}

                <button
                    style={{
                        width: "100%",
                        marginTop: "25px",
                        padding: "18px",

                        background:
                            "linear-gradient(to right, #ff512f, #dd2476)",

                        color: "white",

                        border: "none",

                        borderRadius: "12px",

                        fontSize: "22px",

                        fontWeight: "bold",

                        cursor: "pointer"
                    }}

                    onClick={handlePayment}
                >
                    💳 आता पेमेंट करा
                </button>

            </div>

        </div>
    );
}

export default VarganiDetails;