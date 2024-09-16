import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/products",
    text: "Products",
  },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();
  const router= useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLoginLogout() {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      // navigate("/login");
      router.push("/login");
    }

    if (!isLoggedIn) {
      // navigate("/login");
      router.push("/login");
    }
  }
  return (
    <nav className="w-full flex flex-row gap-4 border-b border-neutral-500 bg-slate-600/40">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-center w-full p-2 hover:bg-slate-700/40"
          >
            {link.text}
          </Link>
        );
      })}
      <div className="text-center w-full p-2" onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </div>
    </nav>
  );
}
