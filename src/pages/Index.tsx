
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import OffersList from '@/components/OffersList';
import ClientsList from '@/components/ClientsList';
import Analytics from '@/components/Analytics';
import CreateOffer from './CreateOffer';
import Settings from './Settings';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex w-full">
      <Sidebar collapsed={sidebarCollapsed} onCollapse={setSidebarCollapsed} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offers" element={<OffersList />} />
          <Route path="/offers/create" element={<CreateOffer />} />
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Index;
