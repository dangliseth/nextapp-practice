import AddModal from "./components/AddModal";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

export default async function Home() {
  const response = await fetch(process.env.NEXT_URL + "/api/planholders"
  , { method: "GET" });

  const users = await response.json();

  return (
    <main className="p-2">
      <AddModal />
      <Table planHolders={users} />
    </main>
  );
}
