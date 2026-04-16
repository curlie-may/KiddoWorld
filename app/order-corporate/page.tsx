import { OrderForm } from "@/components/forms/OrderForm";

export default function OrderCorporatePage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Order Form for Corporate Events
        </h1>
        <OrderForm formIdEnvVar="NEXT_PUBLIC_FORMSPREE_ORDER_CORPORATE_ID" />
      </div>
    </section>
  );
}

