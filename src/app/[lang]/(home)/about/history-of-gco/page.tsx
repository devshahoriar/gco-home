const appUrl = process.env.APP_URL!
import ReactMarkdown from 'react-markdown'

const HistryPage = async () => {
  const res = await fetch(appUrl + '/md/about/histry.md')
  const md = await res.text()
  return (
    <main className="container">
      <div className="prose dark:prose-invert max-w-[700px] mx-auto my-10">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </main>
  )
}

export default HistryPage
