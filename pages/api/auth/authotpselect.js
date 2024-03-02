import { sql, config } from '/config';

export default async (req, res) => {
  let { EnterOTP } = req.body;
  try {
    await sql.connect(config);
    let result;
    let result_1;
    if (EnterOTP !== "") {
      result = await sql.query`Select auth_otp from auth_otp_table where auth_otp=${EnterOTP}`;
      result_1 = await sql.query`
      DECLARE @ExpirationDate DATETIME = DATEADD(MINUTE, -3, GETDATE());
      SELECT
          CASE
              WHEN created_date >= @ExpirationDate THEN 'OTP is valid'
              ELSE 'OTP has expired'
          END AS otpStatus,
          @ExpirationDate AS ExpirationDate,
          GETDATE() AS CurrentDateTime,
          created_date
        FROM auth_otp_table where auth_otp = ${EnterOTP};
      `;
    } else {
      result = await sql.query`Select * from auth_otp_table`;
    }

    if (result.recordset.length !== 0) {
      let user = result.recordset;
      let otpVerifyMsg = result_1.recordset;
      res.status(200).json({ user, message: "OTP Verified", otpVerifyMsg });
    } else {
      res.status(200).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await sql.close();
  }
};
