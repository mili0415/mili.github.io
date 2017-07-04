/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'hashHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/Home') },
    { path: '/list', component: System.import('pages/List') },
    { path: '/article/:path', component: System.import('pages/Article') },
    // ==== router end   ==== //
    { path: '*', component: System.import('pages/404') },
  ]
})
