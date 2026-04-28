"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../component/footer";
import Header from "../component/header";
import BannerImage from "@/public/assets/images/quoteBg.png";
import "react-phone-input-2/lib/style.css";
import { useGeo } from "../context/GeoContext";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const GetQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.service.trim()) newErrors.service = "Service is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await fetch("https://puredesignhub.com/api/controllers/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const text = await res.text(); // safely read the response
      console.log("Server response:", text || "(empty body)");

      setSuccessMsg("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const { phone } = useGeo();
  return (


    <>
      <section className="quote_banner relative overflow-hidden h-full w-full">
        <Header />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-center 2xl:px:40 xl:px-20 lg:px-10 px-4 2xl:pt-80 2xl:pb-40 xl:py-30 lg:py-20 py-10">
          <div className="quote_left lg:col-span-2 col-span-1 lg:order-0 order-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex items-center gap-4 lg:flex-row flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="rounded-[20px] bg-white py-4 px-[22px] w-full border border-white focus:border-[#FF5723] outline-0"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="flex items-center gap-4 lg:flex-row flex-col">
                <div className="w-full">
                  <PhoneInput
                    country={"us"}
                    value={form.phone}
                    onChange={(phone) => setForm({ ...form, phone })}
                    placeholder="Phone Number"
                    inputClass="!rounded-[20px] !bg-white !py-3.5 !pr-[22px] !w-full !border !border-white focus:!border-[#FF5723] !outline-0"
                    buttonClass="!rounded-l-[20px] !border-white !bg-white"
                    dropdownClass="!bg-white !text-black"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="rounded-[20px] bg-white py-4 px-[22px] w-full border border-white focus:border-[#FF5723] outline-0"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service + Reference Video */}
              <div className="w-full">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="rounded-[20px] bg-white py-4 px-[22px] w-full border border-white focus:border-[#FF5723] outline-0 mt-2"
                >
                  <option value="">Select Service</option>
                  <option value="WebDevelopment">Web Development</option>
                  <option value="AppDevelopment">App Development</option>
                  <option value="BrandingDesign">Branding Design</option>
                  <option value="ContentWriting">Content Writing</option>
                  <option value="SocialMediaMarketing">Social Media Marketing</option>
                  <option value="SEOServices">SEO Services</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us more about your project"
                  className="rounded-[20px] bg-white py-4 px-[22px] w-full border border-white focus:border-[#FF5723] outline-0 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>


              <div className="w-full">

                <p className="text-red-500 text-sm">By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. Message frequency may vary. Reply Help for more information. You can reply STOP to opt-out of further messaging.</p>

              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-6 sm:flex-row flex-col">
                <button
                  type="submit"
                  className="globalBtn bg-[#F75126] text-white inline-flex w-fit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
                <div className="w-px h-9 border sm:inline-flex hidden"></div>
                <span className="text-base text-black">
                  We can respond within 24-hours. If you prefer to speak by
                  phone, call us on {phone}
                </span>
              </div>
            </form>
          </div>

          {/* Banner Image */}
          <div className="quote_right lg:order-1 order-0 lg:mx-none mx-auto">
            <Image
              src={BannerImage}
              alt="Get a Quote"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="2xl:w-[43rem] md:w-[30rem] sm:w-[24rem] w-[18rem] 2xl:h-[41rem] md:h-[26rem] sm:h-[20rem] h-[14rem] object-fill object-center mx-auto inline-flex"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GetQuote;
