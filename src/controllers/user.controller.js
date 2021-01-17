import http from '../config/http'

export default async (req, res) => {
  const { username } = req.params

  const { data } = await http.get(`/users/${username}`)

  res.json(data)
}
