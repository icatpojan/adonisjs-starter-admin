'use strict'
const Post = use('App/Models/Post')

class DashboardController {

    async index({ view, auth }) {
        const user = auth.user.toJSON()
        const posts = await Post.all()

        return view.render('admin.pages.dashboard', { user: user, posts: posts.rows })
    }

}

module.exports = DashboardController