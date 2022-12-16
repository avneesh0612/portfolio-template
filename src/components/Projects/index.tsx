import { Title } from '../Common/Title';
import { Project } from './Project';
import data from '@/data';

export const Projects = () => {
    return (
        <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="work">
            <Title num={2} title="What I've worked on" />
            <div className="flex flex-col">
                {data.projects.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </div>
    );
};
