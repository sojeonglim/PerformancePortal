export interface CastMember {
  id: number;
  characterName: string;
  actorName: string;
  quote: string;
  imageUrl: string;
}

export const castMembers: CastMember[] = [
  {
    id: 1,
    characterName: "Rachel Green",
    actorName: "Amelia Clarke",
    quote: "It's like all my life everyone always told me, 'You're a shoe! You're a shoe! You're a shoe!' Well, what if I don't want to be a shoe?",
    imageUrl: "/images/cast/rachel.jpg"
  },
  {
    id: 2,
    characterName: "Monica Geller",
    actorName: "Olivia Bennett",
    quote: "I know! This is probably for the best. Y'know? Independence. Taking control of your life.",
    imageUrl: "/images/cast/monica.jpg"
  },
  {
    id: 3,
    characterName: "Phoebe Buffay",
    actorName: "Sarah Williams",
    quote: "Oh, I wish I could, but I don't want to.",
    imageUrl: "/images/cast/phoebe.jpg"
  },
  {
    id: 4,
    characterName: "Ross Geller",
    actorName: "Michael Chen",
    quote: "Unagi. It's a state of total awareness. Only by achieving true unagi can you be prepared for any danger that may befall you.",
    imageUrl: "/images/cast/ross.jpg"
  },
  {
    id: 5,
    characterName: "Chandler Bing",
    actorName: "James Rodriguez",
    quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
    imageUrl: "/images/cast/chandler.jpg"
  },
  {
    id: 6,
    characterName: "Joey Tribbiani",
    actorName: "David Park",
    quote: "How you doin'?",
    imageUrl: "/images/cast/joey.jpg"
  }
];