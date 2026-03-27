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
  const middle = planHolders?.map((p) => p.middleName);
  const first = planHolders?.map((p) => p.firstName);
  const last = planHolders?.map((p) => p.lastName);

  const name = `${last}, ${first} ${middle && middle.at(0)?.at(0)}.`;
  console.log(planHolders?.map((ph) => ph.effectivityDate));
  return (
    <table className="table table-pin-cols">
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
            <td>{name}</td>
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
