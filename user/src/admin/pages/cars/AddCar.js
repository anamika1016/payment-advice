import React, { useState } from "react";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddPayment = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    refNo: "",
    date: "",
    recipientName: "",
    recipientAddress: "",
    accountNumber: "",
    ifscCode: "",
    amount: "",
    utrNo: "",
    transactionDate: "",
    recipientEmail: "",
    invoiceNo: "",
    invoiceDate: "",
    rfdId: "",
    rfdDate: "",
    grossAmount: "",
    tds: "",
    otherDeduction: "",
    netAmount: "",
  });

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Processing payment...");

    try {
      const response = await fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });

      if (!response.ok) throw new Error("Payment failed");

      toast.success("Payment added successfully!");
      navigate(-1);
    } catch (error) {
      toast.error("Error processing payment");
      console.error("Payment error: ", error);
    }
  };
   
  
  return (
    <div className="w-full h-full bg-white rounded-lg p-6">
      <h2 className="mb-4">Add Payment</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <InputField label="Reference No" id="refNo" value={paymentDetails.refNo} onChange={onInputChange} />
        <InputField label="Date" type="date" id="date" value={paymentDetails.date} onChange={onInputChange} />
        <InputField label="Recipient Name" id="recipientName" value={paymentDetails.recipientName} onChange={onInputChange} />
        <InputField label="Recipient Address" id="recipientAddress" value={paymentDetails.recipientAddress} onChange={onInputChange} />
        <InputField label="Account Number" id="accountNumber" value={paymentDetails.accountNumber} onChange={onInputChange} />
        <InputField label="IFSC Code" id="ifscCode" value={paymentDetails.ifscCode} onChange={onInputChange} />
        <InputField label="Amount" type="number" id="amount" value={paymentDetails.amount} onChange={onInputChange} />
        <InputField label="UTR No" id="utrNo" value={paymentDetails.utrNo} onChange={onInputChange} />
        <InputField label="Transaction Date" type="date" id="transactionDate" value={paymentDetails.transactionDate} onChange={onInputChange} />
        <InputField label="Recipient Email" type="email" id="recipientEmail" value={paymentDetails.recipientEmail} onChange={onInputChange} />
        <InputField label="Invoice No" id="invoiceNo" value={paymentDetails.invoiceNo} onChange={onInputChange} />
        <InputField label="Invoice Date" type="date" id="invoiceDate" value={paymentDetails.invoiceDate} onChange={onInputChange} />
        <InputField label="RFD ID" id="rfdId" value={paymentDetails.rfdId} onChange={onInputChange} />
        <InputField label="RFD Date" type="date" id="rfdDate" value={paymentDetails.rfdDate} onChange={onInputChange} />
        <InputField label="Gross Amount" type="number" id="grossAmount" value={paymentDetails.grossAmount} onChange={onInputChange} />
        <InputField label="TDS" type="number" id="tds" value={paymentDetails.tds} onChange={onInputChange} />
        <InputField label="Other Deduction" type="number" id="otherDeduction" value={paymentDetails.otherDeduction} onChange={onInputChange} />
        <InputField label="Net Amount" type="number" id="netAmount" value={paymentDetails.netAmount} onChange={onInputChange} />
        <Button name="Submit" type="submit" />
      </form>
    </div>
  );
};

export default AddPayment;
