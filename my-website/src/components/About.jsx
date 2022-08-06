import { Animator, ScrollContainer, ScrollPage, Fade, Move, Sticky, batch } from 'react-scroll-motion'

const FadeUp = batch(Fade(), Move(), Sticky());

const About = () =>{
    return (
        <div id="about">
            <ScrollContainer>
                <ScrollPage>
                    <div className='container'>
                        <h1 className='title'>About</h1>
                        <Animator animation={FadeUp}>
                            <ul>
                               <li>
                                    <h6>Fast</h6>
                                    <p>Fast load times and lag free interaction, my highest priority. </p>
                                </li> 
                               <li>
                                    <h6>Responsive</h6>
                                    <p>My layouts will work on any device, big or small.</p>
                                </li> 
                               <li>
                                    <h6>Intuitive</h6>
                                    <p>Strong preference for easy to use, intuitive UX/UI.</p>
                                </li> 
                               <li>
                                    <h6>Dynamic</h6>
                                    <p>Websites don't have to be static, I love making pages come to life. </p>
                                </li> 
                            </ul>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </div>
    )
}
export default About