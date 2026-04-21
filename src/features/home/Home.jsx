import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { typingHeadings, resumeLink } from '../../constants/profile';

const headings = typingHeadings;
const Home = () => {
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentFullHeading = headings[currentIndex];
            setCurrentHeading(prev => isDeleting ? currentFullHeading.substring(0, prev.length - 1) : currentFullHeading.substring(0, prev.length + 1));

            if (!isDeleting && currentHeading === currentFullHeading) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentHeading === '') {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % headings.length);
            }
            setSpeed(isDeleting ? 30 : 150);
        };

        const typingTimer = setTimeout(handleType, speed);

        return () => clearTimeout(typingTimer);
    }, [currentHeading, isDeleting, currentIndex, speed]);

    return (
        <div id='home'>
            <div className="home flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center lg:h-dvh px-10 lg:px-52 lg:py-20 py-32 bg-neutral-900">
                <div className="homeInfo font-sans">
                    <div className="headings my-10">
                        <h4 className='text-neutral-400 lg:text-xl text-sm font-mono my-4'>Hello, I'm</h4>
                        <h1 className='text-white lg:text-8xl text-5xl font-mono my-4'>Tabish Khan</h1>
                        <h3 className='text-neutral-400 lg:text-3xl text-xl font-mono my-4'>{currentHeading}<span className="blinking-cursor  lg:text-3xl text-xl">|</span></h3>
                        {/* testing */}
                    </div>
                    <div className="buttons flex gap-5 lg:gap-10">
                        <a href={resumeLink} target='_blank' download><button className='transition ease-in-out duration-300 lg:px-5 px-3 py-2 text-white border border-neutral-500 hover:text-neutral-800 hover:bg-white rounded-full '>Download Resume</button></a>
                        <button className='transition ease-in-out duration-300 lg:px-5 px-3 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-900 hover:border-neutral-500 rounded-full'><Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact Info</Link></button>
                    </div>
                </div>
                <div className="homeImage w-72 lg:w-96">
                    <img src="/profile.jpg" alt="" className='rounded-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;
