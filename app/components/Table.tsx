"use client";

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
  return (
    <table className="table table-pin-cols {sm: table-sm} {lg: table-lg} {xs: table-xs}">
      <thead>
        {planHolders && (
          <tr>
            <th>LPA Number</th>
            <th>Name</th>
            <th>Effectivity Date</th>
            <th>Plan Type</th>
          </tr>
        )}
        {paymentdetails && (
          <tr>
            <th>LPA Number</th>
            <th>OR Number</th>
            <th>OR Date</th>
            <th>OR Amount</th>
          </tr>
        )}
      </thead>
      <tbody>
        {planHolders?.map((pH) => (
          <tr className="hover:bg-base-300" key={pH.LPANumber}>
            <td>{pH.LPANumber}</td>
            <td>
              {`${pH.lastName}, ${pH.firstName} ${pH.middleName ? `${pH.middleName.charAt(0)}.` : ""}`}
            </td>
            <td>{pH.effectivityDate}</td>
            <td>{pH.planType}</td>
          </tr>
        ))}
        {paymentdetails?.map((pH) => (
          <tr className="hover:bg-base-300" key={pH.ORNumber}>
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
