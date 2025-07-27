export const otpTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
  <style>
    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #fffbea;
      margin: 0;
      padding: 0;
      color: #1a202c;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 2px solid #fde68a;
      box-shadow: 0 8px 20px rgba(250, 204, 21, 0.2);
    }
    .header {
      background: linear-gradient(135deg, #facc15, #fbbf24);
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      color: #1f2937;
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .content {
      padding: 40px;
    }
    .otp-container {
      margin: 30px 0;
      text-align: center;
    }
    .otp-digits {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin: 20px 0;
    }
    .otp-digit {
      width: 60px;
      height: 80px;
      background: #fef3c7;
      border-radius: 10px;
      border: 2px solid #facc15;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: bold;
      color: #1e293b;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
    .expiry-note {
      color: #9ca3af;
      font-size: 14px;
      text-align: center;
      margin-top: 10px;
    }
    .footer {
      padding: 20px;
      text-align: center;
      background-color: #fefce8;
      color: #9ca3af;
      font-size: 12px;
    }
    .divider {
      height: 1px;
      background-color: #fde68a;
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Email Verification</h1>
    </div>
    <div class="content">
      <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">Hello,</p>
      <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
        Please use the following verification code to confirm your email address:
      </p>

      <div class="otp-container">
        <div class="otp-digits">
          ${otp.split('').map(digit => `
            <div class="otp-digit">${digit}</div>
          `).join('')}
        </div>
        <p class="expiry-note">This code will expire in 10 minutes.</p>
      </div>

      <div class="divider"></div>

      <p style="font-size: 14px; line-height: 1.6; color: #64748b;">
        If you didn’t request this code, you can safely ignore this email. 
        Someone might have entered your email address by mistake.
      </p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} TOPICC. All rights reserved.</p>
      <p>Egypt, Online Services</p>
    </div>
  </div>
</body>
</html>
`;
