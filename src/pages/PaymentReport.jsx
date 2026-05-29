import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const PaymentReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await axios.get(
        "https://gramutsav.onrender.com/api/payment/report"
      );

      setReports(response.data);
    } catch (error) {
      console.error("Error fetching report", error);
    } finally {
      setLoading(false);
    }
  };

  // Total Amount
  const totalAmount = useMemo(() => {
    return reports.reduce((sum, item) => sum + item.amount, 0);
  }, [reports]);

  return (
    <div
      style={{
        padding: "25px",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      {/* Blink Animation */}
      <style>
        {`
          @keyframes blink {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.03);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* Header */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#0f172a",
              fontWeight: "700",
            }}
          >
            💰 Payment Report
          </h2>

          <p
            style={{
              marginTop: "10px",
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Total Records : <b>{reports.length}</b>
          </p>
        </div>

        {/* Total Collection Box */}
        <div
          style={{
            background: "#dc2626",
            color: "#ffffff",
            padding: "15px 25px",
            borderRadius: "14px",
            textAlign: "center",
            minWidth: "250px",
            animation: "blink 1s infinite",
            boxShadow: "0 4px 12px rgba(220,38,38,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Total Collection
          </div>

          <div
            style={{
              fontSize: "30px",
              fontWeight: "900",
            }}
          >
            ₹ {totalAmount.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1200px",
            }}
          >
            {/* Table Header */}
            <thead>
              <tr
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                }}
              >
                <th style={thStyle}>Sr No</th>
                <th style={thStyle}>सभासद क्रमांक</th>
                <th style={thStyle}>नाव</th>
                <th style={thStyle}>मोबाईल नंबर</th>
                <th style={thStyle}>पेमेंट तारीख</th>
                <th style={thStyle}>रक्कम</th>
                <th style={thStyle}>पावती क्रमांक</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      fontSize: "18px",
                    }}
                  >
                    Loading...
                  </td>
                </tr>
              ) : reports.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      fontSize: "18px",
                    }}
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                reports.map((report, index) => (
                  <tr
                    key={report.srNo}
                    style={{
                      background:
                        index % 2 === 0 ? "#ffffff" : "#f8fafc",
                    }}
                  >
                    <td style={tdStyle}>{report.srNo}</td>

                    <td style={tdStyle}>
                      {report.sabhasadKramank}
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        minWidth: "350px",
                        lineHeight: "1.6",
                      }}
                    >
                      {report.names}
                    </td>

                    <td style={tdStyle}>
                      {report.mobileNo}
                    </td>

                    <td style={tdStyle}>
                      {new Date(
                        report.paymentDate
                      ).toLocaleString("en-IN")}
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        fontWeight: "700",
                        color: "#059669",
                      }}
                    >
                      ₹ {report.amount.toLocaleString("en-IN")}
                    </td>

                    <td style={tdStyle}>
                      {report.receiptNo || "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

            {/* Footer */}
            <tfoot>
              <tr
                style={{
                  background: "#e2e8f0",
                }}
              >
                <td
                  colSpan="5"
                  style={{
                    padding: "18px",
                    textAlign: "right",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#0f172a",
                  }}
                >
                  Grand Total :
                </td>

                <td
                  style={{
                    padding: "18px",
                    fontSize: "24px",
                    fontWeight: "900",
                    color: "#dc2626",
                    animation: "blink 1s infinite",
                  }}
                >
                  ₹ {totalAmount.toLocaleString("en-IN")}
                </td>

                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

// Header Cell Style
const thStyle = {
  padding: "18px",
  textAlign: "left",
  fontSize: "15px",
  fontWeight: "700",
  borderBottom: "1px solid #334155",
  whiteSpace: "nowrap",
};

// Table Cell Style
const tdStyle = {
  padding: "16px",
  borderBottom: "1px solid #e2e8f0",
  fontSize: "14px",
  color: "#334155",
  verticalAlign: "top",
};

export default PaymentReport;