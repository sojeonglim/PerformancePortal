import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const quotes = [
  { text: "It's like all my life everyone always told me, 'You're a shoe! You're a shoe! You're a shoe!' Well, what if I don't want to be a shoe?", author: "Rachel Green" },
  { text: "I know! This is probably for the best. Y'know? Independence. Taking control of your life.", author: "Monica Geller" },
  { text: "Oh, I wish I could, but I don't want to.", author: "Phoebe Buffay" },
  { text: "Unagi. It's a state of total awareness. Only by achieving true unagi can you be prepared for any danger that may befall you.", author: "Ross Geller" },
  { text: "I'm not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing" },
  { text: "How you doin'?", author: "Joey Tribbiani" },
  { text: "We were on a break!", author: "Ross Geller" },
  { text: "Could I BE wearing any more clothes?", author: "Chandler Bing" },
  { text: "Smelly cat, smelly cat, what are they feeding you?", author: "Phoebe Buffay" }
];

export default function QuoteGenerator() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const getRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
    
    setCurrentQuoteIndex(newIndex);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <section className="py-16 bg-friends-brown text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-8">Character Quotes</h2>
        
        <div className="bg-white bg-opacity-10 rounded-xl p-8 mb-8">
          <div className="mb-6">
            <p className="text-xl sm:text-2xl font-dancing quote-fade mb-4">
              "{currentQuote.text}"
            </p>
            <p className="text-lg mt-4 opacity-90">- {currentQuote.author}</p>
          </div>
          <Button 
            onClick={getRandomQuote}
            variant="secondary"
            className="bg-friends-peru text-white hover:bg-friends-tan hover:text-friends-dark"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
