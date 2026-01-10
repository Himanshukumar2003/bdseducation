"use client";

import { useState, useRef, useMemo } from "react";
import { Download } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
});

export default function InvoiceGenerator() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders-invoice", id],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.orders.getAll}/${id}/invoice`
      );
      return data;
    },
    enabled: !!id,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef(null);

  const totals = useMemo(() => {
    if (!data)
      return {
        subtotal: 0,
        cgstTotal: 0,
        sgstTotal: 0,
        igstTotal: 0,
        total: 0,
      };

    const subtotal = data.items.reduce(
      (sum, item) => sum + item.qty * item.rate,
      0
    );

    const cgstTotal = data.items.reduce(
      (sum, item) => sum + ((item.cgst || 0) * item.qty * item.rate) / 100,
      0
    );

    const sgstTotal = data.items.reduce(
      (sum, item) => sum + ((item.sgst || 0) * item.qty * item.rate) / 100,
      0
    );

    const igstTotal = data.items.reduce(
      (sum, item) => sum + ((item.igst || 0) * item.qty * item.rate) / 100,
      0
    );

    const total = subtotal + cgstTotal + sgstTotal + igstTotal;

    return { subtotal, cgstTotal, sgstTotal, igstTotal, total };
  }, [data]);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);

    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const element = invoiceRef.current;

      if (!element) {
        throw new Error("Invoice element not found");
      }

      await pdf.html(element, {
        callback: (doc) => {
          doc.save(`Invoice-${data.invoice.number}.pdf`);
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 800,
        html2canvas: {
          scale: 0.25,
          useCORS: false,
          allowTaint: true,
          ignoreElements: (element) => {
            if (element.tagName === "SCRIPT") return true;
            // Skip style tags with OKLCH/LAB color functions
            if (element.tagName === "STYLE") {
              const content = element.textContent || "";
              if (content.includes("oklch") || content.includes("lab(")) {
                return true;
              }
            }
            return false;
          },
        },
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Loading invoice...
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        Error: {error?.message || "Failed to load invoice"}
      </div>
    );
  }

  if (!data) {
    return <div style={{ padding: "20px" }}>No invoice data available</div>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "16px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Action Buttons */}
        <div style={{ textAlign: "right", marginBottom: "16px" }}>
          <Button onClick={handleDownloadPDF} disabled={isGenerating}>
            <Download size={16} />
            {isGenerating ? "Generating PDF..." : "Download PDF"}
          </Button>
        </div>

        {/* Invoice */}
        <div
          ref={invoiceRef}
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d1d5db",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#000000",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: "1px solid #d1d5db",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "16px",
                padding: "16px",
                borderRight: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src={"/images/logo.png"}
                  width={150}
                  height={150}
                  alt="Company logo"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div style={{ fontSize: "12px", color: "#000000" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "4px",
                    color: "#000000",
                  }}
                >
                  {data.seller.name}
                </div>
                <div style={{ color: "#000000" }}>{data.seller.address}</div>
                <div style={{ color: "#000000" }}>{data.seller.country}</div>
                <div style={{ color: "#000000" }}>{data.seller.phone}</div>
                <div style={{ color: "#000000" }}>{data.seller.email}</div>
                <div style={{ color: "#000000" }}>{data.seller.website}</div>
                <div style={{ color: "#000000" }}>
                  GSTIN: {data.seller.gstin}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                backgroundColor: "#ffffff",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  margin: 0,
                  color: "#000000",
                }}
              >
                TAX INVOICE
              </h1>
            </div>
          </div>

          {/* Invoice Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: "1px solid #d1d5db",
              fontSize: "12px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                borderRight: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Invoice #
                </div>
                <div
                  style={{
                    padding: "8px",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {data.invoice.number}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Invoice Date
                </div>
                <div
                  style={{
                    padding: "8px",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {data.invoice.date}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  padding: "8px",
                  borderRight: "1px solid #d1d5db",
                  fontWeight: "600",
                  color: "#000000",
                  backgroundColor: "#ffffff",
                }}
              >
                Place Of Supply
              </div>
              <div
                style={{
                  padding: "8px",
                  textTransform: "uppercase",
                  color: "#000000",
                  backgroundColor: "#ffffff",
                }}
              >
                {data.invoice.placeOfSupply}
              </div>
            </div>
          </div>

          {/* Parties */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderBottom: "1px solid #d1d5db",
              fontSize: "12px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                padding: "12px",
                borderRight: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: "#000000",
                }}
              >
                Bill To:
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: "#000000",
                }}
              >
                {data.buyer.name}
              </div>
              <div style={{ whiteSpace: "pre-line", color: "#000000" }}>
                {data.buyer.address}
              </div>
              <div style={{ marginTop: "4px", color: "#000000" }}>
                GSTIN: {data.buyer.gstin}
              </div>
            </div>
            <div style={{ padding: "12px", backgroundColor: "#ffffff" }}>
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: "#000000",
                }}
              >
                Ship To:
              </div>
              <div style={{ whiteSpace: "pre-line", color: "#000000" }}>
                {data.buyer.address}
              </div>
              <div style={{ marginTop: "4px", color: "#000000" }}>
                GSTIN: {data.buyer.gstin}
              </div>
            </div>
          </div>

          {/* Items Table */}
          <table
            style={{
              width: "100%",
              fontSize: "12px",
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                }}
              >
                <th
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "left",
                    fontWeight: 600,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  #
                </th>
                <th
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "left",
                    fontWeight: 600,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Description
                </th>
                <th
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "right",
                    fontWeight: 600,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "right",
                    fontWeight: 600,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Rate
                </th>

                {data?.is_inter_state ? (
                  <>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      IGST %
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      IGST Amt
                    </th>
                  </>
                ) : (
                  <>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      CGST %
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      CGST Amt
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      SGST %
                    </th>
                    <th
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        fontWeight: 600,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      SGST Amt
                    </th>
                  </>
                )}

                <th
                  style={{
                    padding: "8px",
                    textAlign: "right",
                    fontWeight: 600,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Total Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {data.items.map((item, idx) => {
                const baseAmount = item.qty * item.rate;
                const cgstAmt = item.cgst ? (baseAmount * item.cgst) / 100 : 0;
                const sgstAmt = item.sgst ? (baseAmount * item.sgst) / 100 : 0;
                const igstAmt = item.igst ? (baseAmount * item.igst) / 100 : 0;
                const total = baseAmount + cgstAmt + sgstAmt + igstAmt;

                return (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid #d1d5db",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <td
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {idx + 1}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        whiteSpace: "pre-line",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item.description}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item.qty} pcs
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {rupee.format(Number.parseFloat(item.rate.toFixed(2)))}
                    </td>

                    {data.is_inter_state ? (
                      <>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "center",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {item.igst}%
                        </td>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "right",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {rupee.format(Number.parseFloat(igstAmt.toFixed(2)))}
                        </td>
                      </>
                    ) : (
                      <>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "center",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {item.cgst}%
                        </td>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "right",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {rupee.format(Number.parseFloat(cgstAmt.toFixed(2)))}
                        </td>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "center",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {item.sgst}%
                        </td>
                        <td
                          style={{
                            padding: "8px",
                            borderRight: "1px solid #d1d5db",
                            textAlign: "right",
                            color: "#000000",
                            backgroundColor: "#ffffff",
                          }}
                        >
                          {rupee.format(Number.parseFloat(sgstAmt.toFixed(2)))}
                        </td>
                      </>
                    )}

                    <td
                      style={{
                        padding: "8px",
                        textAlign: "right",
                        fontWeight: 500,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {rupee.format(Number.parseFloat(total.toFixed(2)))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Footer */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                padding: "12px",
                fontSize: "12px",
                whiteSpace: "pre-line",
                color: "#000000",
                backgroundColor: "#ffffff",
              }}
            >
              {`Total In Words\n${data.total_in_word}\n\nThanks for your business.`}
            </div>
            <div
              style={{
                borderLeft: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid #d1d5db",
                  fontSize: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "right",
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Sub Total
                </div>
                <div
                  style={{
                    padding: "8px",
                    textAlign: "right",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {rupee.format(Number.parseFloat(totals.subtotal.toFixed(2)))}
                </div>
              </div>

              {data.is_inter_state ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    borderBottom: "1px solid #d1d5db",
                    fontSize: "12px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      borderRight: "1px solid #d1d5db",
                      textAlign: "right",
                      color: "#000000",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    IGST
                  </div>
                  <div
                    style={{
                      padding: "8px",
                      textAlign: "right",
                      color: "#000000",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {rupee.format(
                      Number.parseFloat(totals.igstTotal.toFixed(2))
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      borderBottom: "1px solid #d1d5db",
                      fontSize: "12px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      CGST
                    </div>
                    <div
                      style={{
                        padding: "8px",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {rupee.format(
                        Number.parseFloat(totals.cgstTotal.toFixed(2))
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      borderBottom: "1px solid #d1d5db",
                      fontSize: "12px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px",
                        borderRight: "1px solid #d1d5db",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      SGST
                    </div>
                    <div
                      style={{
                        padding: "8px",
                        textAlign: "right",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {rupee.format(
                        Number.parseFloat(totals.sgstTotal.toFixed(2))
                      )}
                    </div>
                  </div>
                </>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid #d1d5db",
                  fontSize: "12px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRight: "1px solid #d1d5db",
                    textAlign: "right",
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Total
                </div>
                <div
                  style={{
                    padding: "8px",
                    textAlign: "right",
                    fontWeight: "600",
                    color: "#000000",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {rupee.format(Number.parseFloat(totals.total.toFixed(2)))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
