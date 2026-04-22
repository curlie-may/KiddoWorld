import { OrderForm } from "@/components/forms/OrderForm";

export default function OrderPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Book a Character Party
        </h1>
        <OrderForm formIdEnvVar="NEXT_PUBLIC_FORMSPREE_ORDER_ID" />
      </div>
    </section>
  );
}
