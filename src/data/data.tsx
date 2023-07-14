import { Project } from '../types/types.tsx';

import bdaycountdown from '../assets/projects/bdaycountdown.png';
import weatherapp from '../assets/projects/weatherapp.png';
import churchscreen from '../assets/projects/churchscreenshot.png'
import dailysmart from '../assets/projects/dailysmarty.png'

export const projects: Project[] = [
    {
        id: 1,
        name: 'Birthdate Calculator',
        image: bdaycountdown,
        github: 'https://github.com/cartercodes/birthday-countdown',
    },
    {
        id: 2,
        name: 'Weather Forecast',
        image: weatherapp,
        github: 'https://github.com/cartercodes/weather-app',
    },
    {
        id: 3,
        name: 'The Remnant',
        image: churchscreen,
        github: '', 
        live:'https://www.theremnantnc.org/the-remenant-movement'
    },
    {
        id: 4,
        name: 'Daily Smarty',
        image: dailysmart,
        github: 'https://github.com/cartercodes/dailysmartyUI',
    }
];