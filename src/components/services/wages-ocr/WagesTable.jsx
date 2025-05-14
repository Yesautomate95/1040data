import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const wagesTranslations = {};

const defaultData = {
  employee_social_security_number: "",
  employee_name: "",
  employee_address: "",
  employee_zip_code: "",
  employer_EIN: "",
  employer_name: "",
  employer_address: "",
  employer_zip_code: "",
  wages_tips_other_compensation: "",
  federal_income_tax_withheld: "",
  social_security_wages: "",
  social_security_tax_withheld: "",
  medicare_wages_and_tips: "",
  medicare_tax_withheld: "",
  social_security_tips: "",
  allocated_tips: "",
  dependent_care_benefits: "",
  nonqualified_plans: "",
  code_12_1: "",
  amount_12_1: "",
  code_12_2: "D",
  amount_12_2: "",
  code_12_3: "W",
  amount_12_3: "",
  code_12_4: "",
  amount_12_4: "",
  statutory_employee: "",
  retirement_plan: "",
  third_party_sick_pay: "",
  code_14_1: "",
  amount_14_1: "",
  code_14_2: "",
  amount_14_2: "",
  code_14_3: "",
  amount_14_3: "",
  state: "",
  employer_state_id: "",
  state_wages_tips: "",
  state_income_tax: "",
  local_wages_tips: "",
  local_income_tax: "",
  locality_name: "",
  file_name: "",
};

export default function WagesTable({ data = defaultData }) {
  return (
    <Card className="w-full shadow-none border-0">
      <CardHeader>
        <CardTitle>Wages (Form W2) Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border border-gray-300 rounded-lg w-full">
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key} className="border-b">
                <TableCell className="font-semibold border-r border-gray-300 w-1/3 whitespace-nowrap">
                  {wagesTranslations[key] || key}
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
