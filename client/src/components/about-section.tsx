import { images } from "@/data/images";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={images.aboutGroup} 
              alt="Friends Live Cast Group Photo" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">About the Project</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Our acting club is thrilled to present a live stage adaptation of the iconic TV series Friends. This project aims to bring the beloved characters and their stories to life in a new and exciting way, offering fans a unique experience.
              </p>
              <p>
                The "Stage Stars" acting club is a community of passionate performers dedicated to bringing stories to life through theater. We believe in the power of performance to connect people and create memorable experiences.
              </p>
              <p>
                We chose Friends because of its timeless appeal and relatable characters. The series' themes of friendship, love, and life's ups and downs resonate with audiences of all ages, making it a perfect choice for a stage adaptation.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-friends-beige rounded-xl">
              <h3 className="text-xl font-semibold text-friends-brown mb-3">Why Friends?</h3>
              <p className="text-friends-dark">
                Friends represents more than just entertainment – it's about the bonds we form, the laughter we share, and the memories we create together. Our stage adaptation captures the essence of what makes this show so beloved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
