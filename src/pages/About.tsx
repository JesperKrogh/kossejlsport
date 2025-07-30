import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Heart, Shield, Target, Waves, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sailing.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Fællesskab",
      description: "Vi skaber et stærkt sejlerfællesskab hvor alle føler sig velkomne og værdsat, uanset baggrund eller færdighedsniveau."
    },
    {
      icon: Shield,
      title: "Tryghed", 
      description: "Sikkerhed er vores højeste prioritet. Vi sikrer tryg sejlads gennem uddannede instruktører og klart sikkerhedsudstyr."
    },
    {
      icon: Waves,
      title: "Sejlerglæde",
      description: "Vi formidler glæden ved sejlads og kærligheden til vandet gennem engagerende og inspirerende oplevelser."
    },
    {
      icon: Target,
      title: "Progression",
      description: "Vi tilbyder struktureret udvikling fra begynder til avanceret niveau, så alle kan udvikle deres potentiale."
    }
  ];

  const certificationFeatures = [
    "Kvalitetssikret undervisning og aktiviteter",
    "Uddannede og certificerede instruktører", 
    "Fokus på børn og unges udvikling",
    "Trygt og inspirerende miljø",
    "Strukturerede læringsprogrammer",
    "Social og personlig udvikling"
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
            Om KØS Sejlsport
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi er ungdomsafdelingen under KØS Sejlklub på Svanemöllen Havn i København Ø, 
            og vi brænder for at give børn og unge fantastiske sejleroplevelser
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <img 
            src={heroImage} 
            alt="KØS Sejlsport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Svanemöllen Havn</h2>
              <p className="text-lg">Hjemsted for KØS Sejlsport siden klubbens start</p>
            </div>
          </div>
        </div>

        {/* About Text */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Vores Mission</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              KØS Sejlsport er en ungdomsafdeling under KØS Sejlklub, beliggende på den smukke Svanemöllen Havn 
              i København Ø. Vi er stolte af at være certificeret som UNG KLUB, hvilket betyder, at vi lever op 
              til de højeste standarder for ungdomsarbejde.
            </p>
            <p className="text-muted-foreground mb-4">
              Vores formål er at tilbyde børn og unge i alderen 6-25 år muligheden for at opleve sejlads i et 
              trygt, professionelt og socialt miljø. Vi tror på, at sejlads ikke kun lærer tekniske færdigheder, 
              men også udvikler selvtillid, ansvarlighed og sociale kompetencer.
            </p>
            <p className="text-muted-foreground">
              Klubben bygger på frivillighed og engagement fra både medlemmer, forældre og instruktører. 
              Dette skaber en unik klubkultur, hvor alle bidrager til fællesskabet og tager ansvar for hinanden.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Vores Værdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-wave transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UNG KLUB Certification */}
        <Card className="mb-12 bg-gradient-waves">
          <CardHeader>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Certificeret UNG KLUB</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Som certificeret UNG KLUB er vi anerkendt for vores høje standarder inden for ungdomsarbejde. 
              Denne certificering sikrer, at vi lever op til de bedste praksisser for sikkerhed, uddannelse og udvikling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <span>Lokation & Faciliteter</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Svanemöllen Havn</h4>
                <p className="text-muted-foreground mb-4">
                  Vores hjemhavn ligger smukt ved Øresund med direkte adgang til Øresund og Københavns havn. 
                  Havnen giver os ideelle forhold for sejlundervisning med beskyttede områder for begyndere 
                  og åbent vand for de mere erfarne.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Adresse:</strong> Svaneknoppen 5, 2100 København Ø</p>
                  <p className="text-sm"><strong>Transport:</strong> Let tilgængelig med offentlig transport</p>
                  <p className="text-sm"><strong>Faciliteter:</strong> Klubhus, bådopbevaring, omklædning</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Vores Flåde</h4>
                <p className="text-muted-foreground mb-4">
                  Vi har en moderne flåde af joller og større både, der dækker alle niveauer fra begynder til konkurrence. 
                  Alle både vedligeholdes professionelt og udskiftes regelmæssigt for at sikre optimal sikkerhed og ydeevne.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/joller">
                    Se Vores Båd-flåde
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Kom og vær en del af fællesskabet</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Er du klar til at give dit barn en fantastisk sejleroplevelse i et trygt og professionelt miljø? 
            Vi glæder os til at byde jer velkommen i KØS Sejlsport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/medlem">
                Bliv Medlem Nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/kontakt">Kontakt Os</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;