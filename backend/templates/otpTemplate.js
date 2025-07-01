export const otpTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f7fafc;
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
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            color: white;
            margin: 0;
            font-size: 28px;
            font-weight: 600;
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
            background: #f8fafc;
            border-radius: 8px;
            border: 2px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            font-weight: 700;
            color: #1e293b;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        .expiry-note {
            color: #64748b;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
        }
        .footer {
            padding: 20px;
            text-align: center;
            background-color: #f8fafc;
            color: #64748b;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background: #4f46e5;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            margin-top: 20px;
        }
        .divider {
            height: 1px;
            background-color: #e2e8f0;
            margin: 30px 0;
        }
        .logo {
            max-width: 180px;
            margin-bottom: 20px;
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
            <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">Please use the following verification code to confirm your email address:</p>
            
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
                If you didn't request this code, you can safely ignore this email. 
                Someone might have entered your email address by mistake.
            </p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>123 Business Rd, Suite 100, City, Country</p>
        </div>
    </div>
</body>
</html>
`;