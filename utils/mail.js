const nodemailer = require("nodemailer");

const emailAdvisor = "tsivaramakrishna3@gmail.com";
const EmailServerEmailID = "hackathon.cisco.g2@gmail.com";

function formatEmailBody(data) {
  return `
    <h1>Customer Case from ${data.name}</h1>
    <table width="500px">
      <tbody >
        <tr><td><b>Product</b></td><td>${data.product}<td></td></tr>
        <tr><td><b>Platform</b></td><td>${data.platform}</td></tr>
        <tr><td><b>Topic</b></td><td>${data.topic}</td></tr>
        <tr><td><b>Issue</b></td><td>${data.issue}</td></tr>
      </tbody>
    </table>
    <p><b>Comments:</b>&nbsp;&nbsp;${data.comments}</p>
    <p><b>Customer Email:</b>&nbsp;&nbsp;${data.email}</p>
  `;
}

function sendEmail(data) {
  const subject = `Customer Case`;
  const body = formatEmailBody(data);
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: EmailServerEmailID,
      to: emailAdvisor,
      subject,
      html: body
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: "true",
      port: "465",
      auth: {
        type: "OAuth2", //Authentication type
        user: EmailServerEmailID, //For example, xyz@gmail.com
        clientId:
          "208672574264-0ftn06fl0pvnite1joe18nudt97pv11f.apps.googleusercontent.com",
        clientSecret: "hMbpsnLXGijPZ9CM37AU1Txd",
        refreshToken: "1/nbWu3GwkXfJaCZXhg3V36Ix6cEJbYyeQOItH9OLj_Ek"
      }
    });

    transporter.sendMail(mailOptions, function(e, r) {
      if (e) {
        console.log(e);
        reject(e);
      } else {
        resolve(r);
      }
      transporter.close();
    });
  });
}

module.exports = {
  sendEmail
};
