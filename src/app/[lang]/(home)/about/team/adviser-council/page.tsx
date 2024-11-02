import AminNulImage from '@/img/pagesImage/team/amin.jpg'
import Najmul from '@/img/pagesImage/team/kh.jpg'
import Afia from '@/img/pagesImage/team/mir.jpg'
import Image from 'next/image'

const BoardDirectorPage = () => {
  const data = [
    {
      name: 'AMIN UDDIN MRIDHA',
      position: 'CHIEF ADVISER',
      image: AminNulImage,
    },
    {
      name: 'KH MALEK',
      position: 'ADVISER',
      image: Najmul,
    },
    {
      name: 'MIR SHOWKAT ALI',
      position: 'ADVISER',
      image: Afia,
    },
  ]
  return (
    <main className="container">
      <h1 className="font-bold text-center mt-10 text-3xl">MEET THE TEAM</h1>
      <h1 className="font-bold text-center mt-5">ADVISER COUNCIL</h1>
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
