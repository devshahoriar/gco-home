import BlurIn from '@/components/ui/aimate/blur-in'
import dynamic from 'next/dynamic'

const MagicCard = dynamic(
  () => import('@/components/ui/aimate/magic-card').then((c) => c.MagicCard),
  {
    ssr: false,
  }
)

const MagicContainer = dynamic(
  () =>
    import('@/components/ui/aimate/magic-card').then((c) => c.MagicContainer),
  {
    ssr: false,
  }
)

const Instagram = () => {
  return (
    <section>
      <div className="container px-3">
        <div className="mt-10">
          <BlurIn
            className="!text-2xl font-semibold md:!text-3xl !py-10 text-center"
            word="We are in instagrem"
          />
        </div>
        <MagicContainer
          className={'flex gap-5 flex-wrap justify-center px-0 md:px-0'}
        >
          {new Array(6).fill(0).map((_, i) => (
            <MagicCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              borderWidth={3}
              className="flex w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-10px)] cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
            >
              {/* biome-ignore lint/style/useTemplate: <explanation> */}
              <img className='w-full h-full object-cover' src={'https://picsum.photos/1000?q=' + i} alt="img" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
          ))}
        </MagicContainer>
      </div>
    </section>
  )
}
export default Instagram
