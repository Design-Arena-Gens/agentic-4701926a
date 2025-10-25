"use client";

import { useState } from "react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dogName: "",
    breed: "",
    service: "Bath & Brush",
    date: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  function update<K extends keyof typeof formData>(key: K, value: (typeof formData)[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      setStatus("error");
      setMessage("Please fill required fields: name, phone, service.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Request received! We'll confirm by text or email.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        dogName: "",
        breed: "",
        service: "Bath & Brush",
        date: "",
        notes: "",
      });
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please call or email us.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Your name *</label>
          <input
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Alex Johnson"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone *</label>
          <input
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="(555) 123-4567"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Preferred date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => update("date", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Dog's name</label>
          <input
            value={formData.dogName}
            onChange={(e) => update("dogName", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Buddy"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Breed</label>
          <input
            value={formData.breed}
            onChange={(e) => update("breed", e.target.value)}
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Golden Retriever"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Service *</label>
        <select
          value={formData.service}
          onChange={(e) => update("service", e.target.value)}
          className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          required
        >
          <option>Bath & Brush</option>
          <option>Full Groom</option>
          <option>Nail Trim & Grind</option>
          <option>Deshedding</option>
          <option>Teeth & Ears</option>
          <option>Puppy Intro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => update("notes", e.target.value)}
          className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          placeholder="Tell us anything helpful (allergies, temperament, etc.)"
          rows={4}
        />
      </div>
      {message && (
        <div
          className={
            status === "error"
              ? "text-sm text-red-600"
              : status === "success"
              ? "text-sm text-green-600"
              : "text-sm text-zinc-600"
          }
        >
          {message}
        </div>
      )}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request booking"}
        </button>
        <a href="tel:+15551234567" className="text-sm underline">Prefer to call? (555) 123-4567</a>
      </div>
    </form>
  );
}
