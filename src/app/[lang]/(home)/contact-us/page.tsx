import Logo from '@/components/shared/Logo'
import { cn } from '@/lib/utils'
import { Facebook, Mail, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ContactUsPage = () => {
  return (
    <section>
      <div className="overflow-hidden h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px] relative flex items-center justify-center">
        <Image
          alt="dd"
          src="/img/contact/bg.jpg"
          height={1000}
          width={1920}
          className="absolute h-full w-full top-0 bottom-0 left-0 ring-0 object-cover"
        />
        <div className="z-10 text-center">
          <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl xl:text-8xl uppercase">
            Contact Us
          </h1>
          <p className="md:text-2xl font-semibold">
            Have a question? Want to learn more about what we do?
          </p>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center py-3 gap-3 w-full border-b dark:border-b-zinc-400">
          <SocialIcon
            className="hover:bg-blue-500"
            href="https://www.facebook.com/GlobalCommunityOrganization"
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            className="hover:bg-blue-700"
            href="https://x.com/Global_Com_Org"
          >
            <Twitter />
          </SocialIcon>
          <SocialIcon
            className="hover:bg-primary"
            href="mailto:hello@globalcommunityorganization.org"
          >
            <Mail />
          </SocialIcon>
          <SocialIcon
            className="hover:bg-red-600"
            href="https://youtube.com/@globalcommunityorganization?si=4emJ0AAcpVYRhpkZ"
          >
            <Youtube />
          </SocialIcon>
        </div>
        <div className="mt-10 flex">
          <div className="w-1/2 px-5">
            <div className="p-5">
              <h1 className="text-xl font-semibold uppercase">Get In Touch</h1>
              <p className="mt-4 font-light">
                We appreciate your interest in our organization and would love
                to hear from you! Please fill out the contact form, and we will
                aim to get back to you in one business day.
              </p>

              <h1 className="text-xl font-semibold uppercase mt-10">Call Us</h1>
              <p className="mt-4 font-light">
                For immediate assistance, call our office at <b>+8801760870070</b>. Our
                office hours are Saturday - <b>Thursday, 9 AM - 6 PM</b> ET.
              </p>

              <p className="mt-10 font-light">
                Global Community Organization (GCO)
                <br />
                Bagha, Rajshahi
                <br />
                Bangladesh
              </p>
              <Logo className="w-[300px]" />
            </div>
          </div>
          <div className="w-1/2">
            <div>ss</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <a
      href={href}
      className={cn(
        'rounded-full bg-black bg-opacity-10 dark:bg-opacity-40 hover:bg-opacity-100 hover:text-white dark:hover:text-white p-[6px] transition-colors duration-500',
        className
      )}
    >
      {children}
    </a>
  )
}

export default ContactUsPage
