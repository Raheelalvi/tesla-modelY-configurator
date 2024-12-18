import React from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";

const PaymentBreakdown = () => {
  const { totalPrice } = useCarConfigStore();

  const downPayment = totalPrice * 0.1;
  const loanTermMonths = 60;
  const interestRate = 3 / 100;

  const loanAmount = totalPrice - downPayment;

  const monthlyInterestRate = interestRate / 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
      <h2 className="pb-1 pt-3 font-semibold">Estimated Payment Breakdown</h2>
      <p>
        Down Payment:{" "}
        <span style={{ fontWeight: "bold" }}>
          ${downPayment.toLocaleString()}
        </span>
      </p>
      <p>
        Loan Term:{" "}
        <span style={{ fontWeight: "bold" }}>{loanTermMonths} Months</span>
      </p>
      <p>
        Interest Rate: <span style={{ fontWeight: "bold" }}>3% APR</span>
      </p>
      <p>
        Estimated Monthly Payment:{" "}
        <span style={{ fontWeight: "bold", fontSize: "1.5em", color: "black" }}>
          ${monthlyPayment.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default PaymentBreakdown;
