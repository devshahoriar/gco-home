import AminNulImage from '@/img/pagesImage/team/Aminul-Islam-.jpg'
import Shahin from '@/img/pagesImage/team/ExclusiveMember/shahi.jpg'
import Mashud from '@/img/pagesImage/team/ExclusiveMember/mashud.jpg'
import Shamim from '@/img/pagesImage/team/ExclusiveMember/Shamim.png'
import Image from 'next/image'

import Zihanur from '@/img/pagesImage/team/ExclusiveMember/jihanur.jpg'
import Kamrun from '@/img/pagesImage/team/ExclusiveMember/kamrun.png'
import Ozair from '@/img/pagesImage/team/ExclusiveMember/ozair.jpg'
import Samim from '@/img/pagesImage/team/ExclusiveMember/Shamim.png'
import May from '@/img/pagesImage/team/ExclusiveMember/may.png'

const ExclusiveMember = () => {
  const data = [
    {
      name: 'Aminul Islam',
      position: 'Chairman',
      image: AminNulImage,
    },
    {
      name: 'MD. SHAHINUR ISLAM',
      position: 'VICE PRESIDENT',
      image: Shahin,
    },
    {
      name: 'MD. MASUD RANA',
      position: 'SECRETARY GENERAL',
      image: Mashud,
    },
    {
      name: 'MD. SHAMIM ALI',
      position: 'JOINT SECRETARY',
      image: Shamim,
    },
    {
      name: 'ZIHANUR RAHMAN',
      position: 'FINANCE SECRETARY',
      image: Zihanur,
    },
    {
      name: 'MST.KAMRUN NAHER',
      position: 'ORGANIZING SECRETARY',
      image: Kamrun,
    },
    {
      name: 'OZAIR BIN OBAIDA',
      position: 'PUBLICATION SECRETARY',
      image: Ozair,
    }, {
      name: 'MST. SAMMI KHATUN',
      position: 'EXECUTIVE MEMBER',
      image: Samim,
    }, {
      name: 'MD. MAYMUR',
      position: 'EXECUTIVE MEMBER',
      image: May,
    }
  ]
  return (
    <main className="container">
      <h1 className="font-bold text-center mt-10 text-3xl">MEET THE TEAM</h1>
      <h1 className="font-bold text-center mt-5">EXECUTIVE MEMBER</h1>
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

export default ExclusiveMember
