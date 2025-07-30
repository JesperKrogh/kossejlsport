import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Waves, Trophy, Heart, ArrowRight, Anchor, Wind, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sailing.jpg";
import familyImage from "@/assets/family-sailing.jpg";
import competitiveImage from "@/assets/competitive-sailing.jpg";
import boatsImage from "@/assets/boats-dock.jpg";

const Home = () => {
  const activities = [
    {
      title: "Børn og Båd",
      description: "Forælder-barn sejlads med SUP, kajak og Optimist",
      age: "6-9 år",
      image: familyImage,
      link: "/aktiviteter#born-og-bad",
      icon: Heart,
      color: "bg-accent"
    },
    {
      title: "Jollesejlads",
      description: "Fra begynder til øvet - Optimist, RS Tera og mere",
      age: "8-16 år", 
      image: boatsImage,
      link: "/aktiviteter#jollesejlads",
      icon: Anchor,
      color: "bg-primary"
    },
    {
      title: "Adventure Sejlads",
      description: "Social sejlads i H-båd med fokus på teamwork",
      age: "12-16 år",
      image: heroImage,
      link: "/aktiviteter#adventure",
      icon: Users,
      color: "bg-secondary"
    },
    {
      title: "J/70 Sejlads",
      description: "Moderne kapsejlads for unge sejlere",
      age: "16-25 år",
      image: competitiveImage,
      link: "/aktiviteter#j70",
      icon: Trophy,
      color: "bg-gradient-ocean"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Certificeret UNG KLUB",
      description: "Officielt anerkendt ungdomsklub med fokus på kvalitet og sikkerhed"
    },
    {
      icon: Users,
      title: "Fællesskab",
      description: "Stærkt sejlerfællesskab hvor alle er velkomne"
    },
    {
      icon: Wind,
      title: "Progression",
      description: "Struktureret udvikling fra begynder til konkurrenceniveau"
    },
    {
      icon: Waves,
      title: "Sikkerhed",
      description: "Erfarne instruktører og fokus på tryg sejlads"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/90 text-primary-foreground">
            Certificeret UNG KLUB
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-wave">
            Velkommen til KØS Sejlsport
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Sejlerfællesskab for børn og unge på Svanemöllen Havn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ocean" size="lg" asChild>
              <Link to="/medlem">
                Bliv Medlem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/aktiviteter">Se Aktiviteter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-sunset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hvorfor KØS Sejlsport?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi tilbyder sejleroplevelser til børn og unge i alderen 6-25 år med fokus på fællesskab, tryghed og sejlerglæde
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-sail transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vores Tilbud
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fire forskellige aktivitetsområder, der sikrer progression fra begynder til konkurrenceniveau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-sail transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${activity.color} text-white`}>
                      {activity.age}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <activity.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link to={activity.link}>
                      Læs Mere
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at komme på vandet?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Bliv en del af KØS Sejlsport og oplev sejlerglæden sammen med andre børn og unge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wave" size="lg" asChild>
              <Link to="/medlem">
                Tilmeld Dig Nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/kontakt">Kontakt Os</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;