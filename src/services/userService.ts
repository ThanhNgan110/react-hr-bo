export const getUsers = async () => {
  return fetch('/api/user')
    .then(res => res.json())
    .then(data => data)
}

export const getUser = async (userId: number) => {
  return fetch(`/api/user/${userId}`)
    .then(res => res.json())
    .then(data => data)
}