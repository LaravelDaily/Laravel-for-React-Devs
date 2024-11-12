import Layout from './../Layouts/AuthenticatedLayout.jsx'

const About = () => {
    return (
        <Layout>
            <div className="container u-text-center">
                <h1 className="heading heading--large">About</h1>
                <div className="u-block-center u-max-width-640">
                    <img className="image"
                         src="https://media.licdn.com/dms/image/C4E03AQHS9-RWTnRegw/profile-displayphoto-shrink_800_800/0/1552810358396?e=2147483647&v=beta&t=G849Cqh6ogaiaxKnQ5WXLMGkBXHQ2K18b-c11wsTzwE"/>
                    <h2 className="heading heading--default">Skylar Dryden</h2>
                    <p className="paragraph">
                        I'm a tech enthusiast with a knack for web design and user-friendly interfaces. I relish
                        problem-solving through code and logic. My journey in tech has given me a solid foundation in
                        web development.
                        <br/>
                        I'm passionate about crafting elegant solutions that exceed user expectations. Beyond the
                        screen, I'm a lifelong learner, staying at the forefront of tech's evolution. I believe in
                        tech's transformative power and am thrilled to be a part of it.
                    </p>
                </div>

            </div>
        </Layout>
    )
}

export default About;
