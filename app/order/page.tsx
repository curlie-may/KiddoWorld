import { getFormspreeAction } from "@/lib/formspree";
import { orderCharacters } from "@/lib/site-data";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-bold text-kw-dark">{children}</label>;
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

export default function OrderPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Order Form for Character Party
        </h1>

        <form
          method="POST"
          action={getFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_ORDER_ID)}
          className="mt-10 space-y-8 rounded-3xl bg-white p-6 shadow-sm md:p-8"
        >
          <section>
            <SectionLabel>About You</SectionLabel>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <FieldLabel>First Name</FieldLabel>
                <TextInput name="firstName" required />
              </div>
              <div>
                <FieldLabel>Last Name</FieldLabel>
                <TextInput name="lastName" required />
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Email Address</FieldLabel>
                <TextInput type="email" name="email" required />
              </div>
            </div>
          </section>

          <section>
            <SectionLabel>Your Party</SectionLabel>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <FieldLabel>Character</FieldLabel>
                <SelectInput name="character" defaultValue="" required>
                  <option value="" disabled>
                    Select a character
                  </option>
                  {orderCharacters.map((character) => (
                    <option key={character} value={character}>
                      {character}
                    </option>
                  ))}
                </SelectInput>
              </div>
              <div>
                <FieldLabel>Duration</FieldLabel>
                <SelectInput name="duration" defaultValue="" required>
                  <option value="" disabled>
                    Choose party length
                  </option>
                  <option>1 hour</option>
                  <option>90 minutes</option>
                  <option>2 hours</option>
                </SelectInput>
              </div>
              <div>
                <FieldLabel>Event Date</FieldLabel>
                <TextInput type="date" name="eventDate" required />
              </div>
              <div>
                <FieldLabel>Party Start Time</FieldLabel>
                <TextInput name="partyStartTime" required />
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
              <div>
                <FieldLabel>Event Venue — home, park, restaurant, school, other</FieldLabel>
                <TextInput name="eventVenue" />
              </div>
              <div>
                <FieldLabel>Name of Event Venue — e.g. name of restaurant, park</FieldLabel>
                <TextInput name="venueName" />
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Event Address</FieldLabel>
                <TextInput name="eventAddress" required />
              </div>
              <div>
                <FieldLabel>Event Zip Code</FieldLabel>
                <TextInput name="eventZipCode" required />
              </div>
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
            <blockquote className="mt-6 text-sm leading-7 text-kw-dark/75 md:text-base">
              &ldquo;Please fill out the Order Form, press Send and someone will
              contact you within 24 hours to confirm. There will be a $75
              deposit to secure the party date. Payment can be made through
              PayPal, Venmo or Zelle.
              <br />
              <br />
              We&apos;re so excited to host your party!&rdquo;
            </blockquote>
          </div>
        </form>
      </div>
    </section>
  );
}
