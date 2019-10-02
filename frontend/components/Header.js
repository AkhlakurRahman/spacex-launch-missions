import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <a>
          <img src='/static/logo.png' alt='SpaceX' style={{ width: '200px' }} />
        </a>
      </Link>
    </div>
  );
};

export default Header;
