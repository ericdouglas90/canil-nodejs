import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pets';

export const home = (req: Request, res: Response) => {
    const list = Pet.getAll();

    return res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        menu: createMenuObject('all'),
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    const list = Pet.getFromType('dog');

   return res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        menu: createMenuObject('dog'),
        list
    });
}

export const cats = (req: Request, res: Response) => {
    const list = Pet.getFromType('cat');

    return res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        menu: createMenuObject('cat'),
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    const list = Pet.getFromType('fish');

    return res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        menu: createMenuObject('fish'),
        list
    });
}