import { allPosts } from "contentlayer/generated";
import StandardPageWrapper from "components/page-wrapper/index";
import BlogFeed from "../../components/blogFeed";

export const metadata = {
    title: "Blog Posts | Drew Beamer",
    description:
        "Explore a variety of topics on my blog, from birding adventures to insights on personal life, as well as my thoughts on web development and data analysis. Join me on my journey of discovery and growth in these diverse areas of interest.",
    openGraph: {
        title: "Blog Posts",
        description:
            "A collection of Drew Beamer's writing on various topics, ranging from web development to birding.",
    },
};

export default function PostsPage() {
    return (
        <StandardPageWrapper>
            <section>
                <h1>Posts</h1>
                <p>
                    This is where I share my thoughts, insights, and experiences
                    as a web developer, student, and birder. I hope you&apos;ll
                    find these posts both informative and enjoyable!
                </p>
                <BlogFeed postData={allPosts} />
            </section>
        </StandardPageWrapper>
    );
}
