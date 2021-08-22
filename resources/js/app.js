require('./bootstrap');

import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'


createInertiaApp({
  resolve: name => require(`../Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    color: "#9900ff"
})

import NProgress from 'nprogress'
import { Inertia } from '@inertiajs/inertia'

Inertia.on('start', () => NProgress.start())
Inertia.on('finish', () => NProgress.done())
