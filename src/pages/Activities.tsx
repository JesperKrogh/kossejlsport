import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Anchor, Users, Trophy, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import familyImage from "@/assets/family-sailing.jpg";
import heroImage from "@/assets/hero-sailing.jpg";
import competitiveImage from "@/assets/competitive-sailing.jpg";
import boatsImage from "@/assets/boats-dock.jpg";

const Activities = () => {
  const activities = [
    {
      id: "born-og-bad",
      title: "Børn og Båd",
      subtitle: "Forælder-barn sejlads",
      age: "6-9 år",
      description: "En tryg introduktion til sejlads hvor forældre og børn lærer sammen. Vi kombinerer SUP, kajak og let sejlads i RS Zest og Optimist med fokus på leg og fælles oplevelser på vandet.",
      image: familyImage,
      icon: Heart,
      details: [
        "Tryg miljø med forældre og børn sammen",
        "SUP og kajak som supplement til sejlads", 
        "Brug af RS Zest og Optimist både",
        "Fokus på leg og vandglæde",
        "Grundlæggende sikkerhed på vandet"
      ],
      schedule: "Lørdage formiddag i sæsonen",
      instructor: "Erfarne familiesejlads-instruktører"
    },
    {
      id: "jollesejlads",
      title: "Jollesejlads",
      subtitle: "Struktureret progression",
      age: "8-16 år",
      description: "Vores hovedaktivitet med tre progressive niveauer. Fra de første vendinger i Optimist til avanceret kapsejlads-teknik. Børnene lærer sejlads i deres eget tempo med fokus på både sikkerhed og sejlerglæde.",
      image: boatsImage,
      icon: Anchor,
      details: [
        "Begynder (8-11 år): Optimist og RS Tera - lærer styring, vendinger og tryghed",
        "Fortsætter: Bane- og startteknik, sejlads i moderat vind", 
        "Øvede: Kapsejlads og taktik, deltagelse i stævner",
        "Progression gennem forskellige jolletyper",
        "Individuel udvikling i eget tempo"
      ],
      schedule: "Tirsdag og torsdag eftermiddag + weekend",
      instructor: "Certificerede sejlads-instruktører"
    },
    {
      id: "adventure",
      title: "Adventure Sejlads",
      subtitle: "Social sejlads i H-båd",
      age: "12-16 år", 
      description: "Social sejlads i større både med fokus på teamwork og samarbejde. Perfekt for unge der vil opleve sejlads som et fællesskab og lære at sejle sammen med andre.",
      image: heroImage,
      icon: Users,
      details: [
        "Sejlads i H-båd med besætning på 3-4 personer",
        "Fokus på teamwork og kommunikation",
        "Social læring i grupper",
        "Udvikling af lederskab og samarbejde",
        "Forberedelse til større bådsejlads"
      ],
      schedule: "Onsdage og weekend-ture",
      instructor: "Instruktører med stor båds-erfaring"
    },
    {
      id: "j70",
      title: "J/70 Sejlads", 
      subtitle: "Moderne kapsejlads",
      age: "16-25 år",
      description: "For unge sejlere der vil prøve moderne kapsejlads. Fra nybegyndere til konkurrencehold der sejler mod andre klubber. J/70 er en hurtig og teknisk båd der kræver teamwork.",
      image: competitiveImage,
      icon: Trophy,
      details: [
        "Moderne kapsejlads-både",
        "Fra nybegynder til konkurrence-niveau",
        "Deltagelse i stævner mod andre klubber",
        "Avanceret sejlteknik og taktik",
        "Mulighed for at blive del af konkurrencehold"
      ],
      schedule: "Mandag og onsdag aften + regattaer",
      instructor: "Konkurrence-erfarne instruktører"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Aktiviteter & Hold
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tilbyder fire forskellige aktivitetsområder, der sikrer progression fra de første skridt på vandet 
            til avanceret kapsejlads. Alle aktiviteter bygger på vores kerneværdier: fællesskab, tryghed og sejlerglæde.
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <div key={activity.id} id={activity.id} className="scroll-mt-20">
              <Card className="overflow-hidden shadow-sail">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-primary-foreground">
                        {activity.age}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <activity.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <activity.icon className="h-6 w-6 text-primary" />
                        <span className="text-sm font-medium text-primary">{activity.subtitle}</span>
                      </div>
                      <CardTitle className="text-3xl">{activity.title}</CardTitle>
                      <CardDescription className="text-lg mt-4">
                        {activity.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-0 space-y-6">
                      {/* Details */}
                      <div>
                        <h4 className="font-semibold mb-3">Hvad lærer I:</h4>
                        <ul className="space-y-2">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule & Instructor */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Træning</p>
                            <p className="text-sm text-muted-foreground">{activity.schedule}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Instruktører</p>
                            <p className="text-sm text-muted-foreground">{activity.instructor}</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full sm:w-auto" asChild>
                        <Link to="/medlem">
                          Tilmeld til {activity.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-ocean rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ikke sikker på hvilket hold der passer?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontakt os, så hjælper vi med at finde det rigtige tilbud til dit barn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wave" size="lg" asChild>
              <Link to="/kontakt">
                Kontakt Os
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/joller">Se Vores Både</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;