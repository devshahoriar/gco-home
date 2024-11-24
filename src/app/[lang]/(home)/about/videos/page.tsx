const vidioIds = [
  't8-Yj2Yo7P0',
  'jXJ2kW8YGn4',
  'MeYhuuJTlhg',
  'loSwWHPEPOM',
  'DtJz6qBTrOc',
  '-XlGe8oLUWA',
  'gxedybk_aOs',
  'eRkydr7GQKQ',
  'aVJaQQFOgOo',
  'kwnuGSUMMDc'

]



const VideosPage = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl md:text-3xl py-5 bg-primary text-white">
        Videos
      </h1>
      <main className="container mt-8">
        <div className="flex flex-wrap  p-5 bg-black bg-opacity-5 m-4 rounded-[8px]">
          {vidioIds.map((id, index) => (
            <div key={index} className="w-full sm:w-1/2 p-4  xl:w-1/3 ">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full aspect-video rounded-[4px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h1 className="max-w-[90%] mx-3 line-clamp-1 mt-3 text-center">
                Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, explicabo. Labore alias doloribus earum fugiat,
                reprehenderit quod facilis, porro a cumque blanditiis aliquid?
                Rerum distinctio similique magni repellat, earum mollitia.
              </h1>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default VideosPage
