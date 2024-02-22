import { manufactureGetRemoteBooks } from '@/main/services/book/remote-get-books';
import { Home } from '@/presentation/jsx/screens';
import React from 'react';

export const ManufactureHomeScreen: React.FC = () => (
  <Home getAllBooks={manufactureGetRemoteBooks()} />
);
