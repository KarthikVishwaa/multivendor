import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import SellerLoginForm from "./SellerLoginForm";
import SellerAccountForm from "./SellerAccountForm";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import { motion } from "framer-motion";

const BecomeSeller = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { sellerAuth } = useAppSelector((store) => store);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  useEffect(() => {
    if (sellerAuth.sellerCreated || sellerAuth.error || sellerAuth.otpSent) {
      setSnackbarOpen(true);
    }
  }, [sellerAuth.sellerCreated, sellerAuth.error, sellerAuth.otpSent]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50 flex justify-center items-center py-8 px-4">
      {/* Main Card Container with drop shadow */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Form Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white z-10"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 text-center">
            {isLoginPage ? "Seller Login" : "Create Seller Account"}
          </h1>

          <motion.div
            key={isLoginPage ? "login" : "register"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {isLoginPage ? <SellerLoginForm /> : <SellerAccountForm />}
          </motion.div>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-500 text-sm">
              {isLoginPage ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button
              onClick={() => setIsLoginPage(!isLoginPage)}
              fullWidth
              variant="outlined"
              sx={{
                py: "10px",
                borderRadius: "9999px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              {isLoginPage ? "Register" : "Login"}
            </Button>
          </div>
        </motion.section>

        {/* Right Banner Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 to-green-500 relative"
        >
          {/* Background Drop Shadow Layer */}
          <div className="absolute inset-0 bg-black/10 blur-2xl rounded-3xl -z-10"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white text-center">
            Join the Marketplace Revolution
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white text-center">
            Boost Your Sales Today
          </p>
          <img
            src="/seller.jpg"
            alt="Seller Banner"
            className="rounded-xl shadow-lg mx-auto max-h-60 md:max-h-80 object-cover"
          />
        </motion.section>

        {/* Snackbar Alerts */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={sellerAuth.error ? "error" : "success"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {sellerAuth.error
              ? sellerAuth.error
              : sellerAuth.sellerCreated
              ? sellerAuth.sellerCreated
              : "OTP sent to your email!"}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default BecomeSeller;
