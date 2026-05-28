import { useEffect, useState } from "react";
import axios from "axios";

function AllShareholders() {

    const [shareholders, setShareholders] =
        useState([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        fetchShareholders();

    }, []);

    // सर्व सभासद माहिती मिळवा

    const fetchShareholders = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/shareholder/all"
            );

            setShareholders(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // SEARCH FILTER

    const filteredData =
        shareholders.filter((s) => {

            const value =
                search.toLowerCase();

            return (

                String(s.khateKramank)
                    .toLowerCase()
                    .includes(value)

                ||

                (s.khatePrakar || "")
                    .toLowerCase()
                    .includes(value)

                ||

                (s.khatedarNavn || "")
                    .toLowerCase()
                    .includes(value)

                ||

                (s.surveyKramank || "")
                    .toLowerCase()
                    .includes(value)

                ||

                String(s.krushikKshetra)
                    .toLowerCase()
                    .includes(value)

                ||

                String(s.potkharabKshetra)
                    .toLowerCase()
                    .includes(value)

                ||

                String(s.ekunKshetra)
                    .toLowerCase()
                    .includes(value)

                ||

                String(s.akarani)
                    .toLowerCase()
                    .includes(value)

                ||

                String(s.mobileNo || "")
                    .toLowerCase()
                    .includes(value)
            );
        });

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
                    marginBottom: "25px",
                    fontSize: "42px",
                    fontWeight: "bold"
                }}
            >
                👨‍🌾 सर्व सभासद माहिती
            </h1>

            {/* SEARCH BOX */}

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "25px"
                }}
            >

                <input
                    type="text"

                    placeholder="खाते क्रमांक, नाव, सर्व्हे नं., मोबाईल शोधा..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    style={{
                        width: "60%",
                        padding: "15px",
                        borderRadius: "12px",
                        border: "2px solid #d35400",
                        fontSize: "18px",
                        outline: "none",
                        boxShadow:
                            "0 4px 10px rgba(0,0,0,0.2)"
                    }}
                />

            </div>

            {/* MAIN CARD */}

            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "20px",
                    boxShadow:
                        "0 8px 20px rgba(0,0,0,0.2)",
                    overflowX: "auto"
                }}
            >

                <table
                    style={{
                        width: "100%",
                        minWidth: "1500px",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                backgroundColor: "#ff9933",
                                color: "white",
                                height: "60px",
                                fontSize: "16px"
                            }}
                        >

                            <th>अ.क्र.</th>

                            <th>खाते क्रमांक</th>

                            <th>खाते प्रकार</th>

                            <th>खातेदार नाव</th>

                            <th>सर्व्हे क्रमांक</th>

                            <th>कृषिक क्षेत्र</th>

                            <th>पोटखराब क्षेत्र</th>

                            <th>एकूण क्षेत्र</th>

                            <th>आकारणी</th>

                            <th>मोबाईल नंबर</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            filteredData.map(
                                (s, index) => (

                                <tr
                                    key={s.id}

                                    style={{
                                        textAlign:
                                            "center",

                                        backgroundColor:
                                            index % 2 === 0
                                                ? "#fff8f0"
                                                : "#f5f5f5",

                                        height: "70px"
                                    }}
                                >

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td
                                        style={{
                                            fontWeight:
                                                "bold",

                                            color:
                                                "#d35400"
                                        }}
                                    >
                                        {
                                            s.khateKramank
                                        }
                                    </td>

                                    <td>
                                        {
                                            s.khatePrakar
                                        }
                                    </td>

                                  <td
    style={{
        fontWeight: "600",
        maxWidth: "350px",
        whiteSpace: "normal",
        wordWrap: "break-word",
        padding: "10px",
        lineHeight: "28px"
    }}
>
    {s.khatedarNavn}
</td>

                                    <td>
                                        {
                                            s.surveyKramank
                                        }
                                    </td>

                                    <td>
                                        {
                                            s.krushikKshetra
                                        }
                                    </td>

                                    <td>
                                        {
                                            s.potkharabKshetra
                                        }
                                    </td>

                                    <td
                                        style={{
                                            fontWeight:
                                                "bold",

                                            color:
                                                "green"
                                        }}
                                    >
                                        {
                                            s.ekunKshetra
                                        }
                                    </td>

                                    <td>
                                        {s.akarani}
                                    </td>

                                    <td>
                                        {
                                            s.mobileNo
                                                ? s.mobileNo
                                                : "उपलब्ध नाही"
                                        }
                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default AllShareholders;