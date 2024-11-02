import AminNulImage from '@/img/pagesImage/team/Aminul-Islam-.jpg'
import Najmul from '@/img/pagesImage/team/Nizhum-Photo-2.jpg'
import Afia from '@/img/pagesImage/team/Afia-photo-1.png'
import Image from 'next/image'

const BoardDirectorPage = () => {
  const data = [
    {
      name: 'Aminul Islam',
      position: 'Chairman',
      image: AminNulImage,
    },
    {
      name: 'NIZHUM RAHMAN',
      position: 'SECRETARY',
      image: Najmul,
    },
    {
      name: 'AFIA SUMI',
      position: 'TREASURER',
      image: Afia,
    },
  ]
  return (
    <main className="container">
      <h1 className="font-bold text-center mt-10 text-3xl">MEET THE TEAM</h1>
      <h1 className="font-bold text-center mt-5">BOARD OF DIRECTOR</h1>
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

export default BoardDirectorPage
