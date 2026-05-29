import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {

    const [searchParams] = useSearchParams();

    const [paymentStatus, setPaymentStatus] =
        useState("CHECKING");

    const [paymentData, setPaymentData] =
        useState(null);

useEffect(() => {

    console.log("Current URL:", window.location.href);

    const merchantOrderId =
        searchParams.get("merchantOrderId");

    console.log("Merchant Order ID:", merchantOrderId);

        if (merchantOrderId) {

            axios.get(
                `https://gramutsav.onrender.com/api/payment/status/${merchantOrderId}`
            )
            .then((response) => {
                console.log("Payment Status Response:", response.data);
                setPaymentStatus(response.data.paymentStatus);

                setPaymentData(response.data);
            })
            .catch((error) => {

                console.log(error);

                setPaymentStatus("FAILED");
            });
        }

    }, []);

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(to right, #ff9933, #ffffff, #138808)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}
        >

            <div
                style={{
                    background: "white",
                    width: "600px",
                    padding: "30px",
                    borderRadius: "20px",
                    boxShadow:
                        "0 8px 20px rgba(0,0,0,0.2)"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        color:
                            paymentStatus === "SUCCESS"
                            ? "green"
                            : "red",
                        marginBottom: "30px"
                    }}
                >

                    {
                        paymentStatus === "SUCCESS"
                        ? "✅ Payment Successful"
                        : paymentStatus === "CHECKING"
                        ? "⏳ Checking Payment"
                        : "❌ Payment Failed"
                    }

                </h1>

                {

                    paymentData && (

                        <div
                            style={{
                                fontSize: "18px",
                                lineHeight: "40px"
                            }}
                        >
                            <div>
                                <b>Mobile No :</b>
                                <br />
                                {paymentData.mobileNo}
                            </div>

                            <div>
                                <b>Order ID :</b>
                                <br />
                                {paymentData.orderId}
                            </div>

<div>
    <b>PhonePe Order ID :</b>
    <br />
    {paymentData.phonePeOrderId}
</div>

<div>
    <b>Payment Date :</b>
    <br />
    {paymentData.paymentDate}
</div>
1
                            <div>
                                <b>Status :</b>
                                <br />
                                {paymentData.paymentStatus}
                            </div>

                            <div>
                                <b>Amount :</b>
                                <br />
                                ₹ {paymentData.amount}
                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default PaymentSuccess;