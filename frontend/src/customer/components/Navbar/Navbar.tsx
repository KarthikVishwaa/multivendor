import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { mainCategory } from "../../../data/category/mainCategory";
import CategorySheet from "./CategorySheet";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const dispatch = useAppDispatch();
  const { user, cart, sellers } = useAppSelector((store) => store);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const becomeSellerClick = () => {
    if (sellers.profile?._id) navigate("/seller");
    else navigate("/become-seller");
  };

  return (
    <Box
      sx={{
        zIndex: 2,
        backdropFilter: "blur(10px)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(240,255,252,0.95) 100%)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease-in-out",
      }}
      className="sticky top-0 left-0 right-0"
    >
      {/* ===== Top Navbar ===== */}
      <div
        className={`flex items-center justify-between px-4 md:px-10 ${
          isLarge ? "h-[65px]" : "h-[55px]"
        }`}
      >
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2 sm:gap-3">
          {!isLarge && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon className="text-gray-700" sx={{ fontSize: 24 }} />
            </IconButton>
          )}
          <motion.h1
            whileHover={isLarge ? { scale: 1.05 } : {}}
            onClick={() => navigate("/")}
            className="logo cursor-pointer text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00c9a7] to-[#00796b]"
          >
            Zosh Bazaar
          </motion.h1>
        </div>

        {/* CENTER (Desktop Categories) */}
        {isLarge && (
          <ul className="flex items-center font-medium text-gray-800 gap-3">
            {mainCategory.map((item) => (
              <motion.li
                key={item.categoryId}
                onMouseLeave={() => setShowSheet(false)}
                onMouseEnter={() => {
                  setSelectedCategory(item.categoryId);
                  setShowSheet(true);
                }}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer px-4 h-[70px] flex items-center transition-all duration-300"
              >
                <span className="hover:text-[#00927c]">{item.name}</span>
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00927c]"
                  initial={false}
                  animate={{
                    opacity: selectedCategory === item.categoryId ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        )}

        {/* RIGHT SECTION */}
        <div className="flex gap-1 sm:gap-3 items-center">
          {/* Search */}
          <IconButton onClick={() => navigate("/search-products")}>
            <SearchIcon
              className="text-gray-700"
              sx={{ fontSize: isLarge ? 26 : 22 }}
            />
          </IconButton>

          {/* Cart */}
          <IconButton onClick={() => navigate("/cart")}>
            <Badge
              badgeContent={cart.cart?.cartItems.length}
              color="primary"
            >
              <AddShoppingCartIcon
                sx={{ fontSize: isLarge ? 26 : 22 }}
                className="text-gray-700"
              />
            </Badge>
          </IconButton>

          {/* User/Login */}
          {!isLarge && (
            <Button
              onClick={() => navigate("/login")}
              variant="contained"
              sx={{
                minWidth: "36px",
                height: "36px",
                padding: 0,
                borderRadius: "50%",
                background: "linear-gradient(90deg,#00927c,#00bfa5)",
                "&:hover": { background: "linear-gradient(90deg,#00bfa5,#00927c)" },
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 20 }} />
            </Button>
          )}

          {/* Become Seller (Desktop Only) */}
          {isLarge && (
            <Button
              onClick={becomeSellerClick}
              startIcon={<StorefrontIcon />}
              variant="outlined"
              sx={{
                borderColor: "#00927c",
                color: "#00927c",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#00927c",
                  color: "white",
                  boxShadow: "0 0 10px rgba(0, 146, 124, 0.4)",
                },
              }}
            >
              Become Seller
            </Button>
          )}
        </div>
      </div>

      {/* ===== Mobile Drawer ===== */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: "80%", backgroundColor: "#f8fffd" },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-2">
            <h2
              className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00c9a7] to-[#00796b] cursor-pointer"
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
            >
              Zosh Bazaar
            </h2>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                backgroundColor: "rgba(0,0,0,0.05)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
              }}
            >
              <CloseIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </div>

          <Divider sx={{ mb: 2 }} />

          {/* USER INFO */}
          <Box className="flex items-center gap-3 mb-3">
            {user.user ? (
              <>
                <Avatar
                  src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
                  sx={{ border: "2px solid #00bfa5" }}
                />
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {user.user?.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">{user.user?.email}</p>
                </div>
              </>
            ) : (
              <Button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
                variant="contained"
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #00927c 0%, #00bfa5 100%)",
                  textTransform: "none",
                }}
                startIcon={<AccountCircleIcon />}
              >
                Login / Sign Up
              </Button>
            )}
          </Box>

          <Divider />

          {/* NAV LINKS */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <HomeIcon sx={{ color: "#00927c" }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/wishlist");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <FavoriteBorderIcon sx={{ color: "#00927c" }} />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/cart");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <AddShoppingCartIcon sx={{ color: "#00927c" }} />
                </ListItemIcon>
                <ListItemText
                  primary={`Cart (${cart.cart?.cartItems.length || 0})`}
                />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            {/* CATEGORY SECTION */}
            <ListItem>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "#00927c" }} />
              </ListItemIcon>
              <ListItemText primary="Shop by Category" />
            </ListItem>

            {mainCategory.map((item) => (
              <ListItemButton
                key={item.categoryId}
                sx={{ pl: 6 }}
                onClick={() => {
                  navigate(`/category/${item.categoryId}`);
                  setOpen(false);
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}

            <Divider sx={{ my: 1 }} />

            {/* SELLER SECTION */}
            <ListItemButton
              onClick={() => {
                becomeSellerClick();
                setOpen(false);
              }}
            >
              <ListItemIcon>
                <StorefrontIcon sx={{ color: "#00927c" }} />
              </ListItemIcon>
              <ListItemText primary="Become a Seller" />
            </ListItemButton>

            {user.user && (
              <ListItemButton
                onClick={() => {
                  // handle logout logic
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#e57373" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>

      {/* Hover category sheet for desktop */}
      {showSheet && selectedCategory && (
        <div
          onMouseLeave={() => setShowSheet(false)}
          onMouseEnter={() => setShowSheet(true)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20"
        >
          <CategorySheet
            setShowSheet={setShowSheet}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
