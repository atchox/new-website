import Link from '@/components/Link'
import Image from '@/components/Image'
// import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
// import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="relative left-1/2 mt-100 w-screen -translate-x-1/2 bg-red-950 sm:mt-110 md:mt-120 xl:mt-140">
          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between px-4 pb-15 sm:px-6 md:flex-row xl:max-w-5xl xl:px-0">
            <Image
              src="/static/images/atreya_BW.jpg"
              alt="Portrait of Atreya at Stoos"
              height={400}
              width={400}
              title="Me at Stoos"
              className="relative z-2 -mt-90 h-auto w-full sm:-mt-100 sm:w-4/5 md:-mt-70 md:w-2/5 lg:-mt-110 lg:w-3/5 xl:-mt-120 xl:w-1/2"
            />
            <p className="mt-10 w-full text-right text-xl/8 text-gray-500 md:w-7/12 dark:text-gray-50">
              My name is Atreya. I am a Statistics Masters student at ETH Zürich, interested in
              non-parametric statistics and problems at the intersection of statistics and
              bioinformatics.
              <br />
              <Link
                href="/about"
                className="keep-reading relative text-2xl/16 font-medium text-gray-500 no-underline! dark:text-gray-400"
              >
                About me
                <span className="text-xl"> →</span>
              </Link>
            </p>
          </div>
        </div>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
