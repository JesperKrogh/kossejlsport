import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Users, Phone, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Den hurtigste måde at kontakte os på",
      details: "bestyrelsen@kossejlsport.dk",
      action: "Send Email",
      link: "mailto:bestyrelsen@kossejlsport.dk"
    },
    {
      icon: MessageSquare,
      title: "Spørgsmål om Medlemskab",
      description: "Har du spørgsmål om at blive medlem?",
      details: "Vi svarer typisk inden for 24 timer",
      action: "Spørg om Medlemskab",
      link: "mailto:bestyrelsen@kossejlsport.dk?subject=Spørgsmål om medlemskab"
    },
    {
      icon: Users,
      title: "Tilmelding til Hold",
      description: "Klar til at tilmelde dit barn?",
      details: "Send barnets navn, alder og ønsket aktivitet",
      action: "Send Tilmelding",
      link: "mailto:bestyrelsen@kossejlsport.dk?subject=Tilmelding til KØS Sejlsport"
    }
  ];

  const practicalInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Svaneknoppen 5", "2100 København Ø", "Svanemöllen Havn"]
    },
    {
      icon: Clock,
      title: "Åbningstider",
      details: ["Træning: Se kalender", "Klubhus: Under aktiviteter", "Kontakt: Hverdage 8-17"]
    },
    {
      icon: Users,
      title: "Bestyrelse",
      details: ["Frivillige bestyrelsesmedlemmer", "Valgt på årlig generalforsamling", "Kontakt via email"]
    }
  ];

  const directions = [
    {
      method: "Offentlig Transport",
      description: "Bus og S-tog til Svanemöllen Station, derefter 5 min. gang til havnen"
    },
    {
      method: "Bil",
      description: "Begrænset parkering ved havnen. Alternativ parkering på nærliggende veje"
    },
    {
      method: "Cykel",
      description: "Cykelstativer ved klubhuset. Sikker cykelrute langs kysten"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontakt Os
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Har du spørgsmål til KØS Sejlsport, vores aktiviteter eller medlemskab? 
            Vi er her for at hjælpe og svarer gerne på alle henvendelser.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-wave transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{method.details}</p>
                <Button className="w-full" asChild>
                  <a href={method.link}>
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practical Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {practicalInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <info.icon className="h-5 w-5 text-primary" />
                  <span>{info.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location & Directions */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Find Vej til Svanemöllen Havn</CardTitle>
            <CardDescription>
              Vi er beliggende på den smukke Svanemöllen Havn med fantastisk udsigt over Øresund
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Transport Muligheder</h4>
                <div className="space-y-4">
                  {directions.map((direction, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h5 className="font-medium text-sm">{direction.method}</h5>
                      <p className="text-sm text-muted-foreground">{direction.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Nyttige Oplysninger</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Komplet Adresse</p>
                      <p>Svaneknoppen 5, 2100 København Ø</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Bedste Ankomsttid</p>
                      <p>15 minutter før aktiviteten starter</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Første Gang?</p>
                      <p>Mød op ved klubhuset og spørg efter instruktørerne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="bg-gradient-waves">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Ofte Stillede Spørgsmål</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Hvornår kan vi starte?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Vi har tilmelding til forår, sommer og efterår. Løbende opstart er mulig ved ledige pladser.
                </p>
                
                <h4 className="font-semibold mb-2">Hvad skal vi medbringe?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Skiftetøj, håndklæde og solcreme. Alt sejludstyr og sikkerhedsudstyr udlånes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Er der prøvetime?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Kontakt os for at høre om muligheder for at prøve vores aktiviteter.
                </p>
                
                <h4 className="font-semibold mb-2">Hvad hvis vejret er dårligt?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Vi sejler i det meste vejr, men aflyser ved farlige forhold. Information sendes på mail.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Klar til at komme i gang?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Send os en besked eller tilmeld dig direkt til vores aktiviteter. 
            Vi glæder os til at høre fra jer og byde jer velkommen i KØS Sejlsport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:bestyrelsen@kossejlsport.dk?subject=Tilmelding til KØS Sejlsport">
                <Mail className="mr-2 h-5 w-5" />
                Send Tilmelding
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:bestyrelsen@kossejlsport.dk?subject=Spørgsmål til KØS Sejlsport">
                Stil et Spørgsmål
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;