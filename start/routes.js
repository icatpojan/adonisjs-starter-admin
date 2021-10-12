'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * register
 */
Route.get('register', 'Auth/RegisterController.index').as('register.index').middleware(['RedirectIfAuthenticated'])
Route.post('register', 'Auth/RegisterController.store').as('register.store').middleware(['RedirectIfAuthenticated'])

/**
 * login
 */
Route.get('/', 'Auth/LoginController.index').as('login.index').middleware(['RedirectIfAuthenticated'])
Route.post('login', 'Auth/LoginController.check').as('login.check').middleware(['RedirectIfAuthenticated'])
Route.get('logout', 'Auth/LoginController.logout').as('logout').middleware(['Authenticate'])

/**
 * dashboard
 */
Route.get('dashboard', 'DashboardController.index').as('dashboard').middleware(['Authenticate'])
Route.get('/posts', 'PostController.index').as('posts.index').middleware(['Authenticate'])
Route.get('/posts/create', 'PostController.create').as('posts.create').middleware(['Authenticate'])
Route.post('/posts/store', 'PostController.store').as('posts.store').middleware(['Authenticate'])
Route.get('/posts/edit/:id', 'PostController.edit').as('posts.edit').middleware(['Authenticate'])
Route.post('/posts/update/:id', 'PostController.update').as('posts.update').middleware(['Authenticate'])
Route.get('/posts/delete/:id', 'PostController.delete').as('posts.delete').middleware(['Authenticate'])



Route.get('/coba', 'PostController.coba').as('coba').middleware(['Authenticate'])