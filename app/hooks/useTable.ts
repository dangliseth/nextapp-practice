// import { useEffect, useState } from "react";

// interface Planholders {
//   LPANumber: string;
//   firstName: string;
//   middleName?: string;
//   lastName: string;
//   effectivityDate: string;
//   planType: string;
// }

// interface PaymentDetails {
//   LPANumber: string;
//   ORNumber: number;
//   ORDate: string;
//   ORAmount: number;
// }

// const useTable = () => {
//   const [planholders, setPlanholders] = useState<Planholders[]>([]);
//   const [paymentDetails, setPaymentDetails] = useState<PaymentDetails[]>([]);

//   const requestPlanholders = fetch(process.env.NEXT_URL + "/api/planholders"
//   , { method: "GET" });
//   const requestPaymentDetails = fetch(process.env.NEXT_URL + "/api/paymentdetails"
//   , { method: "GET" });
//   const controller = new AbortController();

//   useEffect(() => {
//     request.then((res) => {setPlanholders(res.data.results)})
//   })
// };
