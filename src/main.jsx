import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import TradeData from './components/TradeData.jsx'
import Trade from './components/Trade.jsx'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia,
  optimismGoerli,
  arbitrumGoerli,
  polygonMumbai,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
  chains: [sepolia, optimismGoerli, arbitrumGoerli, polygonMumbai],
  ssr: false
});

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/trade-data' element={<TradeData/>}/>
    <Route path='/trade' element={<Trade/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <RainbowKitProvider>
   <Navbar/>
   <RouterProvider router={router}/>
    </RainbowKitProvider>
  </QueryClientProvider>
  </WagmiProvider>
  </React.StrictMode>,
)
