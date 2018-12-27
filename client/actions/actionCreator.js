// increment
export function increment (index) {
  return {
    type: '',
    index
  }
}

// add comment
export function addComment (postId, author, comment) {
  return {
    type: 'Add_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment (postId, i) {
  type: 'REMOVE_COMMENT',
  i,
  postId
}
