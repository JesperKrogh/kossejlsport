import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Calendar = () => {
  const seasons = [
    {
      name: "Forårssæson 2024",
      period: "April - Juni",
      status: "active",
      events: [
        {
          name: "Sæsonstart & Velkommen",
          date: "6. april",
          time: "10:00-15:00",
          type: "Åbning",
          description: "Officiel sæsonstart med præsentation af hold og instruktører"
        },
        {
          name: "Begynder Camp",
          date: "13-14. april", 
          time: "9:00-16:00",
          type: "Camp",
          description: "Intensiv weekend for nye medlemmer"
        },
        {
          name: "Forældre-sejlads",
          date: "27. april",
          time: "10:00-14:00", 
          type: "Social",
          description: "Børn og Båd special event"
        }
      ]
    },
    {
      name: "Sommertilbud 2024",
      period: "Juli",
      status: "upcoming",
      events: [
        {
          name: "Sommer Sejlskole",
          date: "1-5. juli",
          time: "9:00-15:00",
          type: "Camp",
          description: "Intensiv uge for alle niveauer"
        },
        {
          name: "Familie Regatta",
          date: "13. juli",
          time: "11:00-17:00",
          type: "Stævne", 
          description: "Sjov konkurrence for familier"
        },
        {
          name: "Adventure Week",
          date: "22-26. juli",
          time: "10:00-16:00",
          type: "Camp",
          description: "H-båd adventure for unge 12-16 år"
        }
      ]
    },
    {
      name: "Efterårssæson 2024", 
      period: "August - Oktober",
      status: "planning",
      events: [
        {
          name: "Efterårsstart",
          date: "10. august",
          time: "10:00-15:00",
          type: "Åbning",
          description: "Genstart efter sommerferie"
        },
        {
          name: "Klub Stævne",
          date: "7. september", 
          time: "9:00-17:00",
          type: "Stævne",
          description: "Intern kapsejlads for alle hold"
        },
        {
          name: "Sæsonafslutning",
          date: "26. oktober",
          time: "10:00-16:00",
          type: "Afslutning",
          description: "Hyggelig afslutning på sæsonen"
        }
      ]
    }
  ];

  const weeklySchedule = [
    {
      day: "Mandag",
      activities: [
        { name: "J/70 Træning", time: "17:00-20:00", group: "16-25 år" }
      ]
    },
    {
      day: "Tirsdag", 
      activities: [
        { name: "Jollesejlads Begynder", time: "16:00-18:00", group: "8-11 år" },
        { name: "Jollesejlads Øvede", time: "16:00-19:00", group: "12-16 år" }
      ]
    },
    {
      day: "Onsdag",
      activities: [
        { name: "Adventure Sejlads", time: "16:00-19:00", group: "12-16 år" },
        { name: "J/70 Kapsejlads", time: "17:00-20:00", group: "16-25 år" }
      ]
    },
    {
      day: "Torsdag",
      activities: [
        { name: "Jollesejlads Fortsætter", time: "16:00-18:30", group: "10-14 år" }
      ]
    },
    {
      day: "Lørdag",
      activities: [
        { name: "Børn og Båd", time: "10:00-13:00", group: "6-9 år + forældre" },
        { name: "Weekend Træning", time: "9:00-16:00", group: "Alle hold" }
      ]
    },
    {
      day: "Søndag",
      activities: [
        { name: "Fri Sejlads", time: "10:00-15:00", group: "Medlemmer" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "upcoming": return "bg-blue-500";
      case "planning": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Camp": return "bg-primary";
      case "Stævne": return "bg-accent";
      case "Social": return "bg-secondary";
      case "Åbning": return "bg-green-500";
      case "Afslutning": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kalender & Aktiviteter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hold dig opdateret med alle vores træninger, camps og arrangementer. 
            Vi opdaterer kalenderen løbende med nye aktiviteter og begivenheder.
          </p>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ugentlig Træning</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {weeklySchedule.map((day, index) => (
              <Card key={index} className="hover:shadow-wave transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>{day.day}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day.activities.length > 0 ? (
                    <div className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="border-l-2 border-primary pl-4">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{activity.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {activity.group}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">Ingen planlagte aktiviteter</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seasonal Events */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-center">Sæsoner & Særlige Arrangementer</h2>
          
          {seasons.map((season, seasonIndex) => (
            <Card key={seasonIndex} className="overflow-hidden shadow-sail">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{season.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {season.period}
                    </CardDescription>
                  </div>
                  <Badge className={`${getStatusColor(season.status)} text-white`}>
                    {season.status === "active" && "Aktiv"}
                    {season.status === "upcoming" && "Kommende"}
                    {season.status === "planning" && "Planlægning"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {season.events.map((event, eventIndex) => (
                    <Card key={eventIndex} className="border-l-4 border-primary">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`${getEventTypeColor(event.type)} text-white text-xs`}>
                            {event.type}
                          </Badge>
                          <div className="text-right">
                            <p className="text-sm font-medium">{event.date}</p>
                            <p className="text-xs text-muted-foreground">{event.time}</p>
                          </div>
                        </div>
                        <CardTitle className="text-base">{event.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Info */}
        <Card className="mt-16 bg-gradient-waves">
          <CardHeader>
            <CardTitle className="text-center text-2xl flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <span>Vigtigt at Vide</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Tilmeldingsperioder</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Forår: Tilmelding i februar-marts</li>
                  <li>• Sommer: Tilmelding i maj-juni</li>
                  <li>• Efterår: Tilmelding i juli-august</li>
                  <li>• Løbende tilmelding mulig ved ledige pladser</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Praktisk Information</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mød op 15 min før start</li>
                  <li>• Medbring skiftetøj og håndklæde</li>
                  <li>• Sikkerhedsudstyr udlånes af klubben</li>
                  <li>• Aktiviteter aflyses ved for hårdt vejr</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Klar til at komme i gang?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tilmeld dig vores aktiviteter eller kontakt os for mere information om kommende arrangementer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/medlem">
                Tilmeld Dig Nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/kontakt">Spørg Om Aktiviteter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;