import { Project } from '../types/types.tsx';

import bdaycountdown from '../assets/projects/bdaycountdown.png';
import weatherapp from '../assets/projects/weatherapp.png';
import dailysmart from '../assets/projects/dailysmarty.png'

export const projects: Project[] = [
    {
        id: 1,
        name: 'React: Birthdate Calculator',
        image: bdaycountdown,
        github: 'https://github.com/cartercodes/birthday-countdown',
        live:''
    },
    {
        id: 2,
        name: 'React-Redux: Weather Forecast',
        image: weatherapp,
        github: 'https://github.com/cartercodes/weather-app',
        live: 'https://cartercodes.github.io/weather-app/dist/'
    },
    {
        id: 3,
        name: 'React-Redux: Daily Smarty',
        image: dailysmart,
        github: 'https://github.com/cartercodes/dailysmartyUI',
        live: ''
    }
];