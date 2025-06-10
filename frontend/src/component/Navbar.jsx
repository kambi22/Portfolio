import React, { useState } from "react"
import { Button, Container, Icon, IconButton } from '@mui/material'
import { FaGithub, FaLinkedin, FaPython, FaVoicemail } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Slogo from '../assets/Slogo.png'
import { motion } from 'framer-motion'
import { SidebarCompnent } from "./Sidebar";

export const Header = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }


  return (
    <div className="pt-10 ms-2 pe-2">
      <SidebarCompnent
        open={sidebarOpen}
        onClose={handleSidebar}
      />

      <Container className="flex text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg " >

        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>


        <div className="mt-2 flex">
          <img src={Slogo} alt="S logo"
            className="hover:rotate-180 transition-all duration-400 ease-in-out"
            style={{ height: '30px', width: '25px', pointerEvents: 'auto', cursor:'pointer'}} />

          <p
            className="text-2xl ms-1 hover:-translate-y-2.5 transition-all duration-300 ease-in-out"
            style={{ pointerEvents: 'auto', cursor:'pointer' }}
          >Satnam</p>

        </div>



        <nav className="hidden md:flex gap-10 me-3 text-white m-auto cursor-pointer">
          <a className=" hover-underline-animation center" href="#hero">Home</a>
          <a className=" hover-underline-animation center" href="#skills">Skills</a>
          <a className=" hover-underline-animation center" href="#projects">Projects</a>
          <a className=" hover-underline-animation center" href="#about">About</a>
          <motion.a
            className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
            initial={{ scaleX: 0 }}
            variants={{ hover: { scaleX: 1 } }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0.5 }} // Center the origin for scaling
          />
        </nav>


        <nav className="gap-5 mt-2 text-white ms-auto font-bold hidden md:flex">

          <a
            href="https://www.linkedin.com/in/satnam-singh-2771a4316/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 z-50 relative hover:-translate-y-2.5 transition-all duration-300 ease-in-out "
            style={{ pointerEvents: 'auto' }}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/kambi22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 z-50 relative hover:-translate-y-2.5 transition-all duration-300 ease-in-out"
            style={{ pointerEvents: 'auto' }}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:satnamkot8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 z-50 relative hover:-translate-y-2.5 transition-all duration-300 ease-in-out"
            style={{ pointerEvents: 'auto' }}
          >
            <MdEmail size={20} />
          </a>


        </nav>
        <div className="ms-auto block sm:hidden p-0">
          <IconButton className="cursor-pointer p-0" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MdOutlineMenuOpen size={30} color="white" />
          </IconButton>
        </div>

      </Container>

    </div>
  )
};