import { Handler, HandlerEvent,HandlerContext } from "@netlify/functions";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log("Hello outside function!")

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    console.log('hello world')
    const client = new Twilio(accountSid, authToken)
    const { phoneNumber, note } = JSON.parse(event.body!);
    const msgContent = `Phone: ${phoneNumber} sent note: ${note}`
    console.log(phoneNumber, note);
    try {
        const msg = await client.messages.create({
            body: msgContent,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: "15074595514"
        });
        console.log(`Message sent!: ${msg.body} `);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully' })
        };
    } catch (error) {
        console.error("Error sending message: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending message' })
        };
    }
};

export { handler };
