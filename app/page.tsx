"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Instagram,
  Mail,
  Phone,
  Star,
  Youtube,
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Home() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const testimonials = [
    { id: 1, name: "Bubble Skincare", file: "p_testimonial1" },
    { id: 2, name: "Haruharu Wonder", file: "p_testimonial2" },
    { id: 3, name: "Anua Skincare Set", file: "p_testimonial3" },
    { id: 4, name: "Dove Beauty", file: "p_testimonial4" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-black py-6 px-4 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-pink-400 font-serif italic">
              Adebolaji
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                What I Do
              </Link>
              <Link
                href="#brands"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Brands
              </Link>
              <Link
                href="#testimonials"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 border border-pink-400">
              Let's Connect
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif italic text-pink-400 leading-tight">
                Adebolaji Adeyeye
              </h1>
              <div className="h-1 w-32 bg-pink-500"></div>
              <h2 className="text-2xl text-pink-300 font-light">
                UGC CONTENT CREATOR
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I AM A PASSIONATE UGC CREATOR WHO HELPS BRANDS CONNECT WITH
                THEIR AUDIENCE THROUGH AUTHENTIC, RELATABLE, AND HIGH-CONVERTING
                CONTENT. I CREATE CONTENT THAT FEELS ORGANIC WHILE DELIVERING
                REAL RESULTS.
              </p>
              <div className="flex space-x-4 pt-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 border border-pink-400">
                  My Work
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-400 hover:bg-pink-950 rounded-full px-8"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <div className="absolute inset-0 border-[8px] border-pink-500 rounded-full transform rotate-6"></div>
                <div className="relative bg-black p-2 rounded-full">
                  <Image
                    src="/images/bj_home.jpeg?height=500&width=500"
                    alt="Adebolaji - Content Creator"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-pink-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-black mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-2xl transform rotate-3"></div>
              <Image
                src="/images/bj_home2.jpeg?height=600&width=500"
                alt="Adebolaji creating content"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl object-cover w-full"
              />
            </div>

            <div className="space-y-6 text-black">
              <h3 className="text-2xl font-bold">My Creative Journey</h3>
              <p className="text-lg">
                I specialize in creating authentic content that resonates with
                audiences and drives real engagement. Whether it's unboxings,
                product demos, or lifestyle videos, I turn brand messages into
                engaging moments that build trust and drive action.
              </p>
              <p className="text-lg">
                My background in beauty, lifestyle, and food content creation
                has allowed me to develop a unique perspective that helps brands
                stand out in crowded markets. I believe in creating content that
                feels natural and organic while still delivering measurable
                results.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <Card className="bg-black text-white border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      50K+
                    </div>
                    <div className="text-gray-300 text-sm">Audience Reach</div>
                  </CardContent>
                </Card>
                <Card className="bg-black text-white border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      25+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Brand Collaborations
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-pink-400 mb-4">
              What I Do
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Skincare Vlogger",
                description:
                  "I document honest skincare journeys—from first impressions to long-term results. Whether it's trying the latest serum or breaking down ingredient lists, I create close-up, real-life content that builds trust and helps audiences make confident choices.",
                icon: Heart,
              },
              {
                title: "Location Review Expert",
                description:
                  "I create vibrant short-form videos that turn everyday dining spots into must-visit experiences. Whether it's a cozy café or a buzzing restaurant, I capture the energy and flavors all in quick, engaging clips that connect with real audiences and drive discovery.",
                icon: Star,
              },
              {
                title: "Lifestyle UGC Creator",
                description:
                  "I create UGC content that blends style, personality, and purpose whether it's showcasing a fashion lookbook, styling pieces for everyday wear, or highlighting the feel and fit of a brand. My goal is to help brands stand out by showing real people, in real moments, wearing real confidence.",
                icon: Camera,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-black border border-pink-500 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 rounded-full mb-6">
                    <service.icon className="text-black" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-pink-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-black mb-4">
              Brands I Can Work With
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Skincare & Beauty Brands",
              "Haircare & Wigs Brands",
              "Fashion & Accessories Labels",
              "Fragrance & Personal Care Brands",
              "Restaurants & Food Spots",
              "Lifestyle & Tech Gadgets",
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-black text-pink-400 rounded-full py-4 px-6 text-center border border-pink-400 hover:bg-pink-950 transition-colors"
              >
                <p className="font-medium">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-pink-400 mb-4">
              My Work
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Luxury Brand Campaign",
                category: "Brand Collaboration",
                description: "Premium product showcase",
              },
              {
                id: 2,
                title: "Fashion Week Feature",
                category: "Editorial Work",
                description: "Runway and backstage coverage",
              },
              {
                id: 3,
                title: "Lifestyle Collection",
                category: "Commercial Project",
                description: "Modern lifestyle photography",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 border border-gray-800 hover:border-pink-500/30"
              >
                <video
                  src={`/videos/testimonial${project.id}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with enhanced content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-pink-300 text-sm mb-2">
                      {project.category}
                    </p>
                    <p className="text-gray-300 text-xs mb-4 opacity-90">
                      {project.description}
                    </p>
                    <button className="text-pink-400 text-sm border border-pink-400 px-4 py-2 rounded-full hover:bg-pink-400 hover:text-black transition-all duration-200 hover:shadow-lg hover:shadow-pink-400/25">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
              </div>
            ))}
          </div>

          {/* Optional: Add a "View All Work" button */}
          <div className="text-center mt-12">
            <button className="bg-pink-500 text-black px-8 py-3 rounded-full font-bold hover:bg-pink-400 transition-colors duration-200 hover:shadow-lg hover:shadow-pink-500/25">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-pink-500 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-black mb-4">
              Products Testimonials
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-black rounded-3xl overflow-hidden shadow-lg"
              >
                <video
                  src={`/videos/${t.file}.mp4`}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover bg-gray-200"
                  controls
                  preload="metadata"
                  poster={`/videos/${t.file}_poster.png`}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="text-pink-400 font-bold">{t.name}</h3>
                  <p className="text-gray-300 text-sm">
                    Product review and testimonial
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-pink-400 mb-4">
              Let's connect & collaborate
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 border-[8px] border-pink-500 rounded-3xl transform rotate-3"></div>
                <Image
                  src="/images/bj_foot.jpeg?height=600&width=500"
                  alt="Adebolaji at a restaurant"
                  width={500}
                  height={600}
                  className="relative z-10 rounded-3xl object-cover w-full"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-400">
                  Get In Touch
                </h3>
                <p className="text-gray-300">
                  Ready to create authentic content that resonates with your
                  audience? Let's collaborate on your next project!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="text-pink-500 mr-4" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">PHONE</p>
                    <p className="text-white">+44-7717-021490</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-pink-500 mr-4" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">EMAIL</p>
                    <p className="text-white">adebolajiadeyeye@gmail.com</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">SOCIALS</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/adebolaji_"
                      className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
                    >
                      <Instagram size={20} className="text-black" />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@adebolajii?"
                      className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
                    >
                      <FaTiktok size={20} className="text-black" />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@adebolajii?"
                      className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
                    >
                      <Youtube size={20} className="text-black" />
                    </Link>
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/xyzjewbk"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6 mt-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-pink-500 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-pink-500 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-pink-500 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-pink-500 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-3 border border-pink-400"
                >
                  Send Message
                </Button>
              </form>
              {status === "success" && (
                <p className="mt-4 text-center text-green-400">
                  Thanks for your message! I’ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-red-400">
                  Oops—something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-pink-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-pink-400 font-serif italic mb-4 md:mb-0">
              Adebolaji
            </div>
            <div className="flex space-x-8">
              <Link
                href="#home"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-pink-900 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Adebolaji Adeyeye. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
