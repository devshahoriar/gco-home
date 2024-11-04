/* eslint-disable react/no-unescaped-entities */
import hillImage from '@/img/pagesImage/gcoWing/hils_tree.jpg'
import Image from 'next/image'
import selectImage from '@/img/pagesImage/gcoWing/select-a-project.png'
import projectAnalisis from '@/img/pagesImage/gcoWing/project-analysis.png'
import deliverResult from '@/img/pagesImage/gcoWing/deliver-result.png'

const GcoWing = () => {
  return (
    <main>
      <div className="text-center relative h-[300px] md:h-[400px] xl:h-[500px] flex items-center justify-center">
        <div className="z-10 relative mx-10">
          <h1 className="text-3xl font-bold md:text-5xl">TREE AMBASSADORS</h1>
          <p className="mt-3 font-light md:">
            Become a Tree ambassadors to an impact in your local community
          </p>
        </div>
        <Image
          width={1920}
          height={1080}
          src={hillImage}
          alt="Hill with trees"
          className="absolute top-0 left-0 right-0 bottom-0 z-0 brightness-50 object-cover size-full object-top"
        />
      </div>
      <div className="container mt-10">
        <h1 className="text-center text-2xl font-bold">
          Who is a Tree Ambassador?
        </h1>
        <div className="flex justify-center">
          <p className="text-center mx-4 max-w-[800px] font-light mt-5">
            Making an impact isn't about one person taking one big action, it's
            about a community of like-minded people coming together and taking
            small actions every day. Tree Ambassadors are passionate
            environmental stewards who want to represent One Tree for One Child
            — and aren't afraid to get their hands in the dirt to make an impact
            at work, at home, or at school. Together, we are building a
            community of tree-lovers around the world who are doing their part,
            one tree at a time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-10 items-center">
          {GCOWINGDATA.map((data, index) => (
            <div
              key={index}
              className="p-5 flex flex-col items-center w-[400px]"
            >
              <Image src={data.img} alt={data.title} width={130} height={130} />
              <h1 className="text-xl font-bold mt-5">{data.title}</h1>
              <p className="text-center font-light mt-3">{data.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h1 className="text-center text-4xl font-bold text-primary">
            APPLICATION PROCESS
          </h1>
          <div className="my-10">
            <div className='flex flex-col items-center'>
              {GCOWINGAPPLICATIONPROCESS.map((data, index) => (
                <div key={index} className="flex items-center mt-5 max-w-[700px]">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white">
                    {index + 1}
                  </div>
                  <p className="ml-5 w-full">{data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const GCOWINGDATA = [
  {
    title: 'Select A Project',
    desc: 'You enjoy connecting with people in your local community (and around the world!) to share ideas, motivation, and solutions.',
    img: selectImage,
  },
  {
    title: 'Project Analysis',
    desc: 'You are interested in using your unique skills and interests to drive action and create change in your community.',
    img: projectAnalisis,
  },
  {
    title: 'Deliver Result',
    desc: 'You love spending time in nature and feel passionate about doing what you can to benefit your local environment.',
    img: deliverResult,
  },
]

const GCOWINGAPPLICATIONPROCESS = [
  "You fill out the application form below. Don't worry - it takes less than one minute to complete!",
  "Someone from our team will review your application and you'll hear back in less than 24 hours time.",
  "Once accepted, you join our program where you'll be invited to learn, fundraise, volunteer & share through a personalized program.",
]

export default GcoWing
