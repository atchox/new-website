import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import AuthorLayout from '@/layouts/AuthorLayout'
import Container from '@/components/Container'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <Container>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} components={components} />
      </AuthorLayout>
    </Container>
  )
}
