
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  createdAt: Date;
  totalOffers: number;
  totalValue: number;
  avatar?: string;
}

export interface OfferItem {
  id: string;
  name: string;
  description: string;
  type: 'product' | 'service';
  quantity: number;
  unitPrice: number;
  total: number;
}

export type OfferStatus = 'draft' | 'pending' | 'confirmed' | 'rejected';

export interface Offer {
  id: string;
  clientId: string;
  client: Client;
  title: string;
  description: string;
  items: OfferItem[];
  totalAmount: number;
  status: OfferStatus;
  createdAt: Date;
  updatedAt: Date;
  expiryDate: Date;
  notes?: string;
}

export interface Analytics {
  totalOffers: number;
  pendingOffers: number;
  confirmedOffers: number;
  rejectedOffers: number;
  totalRevenue: number;
  conversionRate: number;
  monthlyGrowth: number;
  averageOfferValue: number;
}
