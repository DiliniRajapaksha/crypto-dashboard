import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavLink = ({ icon, label, href }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default NavLink;