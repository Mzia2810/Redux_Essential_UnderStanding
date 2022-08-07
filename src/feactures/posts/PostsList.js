import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import ReactionButtons from './ReactionButtons'



export const PostsList = () => {
  //read posts from Store
  const posts = useSelector((state) => state.posts)
 // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  // map the posts list to show
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user}/>
        <TimeAgo timeStamp={post.date}/>
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
       <ReactionButtons post={post}/>
      <Link
        style={{ marginLeft: '10px' }}
        to={`/posts/${post.id}`}
        className="button muted-button"
      >
        Single Post
      </Link>
    </article>
  ))


  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
      {/* <PostAuthor userId={post.user} /> */}
    </section>
  )
}
