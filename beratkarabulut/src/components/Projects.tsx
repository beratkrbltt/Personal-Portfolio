import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/Projects.css'
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { getGithubProjects } from '../redux/githubRepoSlice';
import Project from './Project';


function Projects() {

    const { projects } = useSelector((state: RootState) => state.githubRepo)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getGithubProjects());
    }, []);


    return (
        <section className="project-main" id="projects">
            <div className="project-sec">
                <span className="eyebrow">
                    <span className="eyebrow-tag">03</span>
                    <span className="eyebrow-line" />
                    PROJECTS
                </span>
                <h2 className="tech-sec-heading">
                    Things I've Built.
                </h2>

            </div>
            <div className="project-slider">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        481: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {projects?.map((project) => (
                        <SwiperSlide key={project.id}>
                            <Project project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}

export default Projects;