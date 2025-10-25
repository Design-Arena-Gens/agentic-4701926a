import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image src="/paw.svg" alt="Pawfect Grooming" width={28} height={28} />
            <span className="font-semibold tracking-tight">Pawfect Grooming</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#gallery" className="hover:text-black">Gallery</a>
            <a href="#reviews" className="hover:text-black">Reviews</a>
            <a href="#contact" className="hover:text-black">Contact</a>
            <a href="#booking" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 hover:bg-zinc-800">Book</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-sky-50" />
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Fresh cuts, wagging tails, and happy pups.
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Full-service dog grooming with gentle, fear-free care. From bath & brush to
              breed-standard cuts, we make pups look and feel their best.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 hover:bg-zinc-800">
                Book Appointment
              </a>
              <a href="#services" className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-100">
                View Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><span>⭐️⭐️⭐️⭐️⭐️</span> <span>200+ 5-star reviews</span></div>
              <div className="hidden md:block h-4 w-px bg-zinc-300" />
              <div>Certified, insured, fear-free handling</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]" />
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <Image src="/dog-hero.svg" alt="Happy groomed dog" width={640} height={480} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="text-zinc-600 max-w-xl">
            Transparent pricing, breed-aware styling, and stress-free care tailored to your pup.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Bath & Brush", desc: "Shampoo, blow-dry, brush-out, and spritz.", emoji: "🛁" },
            { title: "Full Groom", desc: "Breed cut or pet trim with tidy-up.", emoji: "✂️" },
            { title: "Nail Trim & Grind", desc: "Smooth, safe, and quick.", emoji: "🐾" },
            { title: "Deshedding", desc: "Reduce shedding with coat care.", emoji: "🍂" },
            { title: "Teeth & Ears", desc: "Fresh breath and clean ears.", emoji: "🪥" },
            { title: "Puppy Intro", desc: "Gentle first groom experience.", emoji: "🐶" },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-3xl" aria-hidden>{s.emoji}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Pricing</h2>
        <p className="mt-2 text-zinc-600">Prices vary by size, coat, and condition.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Small", "Medium", "Large"].map((size, idx) => (
            <div key={size} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold">{size} Dogs</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>Bath & Brush: ${[45, 55, 70][idx]}</li>
                <li>Full Groom: ${[70, 85, 110][idx]}</li>
                <li>Nails Only: $15</li>
              </ul>
              <a href="#booking" className="mt-6 inline-flex rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-zinc-800">Book {size}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Gallery</h2>
          <p className="text-zinc-600 max-w-xl">Before-and-afters and happy clients.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-amber-100 to-sky-100" />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What pet parents say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Ava & Milo",
              text: "The best groom Milo has ever had. He ran back in for treats!",
            },
            {
              name: "Jordan & Coco",
              text: "Super gentle and thorough. Coco's coat has never looked better.",
            },
            {
              name: "Sam & Daisy",
              text: "Easy booking and fair pricing. Five stars all around!",
            },
          ].map((r) => (
            <figure key={r.name} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <blockquote className="text-zinc-700">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-zinc-900">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book your pup's spa day</h2>
              <p className="mt-2 text-zinc-600">Fill out the form and we'll confirm your appointment.</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>• Open Tue–Sat, 9am–6pm</li>
                <li>• 123 Bark St, Suite 5, Dogtown</li>
                <li>
                  • Call <a className="underline" href="tel:+15551234567">(555) 123-4567</a> or email {" "}
                  <a className="underline" href="mailto:hello@pawfectgrooming.com">hello@pawfectgrooming.com</a>
                </li>
              </ul>
            </div>
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Visit us</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-semibold">Pawfect Grooming</h3>
            <p className="mt-1 text-zinc-700">123 Bark St, Suite 5, Dogtown</p>
            <p className="text-zinc-700">Tue–Sat: 9am–6pm</p>
            <div className="mt-4 flex gap-3">
              <a href="tel:+15551234567" className="inline-flex rounded-full bg-black text-white px-4 py-2 text-sm">Call</a>
              <a href="mailto:hello@pawfectgrooming.com" className="inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm">Email</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <iframe
              title="Map"
              className="w-full h-72 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=New%20York&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <Image src="/paw.svg" alt="Paw" width={18} height={18} />
            <span>© {new Date().getFullYear()} Pawfect Grooming</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#booking" className="hover:text-black">Book</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
