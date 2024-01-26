import React from 'react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { ChildrenProp } from '@/app/types/ChildrenProp';

export default function CustomerLayout({ children }: ChildrenProp) {
  const sendRequest = async (url: string, token: string) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      // Process the response data here
    } catch (error) {
      // Handle any errors here
    }
  };

  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
