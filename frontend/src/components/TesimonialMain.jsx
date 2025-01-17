import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';

const TesimonialMain = () => {
    const testimonials = [
        {
          quote:
            "This platform is a perfect blend of India’s timeless wisdom and modern AI. It’s helped me align my daily habits with my deeper values.",
          name: "Ananya Iyer",
          designation: "Yoga Instructor",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The integration of ancient Indian philosophies with AI is revolutionary. It’s not just about building habits—it’s about building a better version of yourself.",
          name: "Rohan Sharma",
          designation: "Entrepreneur and Fitness Enthusiast",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The personalized guidance rooted in Indian culture makes this platform unique. It’s helped me find balance in both my personal and professional life.",
          name: "Neha Gupta",
          designation: "Corporate Wellness Coach",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "With this platform, I feel like I have a virtual Guru guiding me. It’s intuitive, inspiring, and deeply connected to our roots.",
          name: "Amitabh Desai",
          designation: "Technology Consultant",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This isn’t just another productivity app. It’s a meaningful journey that combines our cultural heritage with actionable insights for self-improvement.",
          name: "Pooja Nair",
          designation: "Holistic Health Specialist",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
  
    return (
      <>
        <div className="main">
      
       <h1 className="text-6xl pt-8 font-bold text-center text-[#06D6A0] "> Voices That Inspire</h1>
            <AnimatedTestimonials testimonials={testimonials} />
            
        </div>
      </>
    );
}

export default TesimonialMain
