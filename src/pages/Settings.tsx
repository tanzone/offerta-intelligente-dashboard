
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Building, 
  Bell, 
  Palette, 
  Mail, 
  FileText, 
  Shield,
  Save,
  Upload,
  Eye
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Settings = () => {
  const [formData, setFormData] = useState({
    // Profilo Aziendale
    companyName: 'OfferManager Pro',
    companyEmail: 'info@offermanager.it',
    companyPhone: '+39 02 1234 5678',
    companyAddress: 'Via Milano 123, 20100 Milano (MI)',
    companyVat: 'IT12345678901',
    companyWebsite: 'www.offermanager.it',
    
    // Impostazioni Utente
    userName: 'Mario Rossi',
    userEmail: 'mario.rossi@offermanager.it',
    userRole: 'Amministratore',
    
    // Notifiche
    emailNotifications: true,
    pushNotifications: true,
    offerUpdates: true,
    clientUpdates: false,
    weeklyReports: true,
    
    // Preferenze
    theme: 'system',
    language: 'it',
    currency: 'EUR',
    timezone: 'Europe/Rome',
    
    // Template Email
    emailSignature: 'Cordiali saluti,\nIl Team OfferManager Pro',
    autoResponse: true,
  });

  const handleSave = (section: string) => {
    console.log(`Salvate impostazioni ${section}:`, formData);
    toast({
      title: 'Impostazioni salvate!',
      description: `Le impostazioni di ${section} sono state aggiornate con successo.`,
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Impostazioni</h1>
        <p className="text-muted-foreground">Gestisci le tue preferenze e configurazioni</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Profilo
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifiche
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Preferenze
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Template
          </TabsTrigger>
        </TabsList>

        {/* Profilo Aziendale */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Profilo Aziendale
              </CardTitle>
              <CardDescription>
                Informazioni sulla tua azienda che appariranno nelle offerte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Nome Azienda</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyEmail">Email Aziendale</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={formData.companyEmail}
                    onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyPhone">Telefono</Label>
                  <Input
                    id="companyPhone"
                    value={formData.companyPhone}
                    onChange={(e) => handleInputChange('companyPhone', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyVat">Partita IVA</Label>
                  <Input
                    id="companyVat"
                    value={formData.companyVat}
                    onChange={(e) => handleInputChange('companyVat', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="companyAddress">Indirizzo</Label>
                <Input
                  id="companyAddress"
                  value={formData.companyAddress}
                  onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="companyWebsite">Sito Web</Label>
                <Input
                  id="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('profilo aziendale')}>
                  <Save className="h-4 w-4 mr-2" />
                  Salva Modifiche
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Utente */}
        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informazioni Account
                </CardTitle>
                <CardDescription>
                  Gestisci le tue informazioni personali
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MR
                  </div>
                  <div className="flex-1">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Cambia Avatar
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="userName">Nome Completo</Label>
                    <Input
                      id="userName"
                      value={formData.userName}
                      onChange={(e) => handleInputChange('userName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="userEmail">Email</Label>
                    <Input
                      id="userEmail"
                      type="email"
                      value={formData.userEmail}
                      onChange={(e) => handleInputChange('userEmail', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label>Ruolo</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">
                      <Shield className="h-3 w-3 mr-1" />
                      {formData.userRole}
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => handleSave('account')}>
                    <Save className="h-4 w-4 mr-2" />
                    Salva Modifiche
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sicurezza</CardTitle>
                <CardDescription>
                  Gestisci password e sicurezza del tuo account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline">
                  Cambia Password
                </Button>
                <Button variant="outline">
                  Abilita Autenticazione a Due Fattori
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifiche */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferenze Notifiche
              </CardTitle>
              <CardDescription>
                Scegli come e quando ricevere le notifiche
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifiche Email</Label>
                    <p className="text-sm text-muted-foreground">Ricevi notifiche via email</p>
                  </div>
                  <Switch
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifiche Push</Label>
                    <p className="text-sm text-muted-foreground">Notifiche in tempo reale nell'app</p>
                  </div>
                  <Switch
                    checked={formData.pushNotifications}
                    onCheckedChange={(checked) => handleInputChange('pushNotifications', checked)}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Aggiornamenti Offerte</Label>
                    <p className="text-sm text-muted-foreground">Notifiche per modifiche alle offerte</p>
                  </div>
                  <Switch
                    checked={formData.offerUpdates}
                    onCheckedChange={(checked) => handleInputChange('offerUpdates', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Aggiornamenti Clienti</Label>
                    <p className="text-sm text-muted-foreground">Notifiche per nuovi clienti</p>
                  </div>
                  <Switch
                    checked={formData.clientUpdates}
                    onCheckedChange={(checked) => handleInputChange('clientUpdates', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Report Settimanali</Label>
                    <p className="text-sm text-muted-foreground">Ricevi un riepilogo settimanale</p>
                  </div>
                  <Switch
                    checked={formData.weeklyReports}
                    onCheckedChange={(checked) => handleInputChange('weeklyReports', checked)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('notifiche')}>
                  <Save className="h-4 w-4 mr-2" />
                  Salva Preferenze
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferenze */}
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Preferenze Generali
              </CardTitle>
              <CardDescription>
                Personalizza l'aspetto e il comportamento dell'applicazione
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Tema</Label>
                  <Select
                    value={formData.theme}
                    onValueChange={(value) => handleInputChange('theme', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Chiaro</SelectItem>
                      <SelectItem value="dark">Scuro</SelectItem>
                      <SelectItem value="system">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Lingua</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => handleInputChange('language', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Valuta</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => handleInputChange('currency', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                      <SelectItem value="USD">Dollar ($)</SelectItem>
                      <SelectItem value="GBP">Pound (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Fuso Orario</Label>
                  <Select
                    value={formData.timezone}
                    onValueChange={(value) => handleInputChange('timezone', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Rome">Europa/Roma</SelectItem>
                      <SelectItem value="Europe/London">Europa/Londra</SelectItem>
                      <SelectItem value="America/New_York">America/New York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave('preferenze')}>
                  <Save className="h-4 w-4 mr-2" />
                  Salva Preferenze
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Template Email */}
        <TabsContent value="templates">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Template Email
                </CardTitle>
                <CardDescription>
                  Personalizza i template delle email inviate ai clienti
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Firma Email</Label>
                  <textarea
                    className="w-full mt-1 p-3 border rounded-md min-h-[100px] resize-none"
                    value={formData.emailSignature}
                    onChange={(e) => handleInputChange('emailSignature', e.target.value)}
                    placeholder="Inserisci la tua firma email..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Risposta Automatica</Label>
                    <p className="text-sm text-muted-foreground">Invia conferma automatica alla ricezione offerte</p>
                  </div>
                  <Switch
                    checked={formData.autoResponse}
                    onCheckedChange={(checked) => handleInputChange('autoResponse', checked)}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Anteprima
                  </Button>
                  <Button onClick={() => handleSave('template email')}>
                    <Save className="h-4 w-4 mr-2" />
                    Salva Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
