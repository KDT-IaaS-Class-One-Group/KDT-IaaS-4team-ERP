import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ChildrenProps from '@/interfaces/ChildrenProps';
import HeaderItem from '@/components/Header/HeaderItem';

export default function CustomerLayout({ children }: ChildrenProps) {
  
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
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
}
