import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InterestTranslations = {};

const defaultData = {
  account_number: [],
  interest_income: [],
  early_withdrawal_penalty: [],
  interest_on_us_savings_bonds: [],
  federal_income_tax_withheld: [],
  investment_expenses: [],
  foreign_tax_paid: [],
  tax_exempt_interest: [],
  specified_private_activity_bond_interest: [],
  market_discount: [],
  bond_premium: [],
  bond_premium_on_treasury_obligations: [],
  bond_premium_on_tax_exempt_bond: [],
  tax_exempt_and_tax_credit_bond_cusip_no: [],
  state: [],
  state_identification_no: [],
  state_tax_withheld: [],
  filer_name: [],
  filer_street_address: [],
  filer_city: [],
  filer_state: [],
  filer_country: [],
  filer_zip: [],
  filer_telephone_number: [],
  payer_tin: [],
  recipient_tin: [],
  recipient_name: [],
  recipient_street_address: [],
  recipient_city: [],
  recipient_state: [],
  recipient_country: [],
  recipient_zip: [],
  foreign_country_and_us_possession: [],
  id_type: "Interest",
};

export default function InterstTable({ data = defaultData }) {
  return (
    <Card className="w-full shadow-none border-0">
      <CardHeader>
        <CardTitle>Interest OCR Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border border-gray-300 rounded-lg w-full">
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key} className="border-b">
                <TableCell className="font-semibold border-r border-gray-300 w-1/3 whitespace-nowrap">
                  {InterestTranslations[key] || key}
                </TableCell>
                <TableCell className="whitespace-normal break-words">
                  {Array.isArray(value) ? value.join(", ") : value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
