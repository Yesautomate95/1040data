import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dividendTranslations = {
  id_type: "Document Type",
  filer_name: "Filer Name",
  filer_tin: "Filer TIN (Taxpayer Identification Number)",
  filer_address: "Filer Address",
  filer_city: "Filer City",
  filer_state: "Filer State",
  filer_country: "Filer Country",
  filer_zip: "Filer ZIP Code",
  filer_telephone_number: "Filer Telephone Number",
  recipient_name: "Recipient Name",
  recipient_tin: "Recipient TIN (Taxpayer Identification Number)",
  recipient_address: "Recipient Address",
  recipient_city: "Recipient City",
  recipient_state: "Recipient State",
  recipient_country: "Recipient Country",
  recipient_zip: "Recipient ZIP Code",
  account_number: "Account Number",
  total_ordinary_dividends: "Total Ordinary Dividends",
  qualified_dividends: "Qualified Dividends",
  total_capital_gain: "Total Capital Gains",
  unrecap_sec_1250_gain: "Unrecaptured Section 1250 Gain",
  section_1202_gain: "Section 1202 Gain",
  collectibles_gain: "Collectibles Gain",
  section_897_dividends: "Section 897 Dividends",
  section_897_capital_gain: "Section 897 Capital Gain",
  non_dividend_distributions: "Non-Dividend Distributions",
  federal_income_tax: "Federal Income Tax Withheld",
  section_199a_dividends: "Section 199A Dividends",
  investment_expenses: "Investment Expenses",
  foreign_tax_paid: "Foreign Tax Paid",
  foreign_country: "Foreign Country",
  cash_liquidation_distributions: "Cash Liquidation Distributions",
  noncash_liquidation_distributions: "Non-Cash Liquidation Distributions",
  exempt_interest_dividends: "Exempt Interest Dividends",
  private_activity_bond_interest: "Private Activity Bond Interest",
  state: "State",
  state_identification_no: "State Identification Number",
  state_tax_withheld: "State Tax Withheld",
  file_name: "File Name",
};

const defaultData = {
  filer_name: "",
  filer_tin: "",
  filer_address: "",
  filer_city: "",
  filer_state: "",
  filer_country: "",
  filer_zip: "",
  filer_telephone_number: "",
  recipient_name: "",
  recipient_tin: "",
  recipient_address: "",
  recipient_city: "",
  recipient_state: "",
  recipient_country: "",
  recipient_zip: "",
  account_number: "",
  total_ordinary_dividends: "",
  qualified_dividends: "",
  total_capital_gain: "",
  unrecap_sec_1250_gain: "",
  section_1202_gain: "",
  collectibles_gain: "",
  section_897_dividends: "",
  section_897_capital_gain: "",
  non_dividend_distributions: "",
  federal_income_tax: "",
  section_199a_dividends: "",
  investment_expenses: "",
  foreign_tax_paid: "",
  foreign_country: "",
  cash_liquidation_distributions: "",
  noncash_liquidation_distributions: "",
  exempt_interest_dividends: "",
  private_activity_bond_interest: "",
  state: "",
  state_identification_no: "",
  state_tax_withheld: "",
  file_name: "",
  id_type: "",
};

export default function DividendTable({ data = defaultData }) {
  return (
    <Card className="w-full shadow-none border-0">
      <CardHeader>
        <CardTitle>Dividend (Form 1099-DIV) Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border border-gray-300 rounded-lg w-full">
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key} className="border-b">
                <TableCell className="font-semibold border-r border-gray-300 w-1/3 whitespace-nowrap">
                  {dividendTranslations[key] || key}
                </TableCell>
                <TableCell className="whitespace-normal break-words">
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
