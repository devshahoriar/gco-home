import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import Logo from './Logo'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ShoppingBag,
  User,
  Youtube,
} from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <section className="bg-bgMain text-white">
      <MobileFooter />
      <DesktopFooter />
      <BootomBar />
    </section>
  )
}

const MobileFooter = () => {
  return (
    <footer className="md:hidden container px-3">
      <div>
        <div className="flex justify-center pt-5">
          <Logo className="!w-[350px]" />
        </div>
        <div>
          <div className="flex flex-col justify-center w-full items-center gap-4">
            <div>
              <h1 className="uppercase text-lg">Authorized BY</h1>
            </div>
            <div className="flex gap-3">
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/NGO-Affairs-Bureau-1.png"
                alt="gvt"
              />
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/Social-Service-logo.jpg"
                alt="gct2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center gap-4 mt-5">
            <div>
              <h1 className="uppercase text-lg">Vetted BY</h1>
            </div>
            <div className="flex gap-3">
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/2024_Pathway-Vetted-Badge-768x710.png"
                alt="gvt"
              />
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/European_Commission.svg.png"
                alt="gct2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center gap-4 mt-5">
            <div>
              <h1 className="uppercase text-lg">Planting Partner</h1>
            </div>
            <div className="flex gap-3">
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/elementor/thumbs/OTP-e1704813735137-qi2983g0nym3xzxqm7zf7d6mwv4sidl9oirdxl1b9y.webp"
                alt="gvt"
              />
              <img
                className="w-[100px] rounded-md aspect-square object-cover"
                src="https://globalcommunityorganization.org/wp-content/uploads/2023/12/GN-Logo-JPEG.jpg"
                alt="gct2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center ">
          <Accordion type="single" collapsible className="w-[80%]">
            <AccordionItem className="border-b border-slate-600" value="item-1">
              <AccordionTrigger className="text-lg !no-underline">
                About Us
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <Link href="#">Mission and Vision</Link>
                  <Link href="#">History of GCO</Link>
                  <Link href="#">Meet The Team</Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-slate-600" value="item-2">
              <AccordionTrigger className="text-lg !no-underline">
                Contract US
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Global Community Organization South Milik Bagha Bagha-6280,
                    Bagha, Rajshahi, Bangladesh
                  </p>
                  <p>hello@globalcommunityorganization.org</p>
                  <p>Mobile: +8801760870070</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-slate-600" value="item-3">
              <AccordionTrigger className="text-lg !no-underline">
                TAX ID #463673947101
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    GCO is a tax-exempt organization & your donation is
                    tax-deductible within the guidelines of B.D law.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-slate-600" value="item-4">
              <AccordionTrigger className="text-lg !no-underline">
                FINANCIALS
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <Link href="#">2023 Audit Report</Link>
                  <Link href="#">2022 Audit Report</Link>
                  <Link href="#">2021 Audit Report</Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b border-slate-600" value="item-5">
              <AccordionTrigger className="text-lg !no-underline">
                Social Link
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center justify-center topsocial gap-4 [&>*]:text-white [&>a>svg]:size-5 ml-2 ">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="my-10 flex flex-col gap-3  items-center">
          <input
            className="w-[80%] rounded-[5px] py-2 px-2 text-black"
            type="text"
            placeholder="Enter your first name"
          />
          <input
            className="w-[80%] rounded-[5px] py-2 px-2 text-black"
            type="text"
            placeholder="Enter your email"
          />
          <button className="w-[80%] rounded-[5px] py-2 bg-main2">
            Sign up
          </button>
        </div>
      </div>
    </footer>
  )
}

const DesktopFooter = () => {
  return (
    <footer className="hidden md:block">
      <div className="container">
        <div className="flex justify-between gap-3">
          <div className="w-[calc(20%-10px)]">
            <div>
              <Logo />
            </div>

            <div className="flex flex-col  w-full gap-4">
              <div>
                <h1 className="uppercase text-base font-semibold">
                  Authorized BY
                </h1>
              </div>
              <div className="flex gap-3">
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/NGO-Affairs-Bureau-1.png"
                  alt="gvt"
                />
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/2023/02/Social-Service-logo.jpg"
                  alt="gct2"
                />
              </div>
            </div>

            <div className="flex flex-col w-full  gap-4 mt-5">
              <div>
                <h1 className="uppercase text-base font-semibold">Vetted BY</h1>
              </div>
              <div className="flex gap-3">
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/2024_Pathway-Vetted-Badge-768x710.png"
                  alt="gvt"
                />
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/2023/10/European_Commission.svg.png"
                  alt="gct2"
                />
              </div>
            </div>
          </div>
          <div className="w-[calc(20%-10px)]">
            <div className="flex flex-col w-full gap-4 mt-5">
              <div>
                <h1 className="uppercase text-base font-semibold">
                  Planting Partner
                </h1>
              </div>
              <div className="flex gap-3">
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/elementor/thumbs/OTP-e1704813735137-qi2983g0nym3xzxqm7zf7d6mwv4sidl9oirdxl1b9y.webp"
                  alt="gvt"
                />
                <img
                  className="w-[80px] rounded-md aspect-square object-cover"
                  src="https://globalcommunityorganization.org/wp-content/uploads/2023/12/GN-Logo-JPEG.jpg"
                  alt="gct2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <h1 className="text-lg font-semibold uppercase">About Us</h1>
              <Link className="mt-3" href="#">
                Mission and Vision
              </Link>
              <Link href="#">History of GCO</Link>
              <Link href="#">Meet The Team</Link>
            </div>
          </div>
          <div className="w-[calc(20%-10px)]">
            <div>
              <h1 className="mt-5 mb-3 text-lg font-semibold uppercase">Contract US</h1>
              <p>
                Global Community Organization South Milik Bagha Bagha-6280,
                Bagha, Rajshahi, Bangladesh
              </p>
              <p className="break-words">
                hello@globalcommunityorganization.org
              </p>
              <p>Mobile: +8801760870070</p>
            </div>
            <div className="flex items-center  topsocial gap-3 [&>*]:text-white [&>a>svg]:size-4  mt-5 ">
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
          </div>
          <div className="w-[calc(20%-10px)]">
            <div>
              <h1 className="mt-5 mb-3 text-lg font-semibold">
                TAX ID #463673947101
              </h1>
              <p>
                GCO is a tax-exempt organization & your donation is
                tax-deductible within the guidelines of B.D law.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="mt-5 mb-3 text-lg font-semibold">FINANCIALS</h1>
              <Link href="#">2023 Audit Report</Link>
              <Link href="#">2022 Audit Report</Link>
              <Link href="#">2021 Audit Report</Link>
            </div>
          </div>
          <div className="w-[calc(20%-10px)]">
            <h1 className="text-lg font-semibold mt-5">NEWSLETTER SIGNUP</h1>
            <div className="my-3 flex flex-col gap-3  items-center">
              <input
                className="w-[100%] rounded-[5px] py-2 px-2 text-black"
                type="text"
                placeholder="Enter your first name"
              />
              <input
                className="w-[100%] rounded-[5px] py-2 px-2 text-black"
                type="text"
                placeholder="Enter your email"
              />
              <button className="w-[100%] rounded-[5px] py-2 bg-main2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const BootomBar = () => {
  return (
    <div className="container flex justify-around items-center  flex-col-reverse lg:flex-row py-5 gap-3 lg:gap-0">
      <p>©2023 GCO all rights are reserved.</p>
      <img className='object-cover h-10' src="/payment.png" alt="payment" />
    </div>
  )
}

export default Footer
