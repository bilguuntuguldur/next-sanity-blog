"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import Heading from "../ui/heading";
import styles from "./contact-form.module.css"


export type FormData = {
    name: string;
    phone: number;
    email: string;
    subject: string;
    message: string;
};

const HelloPage: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();


    function onSubmit(data: FormData) {
        const newData = {
        ...data,
        };
        sendEmail(newData);
    }
    return (
        <>
            <div className="w-full my-32">
                <Heading title="Санал, хүсэлт илгээх" subtitle="" />
                <div className="w-full p-16">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.container}>
                                <div className="w-full">
                                    <div className="flex flex-col my-2">
                                        <label htmlFor="name" className={styles.label}> Нэр</label>
                                        <input
                                            type="text"
                                            placeholder="Өөрийн бүтэн нэрээ оруулна уу!"
                                            className={styles.input}
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div className="flex flex-col my-2">
                                        <label htmlFor="phone" className={styles.label}> Утасны дугаар </label>
                                        <input
                                            type="number"
                                            placeholder="Өөрийн утасны дугаараа оруулна уу!"
                                            className={styles.input}
                                            {...register("phone", { required: true })}
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col my-2">
                                        <label htmlFor="email" className={styles.label}>Имэйл хаяг</label>
                                        <input
                                            type="email"
                                            placeholder="Имэйл хаягаа оруулна уу!"
                                            className={styles.input}
                                            {...register("email", { required: true })}
                                        />
                                    </div>
                                    <div className="flex flex-col my-2">
                                        <label htmlFor="subject" className={styles.label}>Имэйл хаяг</label>
                                        <input
                                            type="text"
                                            placeholder="Гарчиг оруулна уу!"
                                            className={styles.input}
                                            {...register("subject", { required: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label htmlFor="message" className={styles.label}>Нэмэлт мэдээлэл</label>
                                <textarea
                                    rows={4}
                                    placeholder="Нэмэлт мэдээлэл"
                                    className={styles.textarea}
                                    {...register("message", { required: false })}
                                ></textarea>
                            </div>
                        <div className="w-full">
                            <button className={styles.button}>
                                Илгээх
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HelloPage;
