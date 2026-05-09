import React, { useState } from 'react'
import Banner from './Banner/Banner'
import HomeCategory from './HomeCategory/HomeCategory'
import TopBrand from './TopBrands/Grid'
import ElectronicCategory from './Electronic Category/ElectronicCategory'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Backdrop, Button, CircularProgress } from '@mui/material'
import ChatBot from '../ChatBot/ChatBot'
import { useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealSlider from './Deals/Deals'
import { motion } from 'framer-motion'

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false)
  const { homePage } = useAppSelector(store => store)
  const navigate = useNavigate()

  const handleShowChatBot = () => setShowChatBot(!showChatBot)
  const handleCloseChatBot = () => setShowChatBot(false)
  const becomeSellerClick = () => navigate("/become-seller")

  return (
    <>
      {!homePage.loading ? (
        <div className="space-y-16 lg:space-y-28 relative bg-gradient-to-b from-white via-[#f9f9f9] to-[#eaf7f4] overflow-hidden font-sans">
          
          {/* Main Banner */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Banner />
          </motion.div>

          {/* Electronic Categories */}
          {homePage.homePageData?.electricCategories && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-5 lg:px-20"
            >
              <ElectronicCategory />
            </motion.section>
          )}
                    {/* Today's Deals */}
          {homePage.homePageData?.deals && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-10 text-center px-5 lg:px-20"
            >
              <h1 className="text-2xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#e53935] to-[#ff6f61] text-transparent bg-clip-text pb-5 lg:pb-10">
                Today’s Deals
              </h1>
              <DealSlider />
            </motion.section>
          )}

          {/* Top Brands */}
          {homePage.homePageData?.grid && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-5 lg:px-20"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                Top Brands
              </h2>
              <TopBrand />
            </motion.section>
          )}



          {/* Shop by Category */}
          {homePage.homePageData?.shopByCategories && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center py-20 px-5 lg:px-20 bg-gradient-to-r from-[#f2fffc] via-[#ffffff] to-[#e9f7f3] rounded-3xl shadow-inner"
            >
              <h1 className="text-2xl lg:text-5xl font-extrabold text-[#00927c] pb-10 tracking-tight">
                Shop by Category
              </h1>
              <HomeCategory />
            </motion.section>
          )}

          {/* Seller Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:px-20 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-full object-cover brightness-75 rounded-3xl"
              src="/seller_banner_image.jpg"
              alt="Seller Banner"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-40 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
              >
                Sell Your Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl mt-2"
              >
                With <strong className="logo text-2xl sm:text-3xl md:text-4xl pl-2 text-[#00e6c3]">Zosh Bazaar</strong>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <Button
                  onClick={becomeSellerClick}
                  startIcon={<StorefrontIcon />}
                  variant="contained"
                  sx={{
                    borderRadius: "9999px",
                    background: "linear-gradient(90deg,#00927c,#00c4a7)",
                    padding: "0.8rem 2rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  Become Seller
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Chat Bot Floating Button */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50"
          >
            {showChatBot ? (
              <ChatBot handleClose={handleCloseChatBot} />
            ) : (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  onClick={handleShowChatBot}
                  sx={{
                    borderRadius: "50%",
                    height: "4rem",
                    width: "4rem",
                    background: "linear-gradient(135deg, #00927c 0%, #00c4a7 100%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                  variant="contained"
                >
                  <ChatBubbleIcon sx={{ color: "white", fontSize: "1.8rem" }} />
                </Button>
              </motion.div>
            )}
          </motion.section>
        </div>
      ) : (
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  )
}

export default Home
