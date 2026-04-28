'use client'
import Image from "next/image";
import React from "react";
import ContactBg from "@/public/assets/images/contact_bg.png";
import { useState, FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const titleText = (
  <>
    {" "}
    <span>
      Connect{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
      >
        <path
          d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6
               c1.4,32.4,52.2,54,142.6,63.7
               c66.2,7.1,212.2,7.5,273.5-8.3
               c64.4-16.6,104.3-57.6,33.8-98.2
               C386.7-4.9,179.4-1.4,126.3,20.7"
          fill="none"
          stroke="#f75126"
          strokeWidth="6"
          strokeLinecap="round"
          className="animated-path"
        />
      </svg>
    </span>
    with us
  </>
);

export default function ContactUs({
  title = titleText,
  text = (
    <>
      Want the best website redesign service? Get in touch with our<br></br>{" "}
      professional designers!
    </>
  ),
  imagePath = ContactBg,
}: any) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.phone.trim()) newErrors.phone = "Phone is required";
    if (!values.service.trim()) newErrors.service = "Service is required";
    if (!values.message.trim()) newErrors.message = "Message is required";
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

      const res = await fetch(
        "https://puredesignhub.com/api/controllers/contact.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      // ---- changed part ----
      const text = await res.text(); // safely read whatever comes back
      console.log("Server response:", text || "(empty body)");

      setSuccessMsg("Message sent successfully!");
      setValues({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact_sec relative 2xl:px-55 xl:px-40 lg:px-20 px-4 my-20 overflow-hidden">
      <h2 className="title2 text-center">{title}</h2>
      <p className="text lg:my-12.5 md:my-8 my-4 text-center">{text}</p>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-15">
        <div className="md:order-0 order-1">
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 grid-cols-1 gap-7"
          >
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              {/* <input
          name="service"
          type="text"
          placeholder="Select Service"
          value={values.service}
          onChange={handleChange}
          className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none"
        /> */}
              <select
                name="service"
                value={values.service}
                onChange={handleChange}
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none"
              >
                <option value="">Select Service</option>
                <option value="WebDevelopment">Web Development</option>
                <option value="AppDevelopment">App Development</option>
                <option value="BrandingDesign">Branding Design</option>
                <option value="ContentWriting">Content Writing</option>
                <option value="SocialMediaMarketing">
                  Social Media Marketing
                </option>
                <option value="SEOServices">SEO Services</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Type your message"
                value={values.message}
                onChange={handleChange}
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-xl py-[13px] px-6 w-full outline-none resize-none"
                rows={3}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <div className="md:col-span-2">

              <p className="text-red-500 text-sm">By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. Message frequency may vary. Reply Help for more information. You can reply STOP to opt-out of further messaging.</p>

            </div>

            <div>
              {successMsg && (
                <p className="text-green-600 text-sm mb-2">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-600 text-sm mb-2">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="globalBtn text-white bg-[#F75126] w-fit md:col-span-2"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="md:order-1 order-0">
          <Image
            src={imagePath}
            title="Contact Us"
            alt="Contact Us"
            width={0}
            height={0}
            decoding="async"
            loading="lazy"
            sizes="100vw"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
