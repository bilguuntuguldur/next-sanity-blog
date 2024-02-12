import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from 'nodemailer/lib/mailer';


export async function POST(request: NextRequest) {

    const { email, name, phone, subject, message, } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${email})`,
        html: `
        <head>
            <title>${subject}</title>
        </head>
        <div className="header-section"> 
            <h4>Дэлгэрэнгүй:</h4>
        </div>
        </br>
        </br>
        <ul style="list-style-type: none;">
            <li style="margin-bottom: 3px;">Бүтэн нэр: ${name}</li>
            <li style="margin-bottom: 3px;">Утасны дугаар: ${phone}</li>
            <li style="margin-bottom: 3px;">Мессеж: ${message}</li>
        </ul>
        `
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
            resolve('Амжилттай илгээлээ, бид тантай удахгүй холбогдох болно.');
            } else {
            reject(err.message);
            }
        });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Амжилттай илгээлээ, бид тантай удахгүй холбогдох болно.' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}
