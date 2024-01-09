'use client';

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.text())
      .then(data => setPageData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Page Content</h1>
      <p>{pageData}</p>
    </div>
  );
};

export default Page;
