import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Weight, Wind, Users } from "lucide-react";
import boatsImage from "@/assets/boats-dock.jpg";

interface BoatSpec {
  name: string;
  image: string;
  specs: {
    length: string;
    beam: string;
    weight: string;
    sailArea: string;
  };
  targetGroup: string;
  description: string;
  role: string;
}

const Boats = () => {
  const boats: BoatSpec[] = [
    {
      name: "Optimist",
      image: boatsImage,
      specs: {
        length: "ca. 2,36 m",
        beam: "ca. 1,12 m", 
        weight: "ca. 35 kg",
        sailArea: "ca. 3,3 m²"
      },
      targetGroup: "Børn 6-11 år",
      description: "Tryg og robust begynderjolle",
      role: "I KØS Sejlsport er Optimist første trin i læringsstien"
    },
    {
      name: "RS Tera",
      image: boatsImage,
      specs: {
        length: "ca. 2,87 m",
        beam: "ca. 1,23 m",
        weight: "ca. 43 kg",
        sailArea: "Sport-rig 3,7 m², Pro-rig 4,8 m²"
      },
      targetGroup: "Børn ca. 30-70 kg",
      description: "Progression fra Optimist med mere fart",
      role: "Næste skridt i klubudviklingsforløbet"
    },
    {
      name: "RS Zest",
      image: boatsImage,
      specs: {
        length: "ca. 3,59 m",
        beam: "ca. 1,47 m",
        weight: "ca. 73 kg",
        sailArea: "mainsail ca. 5,7 m² + jib ca. 1,2 m² (total ca. 6,9 m²)"
      },
      targetGroup: "1-3 personer, også forælder+barn",
      description: "Meget stabil centerboard-jolle",
      role: "Bruges i \"Børn og Båd\" og som social introduktion til sejlads"
    },
    {
      name: "RS Feva",
      image: boatsImage,
      specs: {
        length: "ca. 3,64 m",
        beam: "ca. 1,42 m",
        weight: "ca. 73 kg",
        sailArea: "S-rig ~5,5 m², XL-rig ~6,5 m², jib ~2,1 m², gennaker ~7,0 m²"
      },
      targetGroup: "To sejlere (barn+barn eller barn+voksen)",
      description: "Til træning og begyndende kapsejlads",
      role: "Udvikling af samarbejde og mere avanceret sejlteknik"
    },
    {
      name: "Zoom 8",
      image: boatsImage,
      specs: {
        length: "ca. 2,65 m",
        beam: "ca. 1,45 m",
        weight: "ca. 40 kg",
        sailArea: "ca. 4,8 m²"
      },
      targetGroup: "Unge der skal videre efter Optimist",
      description: "Overgangsjolle med kapseevner",
      role: "Brobygger mellem begynder- og avanceret sejlads"
    },
    {
      name: "29er",
      image: boatsImage,
      specs: {
        length: "ca. 4,40 m",
        beam: "ca. 1,70 m",
        weight: "ca. 74 kg",
        sailArea: "upwind ~13,2 m², spinnaker ~16-17 m²"
      },
      targetGroup: "To-mands skiff med trapeze og spinnaker",
      description: "Til de tekniske sejlere og kapseguere",
      role: "Avanceret træning for konkurrenceinteresserede"
    },
    {
      name: "ILCA / Laser (ILCA 6 / ILCA 7)",
      image: boatsImage,
      specs: {
        length: "ca. 4,23 m",
        beam: "ca. 1,37 m",
        weight: "ca. 58 kg",
        sailArea: "ILCA 6 ~5,8 m², ILCA 7 ~7,1 m²"
      },
      targetGroup: "Ældre ungdom (typisk 14+)",
      description: "Teknisk én-mands klasse",
      role: "Overgang til kapsejlads og videre mod J/70"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vores Joller
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I KØS Sejlsport bruger vi følgende joller i vores udviklingsforløb – fra begyndere til kapsejlads. 
            Hver båd er nøje udvalgt til at støtte sejlernes progression og give de bedste læringserfaringer.
          </p>
        </div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {boats.map((boat, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-sail transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={boat.image} 
                  alt={boat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{boat.name}</h3>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Users className="h-3 w-3 mr-1" />
                    {boat.targetGroup}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {boat.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technical Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Ruler className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Længde</p>
                      <p className="text-sm text-muted-foreground">{boat.specs.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ruler className="h-4 w-4 text-primary rotate-90" />
                    <div>
                      <p className="text-sm font-medium">Bredde</p>
                      <p className="text-sm text-muted-foreground">{boat.specs.beam}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Weight className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Vægt</p>
                      <p className="text-sm text-muted-foreground">{boat.specs.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Sejlareal</p>
                      <p className="text-sm text-muted-foreground">{boat.specs.sailArea}</p>
                    </div>
                  </div>
                </div>

                {/* Role in Club */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-primary mb-1">Rolle i KØS Sejlsport:</p>
                  <p className="text-sm text-muted-foreground">{boat.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progression Info */}
        <div className="mt-16 bg-gradient-waves rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Udviklingsstien</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Vores jolleflåde er sammensat, så der er en naturlig progression fra de mindste sejlere til de unge voksne. 
              Vi sikrer, at alle får mulighed for at udvikle deres sejlerfærdigheder i et trygt og udfordrende miljø, 
              uanset om målet er social sejlads eller konkurrencesejlads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boats;