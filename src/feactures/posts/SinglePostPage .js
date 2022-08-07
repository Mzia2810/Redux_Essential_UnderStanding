/* eslint-disable no-unreachable */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactionButtons from './ReactionButtons'


const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h4> Post Not found ! Please try again Until Succeed </h4>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Eidt Post
        </Link>
      </article>
    </section>
  )
}

export default SinglePostPage
