import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { quotes } from "@/data/quotes";

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
