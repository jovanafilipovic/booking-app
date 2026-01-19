const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jovana.fil.1998@gmail.com",
    pass: "Sportskiobjekti1.",
  },
});

const sendConfirmationEmail = (user, reservationDetails) => {
  const mailOptions = {
    from: "jovana.fil.1998@gmail.com",
    to: user,
    subject: "Potvrda rezervacije",
    html: `
      <html>
        <head>
          <style>
            /* Ovde možete definisati svoj CSS za email */
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #007bff;
              color: #ffffff;
              padding: 10px;
              text-align: center;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            }
            .content {
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Potvrda rezervacije</h2>
            </div>
            <div class="content">
              <p>Poštovani,</p>
              <p>Hvala Vam na rezervaciji. Ovde su detalji Vaše rezervacije:</p>
              <ul>
                <li><strong>Objekat:</strong> ${reservationDetails.court}</li>
                <li><strong>Adresa:</strong> ${reservationDetails.address}</li>
                <li><strong>Datum:</strong> ${reservationDetails.date}</li>
                <li><strong>Vreme:</strong> ${reservationDetails.time}</li>
              </ul>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error while sending email:", error);
    }
    console.log("Email sent:", info.response);
  });
};

exports.sendConfirmationEmail = sendConfirmationEmail;
