<<<<<<< HEAD
=======
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

>>>>>>> master
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
<<<<<<< HEAD
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};


export const sendMail = email => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWORD
        }
    };
    const client = nodemailer.createTransport(sgTransport(options));
    return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
    const email = {
        from: "daniel@ceight.io",
        to: address,
        subject: "🔒Login Secret for Prismagram🔒",
        html: `Hello! Your login secret is <strong>${secret}</strong>.<br>Copy paste on the app/web to login.`
    };
    return sendMail(email);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
=======
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};


const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "daniel@prismagram.io", 
    to: address,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello! Your login secret is <strong>${secret}</strong>.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
>>>>>>> master
