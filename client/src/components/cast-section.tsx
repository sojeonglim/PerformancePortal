import { Card, CardContent } from "@/components/ui/card";
import { castMembers } from "@/data/cast";
import type { CastMember } from "@/data/cast";

export default function CastSection() {

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
          {castMembers.map((member) => (
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
