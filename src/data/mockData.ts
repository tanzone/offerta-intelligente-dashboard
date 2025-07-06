
import { Client, Offer, Analytics } from '@/types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Marco Rossi',
    email: 'marco.rossi@techcorp.it',
    phone: '+39 333 123 4567',
    company: 'TechCorp Italia',
    address: 'Via Milano 123, Roma',
    createdAt: new Date('2024-01-15'),
    totalOffers: 5,
    totalValue: 45000,
    avatar: 'MR'
  },
  {
    id: '2',
    name: 'Laura Bianchi',
    email: 'l.bianchi@innovasrl.com',
    phone: '+39 347 987 6543',
    company: 'Innova SRL',
    address: 'Corso Torino 456, Milano',
    createdAt: new Date('2024-02-10'),
    totalOffers: 8,
    totalValue: 72000,
    avatar: 'LB'
  },
  {
    id: '3',
    name: 'Giuseppe Verdi',
    email: 'g.verdi@digitalplus.it',
    phone: '+39 389 456 7890',
    company: 'Digital Plus',
    address: 'Via Napoli 789, Firenze',
    createdAt: new Date('2024-03-05'),
    totalOffers: 3,
    totalValue: 28000,
    avatar: 'GV'
  }
];

export const mockOffers: Offer[] = [
  {
    id: '1',
    clientId: '1',
    client: mockClients[0],
    title: 'Sistema CRM Personalizzato',
    description: 'Sviluppo di un sistema CRM su misura per la gestione clienti',
    items: [
      {
        id: '1',
        name: 'Sviluppo Backend',
        description: 'API REST e database',
        type: 'service',
        quantity: 1,
        unitPrice: 8000,
        total: 8000
      },
      {
        id: '2',
        name: 'Frontend Dashboard',
        description: 'Interfaccia utente responsive',
        type: 'service',
        quantity: 1,
        unitPrice: 6000,
        total: 6000
      },
      {
        id: '3',
        name: 'Hosting Annuale',
        description: 'Server dedicato e manutenzione',
        type: 'service',
        quantity: 1,
        unitPrice: 1200,
        total: 1200
      }
    ],
    totalAmount: 15200,
    status: 'pending',
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15'),
    expiryDate: new Date('2024-07-15'),
    notes: 'Cliente interessato, richiesta presentazione entro fine mese'
  },
  {
    id: '2',
    clientId: '2',
    client: mockClients[1],
    title: 'E-commerce Platform',
    description: 'Piattaforma e-commerce completa con sistema di pagamento',
    items: [
      {
        id: '4',
        name: 'Piattaforma E-commerce',
        description: 'Shop online completo',
        type: 'product',
        quantity: 1,
        unitPrice: 12000,
        total: 12000
      },
      {
        id: '5',
        name: 'Integrazione Pagamenti',
        description: 'PayPal, Stripe, carte di credito',
        type: 'service',
        quantity: 1,
        unitPrice: 3000,
        total: 3000
      }
    ],
    totalAmount: 15000,
    status: 'confirmed',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-06-01'),
    expiryDate: new Date('2024-06-20'),
    notes: 'Confermata! Inizio lavori il 15 giugno'
  },
  {
    id: '3',
    clientId: '3',
    client: mockClients[2],
    title: 'Consulenza Digital Marketing',
    description: 'Strategia di marketing digitale e SEO',
    items: [
      {
        id: '6',
        name: 'Audit SEO',
        description: 'Analisi completa del sito web',
        type: 'service',
        quantity: 1,
        unitPrice: 2500,
        total: 2500
      },
      {
        id: '7',
        name: 'Strategia Marketing',
        description: 'Piano marketing 6 mesi',
        type: 'service',
        quantity: 1,
        unitPrice: 4500,
        total: 4500
      }
    ],
    totalAmount: 7000,
    status: 'draft',
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-06-20'),
    expiryDate: new Date('2024-07-20'),
    notes: 'Bozza in preparazione - da inviare entro settimana'
  }
];

export const mockAnalytics: Analytics = {
  totalOffers: 12,
  pendingOffers: 4,
  confirmedOffers: 6,
  rejectedOffers: 2,
  totalRevenue: 125000,
  conversionRate: 50,
  monthlyGrowth: 15.5,
  averageOfferValue: 10417
};
