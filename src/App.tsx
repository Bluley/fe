import { GlobalStyles } from './style/GlobalStyles';
import React from 'react';
import { Header} from './components/Header';
import { Orders } from './components/orders';

export default function App(){
  return(
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  );}
