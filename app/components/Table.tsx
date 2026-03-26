import { ReactNode } from "react";

interface Props {
  planHolders?: Planholders[];
  paymentdetails?: PaymentDetails[];
}

interface Planholders {
  LPANumber: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  effectivityDate: string;
  planType: string;
}

interface PaymentDetails {
  LPANumber: string;
  ORNumber: number;
  ORDate: string;
  ORAmount: number;
}

const Table = ({ planHolders, paymentdetails }: Props) => {
  const middle = planHolders?.map((p) => p.middleName);
  const first = planHolders?.map((p) => p.firstName);
  const last = planHolders?.map((p) => p.lastName);

  const name = `${last}, ${first} ${middle && middle[0]}`;
  return (
    <table className="table table-zebra">
      <thead>
        {planHolders && (
          <>
            <th>LPA Number</th>
            <th>Name</th>
            <th>Effectivity Date</th>
            <th>Plan Type</th>
          </>
        )}
        {paymentdetails && (
          <>
            <th>LPA Number</th>
            <th>OR Number</th>
            <th>OR Date</th>
            <th>OR Amount</th>
          </>
        )}
      </thead>
      <tbody>
        {planHolders?.map((pH) => (
          <tr>
            <td>{pH.LPANumber}</td>
            <td>{name}</td>
            <td>{pH.effectivityDate}</td>
            <td>{pH.planType}</td>
          </tr>
        ))}
        {paymentdetails?.map((pH) => (
          <tr>
            <td>{pH.LPANumber}</td>
            <td>{pH.ORNumber}</td>
            <td>{pH.ORDate}</td>
            <td>{pH.ORAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
