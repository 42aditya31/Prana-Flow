import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "This platform completely changed the way I manage my daily tasks. A game-changer for productivity!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Head, Brandify",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A seamless experience with tools that are intuitive and easy to use. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Freelancer, Designer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "The design and functionality exceeded my expectations. It's modern, smooth, and user-friendly.",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Entrepreneur, StartupHub",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "A perfect blend of aesthetics and performance. My team and I are very happy with the results.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-16 px-4 lg:py-24">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-[#645452] font-semibold">
          Client Testimonials
        </p>
        <h2 className="text-3xl font-bold text-[#645452] sm:text-4xl mt-2">
          Hear From Our Happy Clients
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* Testimonial Card */}
        <div className="bg-white p-8 rounded-lg shadow-xl text-center flex flex-col items-center transition-all">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mb-6 object-cover shadow-lg"
          />
          <p className="text-lg text-gray-600 mb-4 leading-relaxed italic">
            "{testimonials[current].text}"
          </p>
          <h4 className="text-xl font-semibold text-[#645452]">
            {testimonials[current].name}
          </h4>
          <span className="text-sm text-gray-500">
            {testimonials[current].role}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-[#645452] text-white rounded-full shadow-xl hover:bg-opacity-80 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-[#645452] text-white rounded-full shadow-xl hover:bg-opacity-80 transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#645452] scale-125"
                : "bg-gray-400 scale-75"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
