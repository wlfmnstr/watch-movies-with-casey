const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export async function handler(event, context) {
  const { phoneNumber, note } = JSON.parse(event.body);
  console.log(phoneNumber, note);
  client.messages
    .create({
      body: note,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    })
    .then(msg => {
      console.log(`Message sent!: ${msg}`)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Message sent successfully' })
      }
    })
    .catch(error => {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error sending message' })
      }
    });
}