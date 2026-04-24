"use client";

import { useState } from "react";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-bold text-kw-dark">{children}</label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-kw-dark/15 bg-white px-4 py-3 text-sm text-kw-dark outline-none transition focus:border-kw-red focus:ring-2 focus:ring-kw-red/15"
    />
  );
}

function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-kw-dark/15 bg-white px-4 py-3 text-sm text-kw-dark outline-none transition focus:border-kw-red focus:ring-2 focus:ring-kw-red/15"
    />
  );
}

const OTHER = "Other";

export function EventVenueField() {
  const [venue, setVenue] = useState("");

  return (
    <div>
      <FieldLabel>Event Venue</FieldLabel>
      <SelectInput
        name="eventVenue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
      >
        <option value="" disabled>
          Select a venue
        </option>
        <option value="Home">Home</option>
        <option value="Park">Park</option>
        <option value="Restaurant">Restaurant</option>
        <option value="School">School</option>
        <option value={OTHER}>Other</option>
      </SelectInput>
      {venue === OTHER ? (
        <div className="mt-3">
          <FieldLabel>Please specify</FieldLabel>
          <TextInput name="eventVenueOther" required />
        </div>
      ) : null}
      <p className="mt-3 text-sm font-normal leading-relaxed text-kw-dark/90">
        Note: Any parking fees at the venue are the responsibility of the
        customer.
      </p>
    </div>
  );
}
