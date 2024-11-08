'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ShoppingBag,
  User,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

const TopBar = () => {
  return (
    <section className="bg-main2 hidden md:block">
      <div className="container flex justify-between h-10 items-center">
        <div className="flex items-center text-white gap-5 text-xs uppercase">
          <div className="flex items-center topsocial gap-4 [&>*]:text-white [&>a>svg]:size-4 ml-2 ">
            <a href="#">
              <Mail />
            </a>
         
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>

            <a href="#">
              <Youtube />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
          <p className="">+88017********</p>
          <Link href="#">Contact Us</Link>
          <Link href="#">Newslater</Link>
        </div>
        <div className="flex gap-3 items-center text-white uppercase text-sm">
          <Link
            href="#"
            className="bg-white  text-bgMain h-10 px-3 flex items-center hover:bg-bgMain hover:text-white"
          >
            Donate
          </Link>
          <Link
            className=" h-10 px-1 flex items-center gap-2 hover:text-black"
            href="#"
          >
            <User className="size-4" />
            Login
          </Link>
          <button
            className="flex gap-1
           items-center bg-white  text-bgMain hover:bg-bgMain hover:text-white h-10 px-2"
          >
            <ShoppingBag className="size-5" />0
          </button>
        </div>
      </div>
    </section>
  )
}
export default TopBar
