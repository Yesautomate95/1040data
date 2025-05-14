import ServiceCard from "@/components/services/ServiceCard";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">All forms</h1>
      <h2 className="font-bold text-xl mt-4">Financial Documents</h2>
      <div className="flex mt-4 justify-start items-stretch flex-row flex-wrap gap-4">
        <Link href={"/services/wages-ocr"}>
          <ServiceCard
            title={"Wages (Form W2)"}
            content={
              "The Wages (Form W2) service is a powerful solution designed to extract and validate wage-related financial data from tax and employment documents such as W-2 forms. This intelligent service automates the capture of critical wage and tax information, ensuring high accuracy, streamlined workflows, and compliance with regulatory requirements. By converting unstructured wage data into structured formats, it enables seamless integration with HR, payroll, tax, and accounting systems."
            }
          />
        </Link>
        <Link href={"/services/interest-ocr"}>
          <ServiceCard
            title={"Interest (Form 1099-INT)"}
            content={
              "The Interest (Form 1099-INT) service is a specialized solution designed to extract and verify financial data related to interest income, tax deductions, and investment-related details. This efficient service automates the capture of critical interest-related data from financial documents, ensuring accuracy and compliance with tax regulations. By transforming unstructured financial data into structured formats, it facilitates seamless integration with financial and accounting systems."
            }
          />
        </Link>
        <Link href={"/services/dividend-ocr"}>
          <ServiceCard
            title={"Dividend (Form 1099-DIV)"}
            content={
              "The Dividend (Form 1099-DIV) service is an advanced solution designed to verify and extract data from dividend statements and tax documents. This comprehensive service automates the capture of essential financial details, ensuring accuracy and compliance with tax regulations. By transforming dividend-related data into structured formats, it facilitates seamless integration with financial and accounting systems."
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
