'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ChildrenProps } from '@/interfaces/ChildrenProps';
import HeaderItem from '@/components/Header/HeaderItem';
import { AuthProvider} from '@/components/AuthContext';

export default function CustomerLayout({ children }: ChildrenProps) { 


  return (
    <>
    <AuthProvider>
      {children}
      </AuthProvider>
    </>
  );
}