import PageWrapper from "components/ui-components/pageWrapper"

export const metadata = {
    title: "About Me | Drew Beamer",
    description: "Drew Beamer is a student at Davidson College, web developer and birder.",
    openGraph: {
        title: "About Me",
        description: "Drew Beamer is a student at Davidson College, web developer and birder.",
    }
}

export default function About() {
    return <PageWrapper>
        <section>
            <h1>About Me</h1>
            I have honed my technical skills in a variety of programming languages and frameworks,
            including Next.js, React, Javascript Python, and Java. I have a deep love for learning
            and love taking on new challenges that will expand my skillset. I'm particularly motivated
            by projects that will have a positive impact on people.
            <br /><br />
            When I'm not coding, you'll find me photographing birds. I've seen over 850
            species worldwide, and don't plan on slowing down any time soon!
        </section>
    </PageWrapper>
}