import path from 'path'
import { title } from 'process'

const data = [
  {
    title: 'Plant Tree',
    path: '/plant-tree',
    submenus: [
      {
        title: 'By region',
        path: '/plant-tree/by-region',
        subPage: [
          { title: 'Asia', path: '/plant-tree/by-region/asia' },
          { title: 'Africa', path: '/plant-tree/by-region/africa' },
          { title: 'Europe', path: '/plant-tree/by-region/europe' },
          {
            title: 'North America',
            path: '/plant-tree/by-region/north-america',
          },
        ],
      },
      {
        title: 'By tree type',
        path: '/plant-tree/by-tree-type',
        subPage: [
          {
            title: 'Fruit Trees',
            path: '/plant-tree/by-tree-type/fruit-trees',
          },
          {
            title: 'Flowering Trees',
            path: '/plant-tree/by-tree-type/flowering-trees',
          },
          { title: 'Palm Trees', path: '/plant-tree/by-tree-type/palm-trees' },
          {
            title: 'Conifer Trees',
            path: '/plant-tree/by-tree-type/conifer-trees',
          },
          {
            title: 'Deciduous Trees',
            path: '/plant-tree/by-tree-type/deciduous-trees',
          },
          {
            title: 'Evergreen Trees',
            path: '/plant-tree/by-tree-type/evergreen-trees',
          },
          {
            title: 'Shade Trees',
            path: '/plant-tree/by-tree-type/shade-trees',
          },
          {
            title: 'Ornamental Trees',
            path: '/plant-tree/by-tree-type/ornamental-trees',
          },
        ],
      },
      {
        title: 'By tree size',
        path: '/plant-tree/by-tree-size',
        subPage: [
          {
            title: 'Small Trees',
            path: '/plant-tree/by-tree-size/small-trees',
          },
          {
            title: 'Medium Trees',
            path: '/plant-tree/by-tree-size/medium-trees',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Get Involved',
    path: '/get-involved',
  },
  {
    title: 'Learn',
    path: '/learn',
  },
  {
    title: 'Shop',
    path: '/shop',
  },
]

export default data
