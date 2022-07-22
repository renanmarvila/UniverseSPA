import { Router } from './router.js'

const router = new Router()

router.add('/', './app/pages/home.html')
router.add('/index.html', './app/pages/home.html')
router.add('/universe', './app/pages/universe.html')
router.add('/explore', './app/pages/explore.html')
router.add('404', './app/pages/404.html')

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()
