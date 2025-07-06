
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Target, Award, Calendar, Users } from 'lucide-react';
import { mockAnalytics, mockOffers, mockClients } from '@/data/mockData';

const Analytics = () => {
  const analytics = mockAnalytics;
  
  // Dati per i grafici avanzati
  const performanceData = [
    { month: 'Gen', offers: 8, confirmed: 4, rejected: 2, pending: 2, revenue: 45000 },
    { month: 'Feb', offers: 12, confirmed: 7, rejected: 3, pending: 2, revenue: 62000 },
    { month: 'Mar', offers: 15, confirmed: 9, rejected: 4, pending: 2, revenue: 78000 },
    { month: 'Apr', offers: 18, confirmed: 11, rejected: 4, pending: 3, revenue: 95000 },
    { month: 'Mag', offers: 22, confirmed: 13, rejected: 5, pending: 4, revenue: 110000 },
    { month: 'Giu', offers: 25, confirmed: 15, rejected: 6, pending: 4, revenue: 125000 },
  ];

  const clientAnalytics = mockClients.map(client => ({
    name: client.company,
    offers: client.totalOffers,
    value: client.totalValue,
    conversion: Math.round((client.totalOffers * 0.6) / client.totalOffers * 100)
  }));

  const categoryData = [
    { name: 'Servizi IT', value: 45, color: '#3b82f6' },
    { name: 'Consulenza', value: 30, color: '#8b5cf6' },
    { name: 'Prodotti', value: 15, color: '#10b981' },
    { name: 'Supporto', value: 10, color: '#f59e0b' }
  ];

  const conversionFunnel = [
    { stage: 'Lead', value: 100, count: 50 },
    { stage: 'Proposta', value: 60, count: 30 },
    { stage: 'Negoziazione', value: 40, count: 20 },
    { stage: 'Chiusura', value: 25, count: 12.5 }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analytics Avanzate
          </h1>
          <p className="text-muted-foreground mt-1">
            Analisi dettagliate delle performance commerciali
          </p>
        </div>
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200">
          <Calendar className="h-4 w-4 mr-1" />
          Ultimo aggiornamento: Oggi
        </Badge>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasso di Successo</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">{analytics.conversionRate}%</div>
            <Progress value={analytics.conversionRate} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Target: 60%
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valore Medio</CardTitle>
            <Award className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">
              €{analytics.averageOfferValue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% vs mese scorso
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-800/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crescita Mensile</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">+{analytics.monthlyGrowth}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Fatturato vs mese precedente
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-800/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clienti Attivi</CardTitle>
            <Users className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">{mockClients.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Con offerte in corso
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Trend Performance</CardTitle>
            <CardDescription>Andamento offerte e fatturato negli ultimi 6 mesi</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'revenue' ? `€${value.toLocaleString()}` : value,
                    name === 'revenue' ? 'Fatturato' : 
                    name === 'confirmed' ? 'Confermate' :
                    name === 'rejected' ? 'Rifiutate' : 'Totali'
                  ]}
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="revenue" 
                  stackId="1"
                  stroke="#8b5cf6" 
                  fill="url(#revenueGradient)"
                  fillOpacity={0.8}
                />
                <Bar yAxisId="left" dataKey="confirmed" fill="#10b981" />
                <Bar yAxisId="left" dataKey="rejected" fill="#ef4444" />
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Client Performance */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Performance per Cliente</CardTitle>
            <CardDescription>Valore e numero offerte per cliente</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={clientAnalytics} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'value' ? `€${value.toLocaleString()}` : value,
                    name === 'value' ? 'Valore Totale' : 'Numero Offerte'
                  ]}
                />
                <Bar dataKey="value" fill="url(#clientGradient)" />
                <defs>
                  <linearGradient id="clientGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Distribuzione per Categoria</CardTitle>
            <CardDescription>Ripartizione delle offerte per tipologia di servizio</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Funnel di Conversione</CardTitle>
            <CardDescription>Processo di conversione dalle proposte alle vendite</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionFunnel.map((stage, index) => (
                <div key={stage.stage}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{stage.stage}</span>
                    <span className="text-sm text-muted-foreground">{stage.count}%</span>
                  </div>
                  <Progress 
                    value={stage.value} 
                    className="h-3"
                    style={{
                      background: `linear-gradient(to right, hsl(${220 + index * 20}, 70%, ${60 - index * 5}%), hsl(${260 + index * 20}, 70%, ${60 - index * 5}%))`
                    }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
