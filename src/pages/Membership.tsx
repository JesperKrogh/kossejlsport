import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Euro, Calendar, Users, Mail, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Membership = () => {
  const benefits = [
    "Adgang til alle aktiviteter i sæsonen",
    "Professionel instruktion fra certificerede lærere", 
    "Brug af klubbens joller og sikkerhedsudstyr",
    "Deltagelse i sociale arrangementer og camps",
    "Mulighed for at låne udstyr hjemme",
    "Medlemskab af certificeret UNG KLUB",
    "Tryg og professionel sejlads-miljø",
    "Progression gennem struktureret læringssystem"
  ];

  const seasons = [
    {
      name: "Forårssæson",
      period: "April - Juni",
      description: "Grundlæggende træning og opstart efter vinteren",
      activities: ["Jollesejlads", "Børn og Båd", "Adventure Sejlads"]
    },
    {
      name: "Sommertilbud", 
      period: "Juli",
      description: "Intensive camps og særlige arrangementer",
      activities: ["Sommer-camps", "Begynder intensiv", "Familie-events"]
    },
    {
      name: "Efterårssæson",
      period: "August - Oktober", 
      description: "Avanceret træning og kapsejlads",
      activities: ["Alle hold", "Kapsejlads", "Stævner"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary">
            <Star className="h-4 w-4 mr-2" />
            Certificeret UNG KLUB
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bliv Medlem
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bliv en del af KØS Sejlsport og oplev sejlerglæden sammen med andre børn og unge på Svanemöllen Havn
          </p>
        </div>

        {/* Membership Card */}
        <Card className="mb-12 shadow-sail">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Årsmedlemskab</CardTitle>
            <CardDescription>
              Fuld adgang til alle aktiviteter og faciliteter
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Price */}
            <div className="text-center border rounded-lg p-6 bg-gradient-waves">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Euro className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">1.600 kr.</span>
                <span className="text-muted-foreground">/år</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Opkrævning i marts og august (2 x 800 kr.)
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Hvad inkluderer medlemskabet:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:bestyrelsen@kossejlsport.dk?subject=Tilmelding til KØS Sejlsport">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Tilmelding
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Send en mail med barnets navn, alder og ønsket aktivitet
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Seasons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Sæsoner & Perioder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasons.map((season, index) => (
              <Card key={index} className="text-center hover:shadow-wave transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{season.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {season.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {season.description}
                  </p>
                  <div className="space-y-1">
                    {season.activities.map((activity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <Card className="bg-gradient-sunset">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Sådan bliver du medlem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Send ansøgning</h4>
                <p className="text-sm text-muted-foreground">
                  Send en mail med barnets informationer og ønsket aktivitet
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Få bekræftelse</h4>
                <p className="text-sm text-muted-foreground">
                  Vi kontakter jer med praktiske informationer og holdplacering
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Start sejlads</h4>
                <p className="text-sm text-muted-foreground">
                  Mød op til første træning og begynde sejleroplevelsen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Har du spørgsmål?</h3>
          <p className="text-muted-foreground mb-6">
            Tøv ikke med at kontakte os hvis du har spørgsmål om medlemskab eller vores aktiviteter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/kontakt">
                Kontakt Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/aktiviteter">
                Se Alle Aktiviteter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;