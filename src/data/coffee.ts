import tradicional from '../assets/tradicional.svg'
import americano from '../assets/americano.svg'
import expressoCremoso from '../assets/expressoCremoso.svg'
import cafeGelado from '../assets/cafeGelado.svg'
import cafeComLeite from '../assets/cafeComLeite.svg'
import latte from '../assets/latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mochaccino from'../assets/mochaccino.svg'
import chocoQuente from '../assets/chocoQuente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export const coffee = [
    {
        id: 1,
        tag: ['Tradicional'],
        name: 'Expresso Tradicional',
        img: {tradicional},
        desc: 'O tradicional café feito com água quente e grãos moidos',
        price: 9.90,
    },
    {
        id: 2,
        tag: ['Tradicional'],
        name: 'Expresso Americano',
        img: {americano},
        desc: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
    },
    {
        id: 3,
        tag: ['Tradicional'],
        name: 'Expresso Cremeoso',
        img: {expressoCremoso},
        desc: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
    },
    {
        id: 4,
        tag: ['Tradicional', 'Gelado'],
        name: 'Expresso Gelado',
        img: {cafeGelado},
        desc: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
    },
    {
        id: 5,
        tag: ['Tradicional', 'Com Leite'],
        name: 'Café com Leite',
        img: {cafeComLeite},
        desc: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
    },
    {
        id: 6,
        tag: ['Tradicional', 'Com Leite'],
        name: 'Latte',
        img: {latte},
        desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
    },
    {
        id: 7,
        tag: ['Tradicional', 'Com Leite'],
        name: ['Capuccino'],
        img: {capuccino},
        desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
    },
    {
        id: 8,
        tag: ['Tradicional', 'Com Leite'],
        name: 'Macchiato',
        img: {macchiato},
        desc: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
    },
    {
        id: 9,
        tag: ['Tradicional', 'Com Leite'],
        name: 'Moccaccino',
        img: {mochaccino},
        desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
    },
    {
        id: 10,
        tag: ['Especial', 'Com Leite'],
        name: 'Chocolate Quente',
        img: {chocoQuente},
        desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
    },
    {
        id: 11,
        tag: ['Especial', 'Alcoólico', 'Gelado'],
        name: 'Cubano',
        img: {cubano},
        desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
    },
    {
        id: 12,
        tag: ['Especial'],
        name: 'Havaino',
        img: {havaiano},
        desc: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
    },
    {
        id: 13,
        tag: ['Especial'],
        name: 'Árabe',
        img: {arabe},
        desc: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
    },
    {
        id: 14,
        tag: ['Especial', 'Alcoólico'],
        name: 'Irlandês',
        img: {irlandes},
        desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
    }
]