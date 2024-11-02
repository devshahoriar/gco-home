import AminNulImage from '@/img/pagesImage/team/Aminul-Islam-.jpg'
import Mashud from '@/img/pagesImage/team/ExclusiveMember/mashud.jpg'
import Image from 'next/image'
import Af from '@/img/pagesImage/team/tagyExclusive/af.jpg'
import bad from '@/img/pagesImage/team/tagyExclusive/bad.png'
import rof from '@/img/pagesImage/team/tagyExclusive/rof.png'

const TYAGI_EXECUTIVE = () => {
  const data = [
    {
      name: 'Aminul Islam',
      position: 'PRESIDENT',
      image: AminNulImage,
    },
    {
      name: 'MD. MASUD RANA',
      position: 'VICE PRESIDENT',
      image: Mashud,
    },
    {
      name: 'AFTABUL ALOM RAIHAN',
      position: 'VICE PRESIDENT',
      image: Af,
    },
    {
      name: 'MAHFUZ KARIM BADHON',
      position: 'VICE PRESIDENT',
      image: bad,
    },
    {
      name: 'ABDUR ROUF KHAN',
      position: 'GENAREL SECRETARY',
      image: rof,
    },
    {
      name: 'MD. MAYMUR',
      position: 'JOINT GENAREL SECRETARY',
      image: require('@/img/pagesImage/team/tagyExclusive/my.png').default,
    },
    {
      name: 'MD MAHFUZ AHMED',
      position: 'JOINT GENAREL SECRETARY',
      image: require('@/img/pagesImage/team/tagyExclusive/2.png').default,
    }
    ,
    {
      name: 'MD ZUBAER AMIN',
      position: 'ORGANIZING SECRETARY',
      image: require('@/img/pagesImage/team/tagyExclusive/zub.jpg').default,
    },
    {
      name: 'ZIHANUR RAHMAN',
      position: 'FINANCE SECRETARY',
      image: require('@/img/pagesImage/team/tagyExclusive/zi.jpg').default,
    },
    {
      name: 'MD RABBY',
      position: 'PUBLICATION SECRETARY',
      image: require('@/img/pagesImage/team/tagyExclusive/rab.jpg').default,
    },
    {
      name: 'MST. TONIMA ISLAM',
      position: 'EXECUTIVE MEMBER',
      image: require('@/img/pagesImage/team/tagyExclusive/toni.jpg').default,
    },
    {
      name: 'MD. SHADIN',
      position: 'EXECUTIVE MEMBER',
      image: require('@/img/pagesImage/team/tagyExclusive/sha.png').default,
    }
    
  ]
  return (
    <main className="container">
      <h1 className="font-bold text-center mt-10 text-3xl">MEET THE TEAM</h1>
      <h1 className="font-bold text-center mt-5">TYAGI EXECUTIVE</h1>
      <div className="sm:max-w-[900px] sm:mx-auto mx-5">
        <div className="flex gap-5 flex-wrap mt-5 mb-10 justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-primary md:w-[calc(33.33%-20px)] sm:w-[calc(50%-20px)] w-full rounded-sm"
            >
              <div className="flex justify-center items-center flex-col mt-10">
                <Image
                  alt="aminul"
                  src={item.image}
                  className="rounded-full size-[60%]"
                />
                <h1 className="font-bold text-xl mt-2 text-white">
                  {item.name}
                </h1>
                <p className="font-bold text-white">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default TYAGI_EXECUTIVE
