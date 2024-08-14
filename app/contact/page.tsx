"use client";

import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { Socials } from "@/components/Socials";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:knycornelius@gmail.com?subject=New job recruitment ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0ADescription: ${encodeURIComponent(formData.description)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <form
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">
              Ready to start a project? Get in touch, and let&apos;s collaborate
              to bring your ideas to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                type="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <Socials
            containerStyles="flex flex-1 flex-row justify-center items-center gap-6 xl:flex-col"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </motion.section>
  );
}
