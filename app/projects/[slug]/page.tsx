import PageWrapper from "components/ui-components/pageWrapper";
import { allProjects } from "contentlayer/generated";
import { projectFromSlug } from "lib/contentlayerHelpers";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import ScrollingTitle from "../../../components/ui-components/scrollingTitle"


export async function generateStaticParams() {
    return allProjects.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(9),
            }
        }
    });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = projectFromSlug(params.slug)
    return {
        metadataBase: "https://drewbeamer.vercel.app",
        title: project.title + " | Drew Beamer",
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url: "https://drewbeamer.vercel.app/" + project?.url,
            images: [
                {
                    url: project.projectImage,
                    width: 720,
                    height: 480
                }
            ]
        }
    }
}

const NextImage = (props) => {
    return <div className="rounded-[30px]">
        <Image src={props.src} {...props} className="rounded-[30px] px-4 py-4 relative bottom-4" />
    </div>
}

export default function ProjectPage({ params }) {

    const project = projectFromSlug(params.slug);

    if (project !== undefined) {

        const components = {
            Image: NextImage
        }
        const Content = useMDXComponent(project.body.code)

        return (
            <PageWrapper>
                <article className="blogPost relative overflow-clip">
                    <ScrollingTitle>{project.title}</ScrollingTitle>
                    <div className="inline-block sm:hidden w-full overflow-auto">
                        <h1 className="whitespace-nowrap">{project.title}</h1>
                    </div>

                    <div className="relative">
                        <Content components={{ ...components }} />
                    </div>

                </article>
                <div className="hover:underline text-green-400 mb-24"><Link href="/projects">??? Return to Projects</Link></div>
            </PageWrapper>
        )
    }
    return <div>
        Oops! There should be a project here...
    </div>

}