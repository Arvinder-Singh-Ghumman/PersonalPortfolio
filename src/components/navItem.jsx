"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-2 lg:px-4 xl:px-5 py-1 ${pathName === link.url ? "text-[#01aec9] font-bold":"text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavItem;