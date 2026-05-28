import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/login", {
                mobilenumber: mobile,
                password: password
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "mobile",
                mobile
            );

            alert("Login Successful");

            navigate("/home");

        } catch (error) {

            console.log(error);

            alert("Invalid Mobile Number or Password");
        }
    };

    return (

        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(to right, #ff9933, #ffffff, #138808)"
            }}
        >

            <div
                style={{
                    width: "400px",
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "25px",
                    boxShadow:
                        "0 8px 20px rgba(0,0,0,0.3)",
                    textAlign: "center"
                }}
            >

                <h1
                    style={{
                        color: "#d35400",
                        marginBottom: "10px",
                        fontSize: "40px"
                    }}
                >
                    GramUtsav
                </h1>

                <p
                    style={{
                        color: "gray",
                        marginBottom: "30px"
                    }}
                >
                    Village Festival Management System
                </p>

                <form
                    onSubmit={handleLogin}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}
                >

                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) =>
                            setMobile(e.target.value)
                        }
                        required
                        style={{
                            padding: "15px",
                            borderRadius: "12px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            outline: "none"
                        }}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                        style={{
                            padding: "15px",
                            borderRadius: "12px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            outline: "none"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            padding: "15px",
                            borderRadius: "12px",
                            border: "none",
                            background:
                                "linear-gradient(to right, #ff6600, #ff9933)",
                            color: "white",
                            fontSize: "18px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "0.3s"
                        }}
                    >
                        Login
                    </button>

                </form>

                <div
                    style={{
                        marginTop: "25px",
                        color: "#555"
                    }}
                >
                    🙏 Welcome to GramUtsav
                </div>

            </div>

        </div>
    );
}

export default Login;