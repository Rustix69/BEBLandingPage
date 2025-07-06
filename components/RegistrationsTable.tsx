import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Registration = {
  srNo: number;
  department: string;
  classification: string;
  regNo: string;
  tenderingLimit: string;
  validUpto: string;
};

const registrations: Registration[] = [
  {
    srNo: 1,
    department: "The Executive Engineer Presidency Division\nP. W. Department D.D. Building 3rd Floor, Custom House Mumbai 400 023",
    classification: "Class I A",
    regNo: "2782",
    tenderingLimit: "Without Limit",
    validUpto: "30.09.2017\n(Renewal under process)"
  },
  {
    srNo: 2,
    department: "Dy. Chief Engineer (S)\nMaharashtra Housing & Area Development Authority (MHADA), 89-95, Rajani Mahal, Pandit Madan Mohan Malaviya Marg Mumbai 400 034>",
    classification: "Class I",
    regNo: "26",
    tenderingLimit: "Without Limit",
    validUpto: "19.04.2010\n(Renewal under process)"
  },
  {
    srNo: 3,
    department: "Dy. Chief Engineer\nPPC-Cell, MCGB, Colaba Pumping Station, Near Afghan Church, Colaba. Mumbai 400 005.",
    classification: "Class ' AA'",
    regNo: "249",
    tenderingLimit: "Without Limit",
    validUpto: "31.12.2010\n(Renewal under process)"
  },
  {
    srNo: 4,
    department: "Karnataka Public Work Department",
    classification: "Class I A",
    regNo: "CBS 3274-2000",
    tenderingLimit: "Without Limit",
    validUpto: "31.03.2015"
  },
  {
    srNo: 5,
    department: "Raipur (Chhattisgarh) Public Work Department",
    classification: "Class A5",
    regNo: "212",
    tenderingLimit: "Without Limit",
    validUpto: "06.03.2015"
  },
  {
    srNo: 6,
    department: "Raipur (Chhattisgarh) Housing Board",
    classification: "Class A5",
    regNo: "4941",
    tenderingLimit: "Without Limit",
    validUpto: "28.07.2016"
  },
  {
    srNo: 7,
    department: "Gujarat Roads & Buildings Department",
    classification: "Class AA",
    regNo: "4186",
    tenderingLimit: "Without Limit",
    validUpto: "31.12.2013"
  },
  {
    srNo: 8,
    department: "Government of Gujarat",
    classification: "Sp. cat I",
    regNo: "3730",
    tenderingLimit: "Without Limit",
    validUpto: "31.12.2014"
  }
];

export default function RegistrationsTable() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[80px] font-semibold">Sr. No.</TableHead>
              <TableHead className="font-semibold">Department</TableHead>
              <TableHead className="font-semibold">Classification and Registration No.</TableHead>
              <TableHead className="font-semibold">Maximum Tendering Limit</TableHead>
              <TableHead className="font-semibold">Registration valid upto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.map((reg) => (
              <TableRow key={reg.srNo}>
                <TableCell className="font-medium">{reg.srNo}</TableCell>
                <TableCell className="whitespace-pre-line">{reg.department}</TableCell>
                <TableCell>
                  <div className="font-medium">{reg.classification}</div>
                  <div className="text-gray-500">Reg. No. {reg.regNo}</div>
                </TableCell>
                <TableCell>{reg.tenderingLimit}</TableCell>
                <TableCell className="whitespace-pre-line">{reg.validUpto}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 