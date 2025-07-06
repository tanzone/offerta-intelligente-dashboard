
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Client, OfferItem } from '@/types';

const offerSchema = z.object({
  clientId: z.string().min(1, 'Seleziona un cliente'),
  title: z.string().min(1, 'Il titolo è obbligatorio'),
  description: z.string().min(1, 'La descrizione è obbligatoria'),
  expiryDate: z.date({
    required_error: 'La data di scadenza è obbligatoria',
  }),
  notes: z.string().optional(),
});

type OfferFormData = z.infer<typeof offerSchema>;

const CreateOffer = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<OfferItem[]>([
    {
      id: '1',
      name: '',
      description: '',
      type: 'product',
      quantity: 1,
      unitPrice: 0,
      total: 0,
    },
  ]);

  // Mock clients data - in a real app this would come from your data source
  const mockClients: Client[] = [
    { id: '1', name: 'Acme Corp', email: 'contact@acme.com', phone: '+39 123 456 789', company: 'Acme Corp', address: 'Via Roma 1, Milano', createdAt: new Date(), totalOffers: 5, totalValue: 15000 },
    { id: '2', name: 'TechStart SRL', email: 'info@techstart.it', phone: '+39 987 654 321', company: 'TechStart SRL', address: 'Via Napoli 15, Roma', createdAt: new Date(), totalOffers: 3, totalValue: 8500 },
  ];

  const form = useForm<OfferFormData>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      title: '',
      description: '',
      notes: '',
    },
  });

  const addItem = () => {
    const newItem: OfferItem = {
      id: Date.now().toString(),
      name: '',
      description: '',
      type: 'product',
      quantity: 1,
      unitPrice: 0,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof OfferItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const getTotalAmount = () => {
    return items.reduce((sum, item) => sum + item.total, 0);
  };

  const onSubmit = (data: OfferFormData) => {
    console.log('Nuova offerta:', { ...data, items, totalAmount: getTotalAmount() });
    toast({
      title: 'Offerta creata con successo!',
      description: 'La nuova offerta è stata salvata e inviata al cliente.',
    });
    navigate('/offers');
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/offers')}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Nuova Offerta</h1>
          <p className="text-muted-foreground">Crea una nuova offerta commerciale per i tuoi clienti</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Informazioni Generali */}
          <Card>
            <CardHeader>
              <CardTitle>Informazioni Generali</CardTitle>
              <CardDescription>Dati principali dell'offerta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="clientId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cliente</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona un cliente" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {mockClients.map((client) => (
                            <SelectItem key={client.id} value={client.id}>
                              {client.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Data di Scadenza</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy")
                              ) : (
                                <span>Seleziona una data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titolo Offerta</FormLabel>
                    <FormControl>
                      <Input placeholder="Es: Sviluppo Sito Web Aziendale" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrizione</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descrivi i dettagli dell'offerta..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Articoli/Servizi */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Articoli e Servizi</CardTitle>
                  <CardDescription>Aggiungi i prodotti o servizi inclusi nell'offerta</CardDescription>
                </div>
                <Button type="button" onClick={addItem} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Aggiungi Articolo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Articolo {index + 1}</h4>
                      {items.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <Label>Nome</Label>
                        <Input
                          placeholder="Nome prodotto/servizio"
                          value={item.name}
                          onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                        />
                      </div>

                      <div>
                        <Label>Tipo</Label>
                        <Select
                          value={item.type}
                          onValueChange={(value) => updateItem(item.id, 'type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">Prodotto</SelectItem>
                            <SelectItem value="service">Servizio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Quantità</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                        />
                      </div>

                      <div>
                        <Label>Prezzo Unitario (€)</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Descrizione</Label>
                      <Textarea
                        placeholder="Descrizione dettagliata..."
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                      />
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-semibold">
                        Totale: €{item.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />
              
              <div className="text-right">
                <div className="text-2xl font-bold">
                  Totale Offerta: €{getTotalAmount().toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Note Aggiuntive */}
          <Card>
            <CardHeader>
              <CardTitle>Note Aggiuntive</CardTitle>
              <CardDescription>Informazioni supplementari per il cliente</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Note aggiuntive, termini e condizioni..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Azioni */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/offers')}
            >
              Annulla
            </Button>
            <Button type="submit">
              Crea Offerta
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateOffer;
