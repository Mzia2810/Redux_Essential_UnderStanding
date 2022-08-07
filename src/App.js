import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PostsList } from './feactures/posts/PostsList'
import SinglePostPage  from './feactures/posts/SinglePostPage '
import { Navbar } from './app/Navbar'
import { AddPostForm } from './feactures/posts/AddPostForm'
import EditPostForm  from './feactures/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <h2>Redux App </h2>
                <AddPostForm/>
                <PostsList/>
              </section>
            )}
          />
          <Route exact path ="/posts/:postId" component={SinglePostPage} />
          <Route exact path='/editPost/:postId' component={EditPostForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
