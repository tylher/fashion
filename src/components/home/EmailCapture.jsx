"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { EMAIL_CAPTURE } from "../../data/home";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.15 },
  }),
};

export default function EmailCapture() {
  const sectionRef = useRef(null);

  // Track scroll progress across the section and drift the image slower
  // than the page for a parallax feel.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const [form, setForm] = useState({ email: "", name: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { fields } = EMAIL_CAPTURE;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-28 md:py-36"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
        <motion.img
          src={EMAIL_CAPTURE.image}
          alt=""
          aria-hidden="true"
          style={{ y: imageY }}
          className="h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 text-center">
        <motion.span
          custom={0}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="eyebrow eyebrow-on-dark"
        >
          {EMAIL_CAPTURE.eyebrow}
        </motion.span>

        <motion.h2
          custom={1}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="font-display text-3xl font-bold text-paper md:text-5xl"
        >
          {EMAIL_CAPTURE.headline}
        </motion.h2>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-sm font-body text-sm text-paper/75 md:text-base"
        >
          {EMAIL_CAPTURE.body}
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="relative mt-4 w-full"
        >
          <div className="glass-glow -z-10" aria-hidden="true" />

          <form
            onSubmit={handleSubmit}
            className="glass-panel flex w-full flex-col gap-4 p-6 text-left md:p-8"
          >
            {submitted ? (
              <p className="py-4 text-center font-ui text-sm text-paper">
                You&apos;re on the list. First look lands in your inbox soon.
              </p>
            ) : (
              <>
                <label className="flex flex-col gap-1.5">
                  <span className="font-ui text-xs uppercase tracking-wide text-paper/70">
                    {fields.email.label} *
                  </span>
                  <input
                    type="email"
                    required={fields.email.required}
                    placeholder={fields.email.placeholder}
                    value={form.email}
                    onChange={handleChange("email")}
                    className="rounded-btn border border-paper/25 bg-paper/10 px-4 py-3 font-body text-sm text-paper placeholder:text-paper/40 focus:border-paper/60 focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-ui text-xs uppercase tracking-wide text-paper/70">
                    {fields.name.label}
                    <span className="ml-1 normal-case tracking-normal text-paper/40">
                      (optional)
                    </span>
                  </span>
                  <input
                    type="text"
                    placeholder={fields.name.placeholder}
                    value={form.name}
                    onChange={handleChange("name")}
                    className="rounded-btn border border-paper/25 bg-paper/10 px-4 py-3 font-body text-sm text-paper placeholder:text-paper/40 focus:border-paper/60 focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-ui text-xs uppercase tracking-wide text-paper/70">
                    {fields.interest.label}
                    <span className="ml-1 normal-case tracking-normal text-paper/40">
                      (optional)
                    </span>
                  </span>
                  <select
                    value={form.interest}
                    onChange={handleChange("interest")}
                    className="rounded-btn border border-paper/25 bg-paper/10 px-4 py-3 font-body text-sm text-paper focus:border-paper/60 focus:outline-none"
                  >
                    <option value="" className="text-ink">
                      Select one
                    </option>
                    {fields.interest.options.map((opt) => (
                      <option key={opt} value={opt} className="text-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="submit"
                  className="btn btn-primary mt-2 justify-center"
                >
                  {EMAIL_CAPTURE.submitLabel}
                  <FiArrowRight aria-hidden="true" />
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
