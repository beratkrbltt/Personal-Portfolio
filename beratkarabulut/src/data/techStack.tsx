import type { TechCategory } from '../types/Type'

export const techStack: TechCategory[] = [
    {
        label: 'Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        variant: 'amber',
    },
    {
        label: 'Frontend',
        items: [
            'React',
            'Redux Toolkit',
            'React Router',
            'Axios',
            'MUI',
            'Formik',
            'Yup',
        ],
        variant: 'blue',
    },
    {
        label: 'Database',
        items: ['Oracle SQL'],
        variant: 'purple',
    },
    {
        label: 'Services',
        items: ['Firebase', 'EmailJS'],
        variant: 'red',
    },
    {
        label: 'Tools & Workflow',
        items: ['Git', 'GitHub', 'Figma', 'Canva', 'VS Code', 'Vite'],
        variant: 'green',
    },
]