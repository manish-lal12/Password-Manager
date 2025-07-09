import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer class="text-center fixed bottom-0 left-0 z-20 w-full p-5 bg-indigo-50 border-t border-gray-200 shadow items-center dark:bg-gray-800 dark:border-gray-600">
        <span class="text-xl text-gray-500 text-center items-center justify-center dark:text-gray-400">
          Made with ❤️ by
          <Link to="/" className="text-indigo-400">
            <span className="text-indigo-500">&lt;</span>
            Vault
            <span className="text-indigo-500">/&gt;</span>
          </Link>
          <br />© 2024 Vault™. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
