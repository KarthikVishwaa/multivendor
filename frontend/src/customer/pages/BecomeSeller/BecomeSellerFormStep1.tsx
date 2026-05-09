import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import OTPInput from "../../components/OtpFild/OTPInput";

const BecomeSellerFormStep1 = ({ formik, handleOtpChange }: any) => {
  const handleResendOTP = () => {
    console.log("Resend OTP clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="p-4 md:p-8 bg-white shadow-lg rounded-2xl w-full md:max-w-md mx-auto">
        <Typography
          variant="h5"
          className="font-extrabold text-center text-gray-800 mb-6"
        >
          Contact Details
        </Typography>

        <div className="space-y-6">
          {/* Mobile Number */}
          <TextField
            fullWidth
            name="mobile"
            label="Mobile Number"
            variant="outlined"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />

          {/* GSTIN Number */}
          <TextField
            fullWidth
            name="GSTIN"
            label="GSTIN Number"
            variant="outlined"
            value={formik.values.GSTIN}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
            helperText={formik.touched.GSTIN && formik.errors.GSTIN}
          />

          {/* OTP Section */}
          {/* Uncomment when OTP functionality is ready */}
          {/*
          <div className="space-y-2">
            <Typography variant="body2" className="text-gray-600">
              * Enter OTP sent to your mobile number
            </Typography>
            <OTPInput length={6} onChange={handleOtpChange} error={false} />
            <Typography variant="caption" className="text-gray-500">
              Didn’t receive OTP?{" "}
              <span
                onClick={handleResendOTP}
                className="text-teal-600 cursor-pointer font-semibold hover:text-teal-800"
              >
                Resend OTP
              </span>
            </Typography>
          </div>
          */}
        </div>
      </Box>
    </motion.div>
  );
};

export default BecomeSellerFormStep1;
