import Head from 'next/head';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Siddhika&apos;s Portfolio</title>
        <meta name="description" content="Read the latest posts on my blog" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="text-center p-8 bg-base-100 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-lg text-base-content mb-8">
            The blog is currently under construction. Please check back later for updates and new posts!
          </p>
          <div className="flex justify-center">
            <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.42.885 4.625 2.343 6.291l1.657-1.657zm1.657-1.657A7.962 7.962 0 0112 20v4c-2.42 0-4.625-.885-6.291-2.343l1.657-1.657zm7.657 1.657A7.962 7.962 0 0120 12h4c0 6.627-5.373 12-12 12v-4zm-2.343-6.291A7.962 7.962 0 0112 4V0c2.42 0 4.625.885 6.291 2.343L16.634 4z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
