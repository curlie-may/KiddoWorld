"use client";

import { getFormspreeAction } from "@/lib/formspree";
import { orderCharacters, partyPricing } from "@/lib/site-data";
import { CharacterMultiSelect } from "@/components/forms/CharacterMultiSelect";
import { EventVenueField } from "@/components/forms/EventVenueField";
import { useEffect, useMemo, useRef, useState } from "react";

type OrderFormProps = {
  formIdEnvVar:
    | "NEXT_PUBLIC_FORMSPREE_ORDER_ID"
    | "NEXT_PUBLIC_FORMSPREE_ORDER_RENTAL_ID"
    | "NEXT_PUBLIC_FORMSPREE_ORDER_CORPORATE_ID";
};

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

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-2xl border border-kw-dark/15 bg-white px-4 py-3 text-sm text-kw-dark outline-none transition focus:border-kw-red focus:ring-2 focus:ring-kw-red/15"
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-kw-red">
      {children}
    </p>
  );
}

const confirmationMessage = `Please fill out the Order Form, press Send and someone will contact you within 24 hours to confirm. There will be a $75 deposit to secure the party date. Payment can be made through PayPal, Venmo or Zelle.\n\nWe're so excited to host your party!`;
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const partyStartTimes = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
] as const;

export function OrderForm({ formIdEnvVar }: OrderFormProps) {
  const formId =
    formIdEnvVar === "NEXT_PUBLIC_FORMSPREE_ORDER_ID"
      ? process.env.NEXT_PUBLIC_FORMSPREE_ORDER_ID
      : formIdEnvVar === "NEXT_PUBLIC_FORMSPREE_ORDER_RENTAL_ID"
        ? process.env.NEXT_PUBLIC_FORMSPREE_ORDER_RENTAL_ID
        : process.env.NEXT_PUBLIC_FORMSPREE_ORDER_CORPORATE_ID;
  const [characterCount, setCharacterCount] = useState(0);
  const [duration, setDuration] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [eventZipCode, setEventZipCode] = useState("");
  const [distanceMiles, setDistanceMiles] = useState<number | null>(null);
  const [isDistanceLoading, setIsDistanceLoading] = useState(false);
  const [distanceError, setDistanceError] = useState<string | null>(null);
  const streetAddressRef = useRef<HTMLInputElement | null>(null);
  const autocompleteInitializedRef = useRef(false);

  const showCalculator = Boolean(
    characterCount > 0 &&
      duration &&
      streetAddress.trim() &&
      city.trim() &&
      eventZipCode.trim(),
  );

  const partyCost = useMemo(() => {
    if (!duration || characterCount < 1 || characterCount > 3) {
      return null;
    }
    const durationPricing = partyPricing[duration as keyof typeof partyPricing];
    return durationPricing?.[characterCount as 1 | 2 | 3] ?? null;
  }, [characterCount, duration]);

  useEffect(() => {
    if (!mapsApiKey || !streetAddressRef.current) {
      return;
    }

    const win = window as Window & {
      google?: {
        maps?: {
          places?: {
            Autocomplete: new (
              input: HTMLInputElement,
              opts?: Record<string, unknown>,
            ) => {
              addListener: (event: string, cb: () => void) => void;
              getPlace: () => {
                address_components?: Array<{
                  long_name: string;
                  types: string[];
                }>;
              };
            };
          };
        };
      };
    };

    const initAutocomplete = () => {
      if (autocompleteInitializedRef.current || !streetAddressRef.current) {
        return;
      }
      const places = win.google?.maps?.places;
      if (!places?.Autocomplete) {
        return;
      }

      const autocomplete = new places.Autocomplete(streetAddressRef.current, {
        fields: ["address_components", "formatted_address"],
        types: ["address"],
        componentRestrictions: { country: "us" },
      });
      autocompleteInitializedRef.current = true;

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const components = place.address_components ?? [];
        const getComponent = (...types: string[]) =>
          components.find((comp) => types.every((type) => comp.types.includes(type)))
            ?.long_name ?? "";
        const parsedStreet = [getComponent("street_number"), getComponent("route")]
          .filter(Boolean)
          .join(" ");
        const parsedCity =
          getComponent("locality") ||
          getComponent("postal_town") ||
          getComponent("administrative_area_level_3");
        const parsedZip = getComponent("postal_code");

        if (parsedStreet) {
          setStreetAddress(parsedStreet);
        }
        if (parsedCity) {
          setCity(parsedCity);
        }
        if (parsedZip) {
          setEventZipCode(parsedZip);
        }
      });
    };

    const scriptId = "google-maps-places-api";
    if (win.google?.maps?.places?.Autocomplete) {
      initAutocomplete();
      return;
    }

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", initAutocomplete, { once: true });
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.addEventListener(
        "load",
        () => {
          initAutocomplete();
        },
        { once: true },
      );
      document.head.appendChild(script);
    }

    return () => undefined;
  }, []);

  useEffect(() => {
    if (!showCalculator) {
      setDistanceMiles(null);
      setDistanceError(null);
      setIsDistanceLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      try {
        setIsDistanceLoading(true);
        setDistanceError(null);
        const query = new URLSearchParams({
          streetAddress: streetAddress.trim(),
          city: city.trim(),
          zipCode: eventZipCode.trim(),
        });
        const response = await fetch(`/api/distance?${query.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("distance_lookup_failed");
        }
        const data = (await response.json()) as {
          miles?: number;
          error?: string;
        };
        if (typeof data.miles !== "number") {
          throw new Error(data.error ?? "distance_lookup_failed");
        }
        setDistanceMiles(data.miles);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          return;
        }
        setDistanceMiles(null);
        setDistanceError("Could not calculate travel distance right now.");
      } finally {
        setIsDistanceLoading(false);
      }
    }, 450);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [showCalculator, streetAddress, city, eventZipCode]);

  const milesOver = distanceMiles === null ? null : Math.max(0, distanceMiles - 15);
  const travelFee = milesOver === null ? null : milesOver;
  const total =
    partyCost !== null && travelFee !== null ? partyCost + travelFee : null;

  return (
    <form
      method="POST"
      action={getFormspreeAction(formId)}
      className="mt-10 space-y-8 rounded-3xl bg-white p-6 shadow-sm md:p-8"
    >
      <section>
        <SectionLabel>About You</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <FieldLabel>First Name</FieldLabel>
            <TextInput name="firstName" required autoComplete="given-name" />
          </div>
          <div>
            <FieldLabel>Last Name</FieldLabel>
            <TextInput name="lastName" required autoComplete="family-name" />
          </div>
          <div className="md:col-span-2">
            <FieldLabel>Email Address</FieldLabel>
            <TextInput type="email" name="email" required autoComplete="email" />
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Your Party</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          <CharacterMultiSelect
            name="characters"
            label="Character(s)"
            options={orderCharacters}
            required
            onSelectionChange={(selected) => setCharacterCount(selected.length)}
          />

          <div>
            <FieldLabel>Duration</FieldLabel>
            <SelectInput
              name="duration"
              defaultValue=""
              required
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="" disabled>
                Choose party length
              </option>
              <option>1 Hour</option>
              <option>1½ Hours</option>
              <option>2 Hours</option>
              <option>2½ Hours</option>
              <option>3 Hours</option>
            </SelectInput>
          </div>

          <div>
            <FieldLabel>Event Date</FieldLabel>
            <TextInput type="date" name="eventDate" required />
          </div>
          <div>
            <FieldLabel>Party Start Time</FieldLabel>
            <SelectInput name="partyStartTime" defaultValue="" required>
              <option value="" disabled>
                Select party start time
              </option>
              {partyStartTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </SelectInput>
          </div>
          <div>
            <FieldLabel>Number of Children</FieldLabel>
            <TextInput type="number" min="1" name="numberOfChildren" required />
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Event Location</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          <EventVenueField />
          <div>
            <FieldLabel>Name of Event Venue — e.g. name of restaurant, park</FieldLabel>
            <TextInput name="venueName" />
          </div>
          <div className="md:col-span-2">
            <FieldLabel>Street Address</FieldLabel>
            <input
              ref={streetAddressRef}
              name="streetAddress"
              required
              autoComplete="address-line1"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="w-full rounded-2xl border border-kw-dark/15 bg-white px-4 py-3 text-sm text-kw-dark outline-none transition focus:border-kw-red focus:ring-2 focus:ring-kw-red/15"
            />
          </div>
          <div className="md:col-span-2">
            <FieldLabel>Address Line 2 (optional)</FieldLabel>
            <TextInput name="addressLine2" autoComplete="address-line2" />
          </div>
          <div>
            <FieldLabel>City</FieldLabel>
            <TextInput
              name="city"
              required
              autoComplete="address-level2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <FieldLabel>Zip Code</FieldLabel>
            <TextInput
              name="eventZipCode"
              required
              autoComplete="postal-code"
              value={eventZipCode}
              onChange={(e) => setEventZipCode(e.target.value)}
            />
          </div>
          {showCalculator ? (
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-kw-red/20 bg-kw-cream p-4 text-sm text-kw-dark md:text-base">
                <h3 className="mb-3 text-base font-bold text-kw-dark">
                  Estimated Cost Breakdown
                </h3>
                {partyCost === null ? (
                  <p className="font-medium text-kw-red">
                    Please contact us for pricing.
                  </p>
                ) : (
                  <p className="mb-2 grid grid-cols-[1fr_auto] items-center gap-4">
                    <span className="font-medium">Party cost:</span>
                    <span className="font-bold text-kw-dark">${partyCost}</span>
                  </p>
                )}

                {isDistanceLoading ? (
                  <p className="text-kw-dark/80">Calculating travel fee...</p>
                ) : distanceError ? (
                  <p className="text-kw-red">{distanceError}</p>
                ) : distanceMiles !== null ? (
                  <>
                    {travelFee === 0 ? (
                      <p className="mb-2">Travel fee: None (within 15-mile radius)</p>
                    ) : (
                      <p className="mb-2 grid grid-cols-[1fr_auto] items-start gap-4">
                        <span className="font-medium">Travel fee:</span>
                        <span className="text-right">
                          ${travelFee}
                          <span className="block text-xs text-kw-dark/75 md:text-sm">
                            ({distanceMiles} miles, {milesOver} miles over 15-mile radius)
                          </span>
                        </span>
                      </p>
                    )}
                    {total !== null ? (
                      <>
                        <div className="my-3 ml-auto h-px w-24 bg-kw-dark/20" />
                        <p className="grid grid-cols-[1fr_auto] items-center gap-4 text-lg font-black text-kw-dark">
                          <span>Total:</span>
                          <span>${total}</span>
                        </p>
                      </>
                    ) : null}
                  </>
                ) : null}

                <p className="mt-3 text-xs text-kw-dark/70 md:text-sm">
                  Estimated cost. Final price confirmed upon booking.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section>
        <SectionLabel>Anything Else</SectionLabel>
        <div className="grid gap-5">
          <div>
            <FieldLabel>How Did You Hear About Us?</FieldLabel>
            <TextInput name="referralSource" />
          </div>
          <div>
            <FieldLabel>Other Details</FieldLabel>
            <TextArea name="otherDetails" rows={6} />
          </div>
        </div>
      </section>

      <div>
        <button
          type="submit"
          className="inline-flex rounded-full bg-kw-red px-8 py-3.5 text-base font-bold text-white transition hover:bg-kw-red/90"
        >
          Send
        </button>
        <blockquote className="mt-6 whitespace-pre-line text-sm leading-7 text-kw-dark/75 md:text-base">
          &ldquo;{confirmationMessage}&rdquo;
        </blockquote>
      </div>
    </form>
  );
}

