import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { CastMember } from "@shared/schema";

export default function CastSection() {
  const { data: castMembers, isLoading } = useQuery<CastMember[]>({
    queryKey: ["/api/cast"],
  });

  if (isLoading) {
    return (
      <section id="cast" className="py-20 bg-friends-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">Meet the Cast</h2>
            <p className="text-lg text-friends-dark max-w-3xl mx-auto">Loading cast information...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-64 bg-gray-300" />
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2" />
                  <div className="h-4 bg-gray-300 rounded mb-3" />
                  <div className="h-12 bg-gray-300 rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cast" className="py-20 bg-friends-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">Meet the Cast</h2>
          <p className="text-lg text-friends-dark max-w-3xl mx-auto">
            The cast of Friends Live brings the beloved characters to life with their unique interpretations and comedic timing. Each actor embodies the essence of their character, delivering memorable performances that capture the spirit of the original series.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {castMembers?.map((member) => (
            <Card key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <img 
                src={member.imageUrl} 
                alt={`${member.characterName} - ${member.actorName}`} 
                className="w-full h-64 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-friends-brown mb-2">{member.characterName}</h3>
                <p className="text-friends-peru font-medium mb-3">Played by {member.actorName}</p>
                <p className="text-friends-dark text-sm leading-relaxed">
                  "{member.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
