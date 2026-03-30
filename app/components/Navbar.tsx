import PaymentModal from "./PaymentModal";

const Navbar = () => {
  return (
    <nav className="navbar shadow-lg mb-7 bg-emerald-200">
      <div className="navbar-start">Navbar</div>
      <div className="navbar-end">
        <PaymentModal />
      </div>
    </nav>
  );
};

export default Navbar;
