import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/heading";
import styles from "./newsletter-section.module.css"

function NewsletterSection() {
  return (
    <section className="mt-[9rem]">
      <Heading title="Мэдээллийн товхимол" subtitle="Subscribe Our Newsleter" />

      <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <div>
          <Image
            src="/assets/images/newsletter_large_icon.png"
            alt="large envelop image"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
          Хамгийн сүүлийн үеийн шинэчлэлтүүд, онцгой саналууд, үнэ цэнэтэй мэдээллийг шууд хүлээн авахын тулд бүртгүүлээрэй. Чухал мэдээ, сонирхолтой боломжуудыг бүү алдаарай - яг одоо бүртгүүлээрэй!
          </p>

          <input
            type="email"
            placeholder="Таны и-мэйл хаяг..."
            className={styles.input}
          />
          <div className="mt-[3.12rem] text-center">
            <button className={styles.button}>Яг одоо бүртгүүлэх!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
