import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-contianer padding-container relative z-30 py-5">
      <Link href="/"></Link>
    </nav>
  );
};

export default Navbar;
