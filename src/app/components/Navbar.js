// src/app/components/NavBar.js
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-300 p-4 flex justify-around items-center text-xs text-gray-700">
      <Link href="/program">
        <a className="flex flex-col items-center">
          <div>🏋️‍♂️</div>
          <div>Program</div>
        </a>
      </Link>
      <Link href="/program-builder">
        <a className="flex flex-col items-center">
          <div>🛠️</div>
          <div>Builder</div>
        </a>
      </Link>
      <Link href="/stats">
        <a className="flex flex-col items-center">
          <div>📊</div>
          <div>Stats</div>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
