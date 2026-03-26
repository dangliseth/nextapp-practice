import { GET } from "./api/planholders/route";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import prisma from "./prisma";

export default function Home() {
  const pH = GET();

  return (
    <main>
      <Navbar />
      <Table planHolders={async() => await pH} />
    </main>
  );
}
