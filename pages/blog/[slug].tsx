import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getAllPosts, getPostBySlug } from '../../utils/blog';
import { markdownToHtml } from '../../utils/markdown';

interface BlogSlugPageProps {
  post: any;
}

const BlogSlugPage = ({ post }: BlogSlugPageProps) => {
  return (
    <>
      <NextSeo
        title={`${post.title} - Download YouTube Video`}
        description={post.excerpt}
        openGraph={{
          images: [
            {
              url: post.ogImage,
            },
          ],
        }}
      />
      <article>
        <MarkdownRenderer>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </MarkdownRenderer>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string, [
    'title',
    'date',
    'slug',
    'excerpt',
    'content',
    'ogImage',
    'coverImage',
  ]) as any;

  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export default BlogSlugPage;
