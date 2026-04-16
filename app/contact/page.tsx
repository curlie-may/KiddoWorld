import { getFormspreeAction } from "@/lib/formspree";

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

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-2xl border border-kw-dark/15 bg-white px-4 py-3 text-sm text-kw-dark outline-none transition focus:border-kw-red focus:ring-2 focus:ring-kw-red/15"
    />
  );
}

export default function ContactPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
            Get in Touch
          </h1>
          <div className="mt-8 space-y-4 text-base text-kw-dark/80">
            <p>
              <span className="font-bold text-kw-dark">Email:</span>{" "}
              <a href="mailto:info@kiddoworld.com" className="text-kw-red hover:underline">
                info@kiddoworld.com
              </a>
            </p>
            <p>
              <span className="font-bold text-kw-dark">Phone:</span>{" "}
              <a href="tel:16694440941" className="text-kw-red hover:underline">
                (669) 444-0941
              </a>
            </p>
            <p>
              <span className="font-bold text-kw-dark">Yelp:</span>{" "}
              <a
                href="https://www.yelp.com/biz/kiddo-world-san-jose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kw-red hover:underline"
              >
                View on Yelp
              </a>
            </p>
            <p>
              <span className="font-bold text-kw-dark">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/kidd0w0rld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kw-red hover:underline"
              >
                @kidd0w0rld
              </a>
            </p>
            <p className="rounded-2xl bg-kw-yellow/15 p-4 text-sm leading-7">
              To ensure delivery, please add info@kiddoworld.com to your address
              book.
            </p>
          </div>
        </div>

        <form
          method="POST"
          action={getFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID)}
          className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
        >
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
              <FieldLabel>Email</FieldLabel>
              <TextInput type="email" name="email" required />
            </div>
            <div className="md:col-span-2">
              <FieldLabel>Subject</FieldLabel>
              <TextInput name="subject" required />
            </div>
            <div className="md:col-span-2">
              <FieldLabel>Message</FieldLabel>
              <TextArea name="message" rows={7} required />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex rounded-full bg-kw-red px-8 py-3.5 text-base font-bold text-white transition hover:bg-kw-red/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
