'use client'

import { useEffect, useState } from "react";
import CheckoutPage from "@/app/payment-page/CheckoutPage";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("checkoutData");

    if (!storedData) {
      router.push("/"); // safety redirect since /pricing doesn't exist
      return;
    }

    setData(JSON.parse(storedData));
  }, []);

  if (!data) return null;

  return (
    <CheckoutPage
      packageName={data.title}
      price={typeof data.price === 'string' ? Number(data.price.replace(/,/g, '')) : Number(data.price)}
      currency={data.currency}
      description={data.description}
    />
  );
}