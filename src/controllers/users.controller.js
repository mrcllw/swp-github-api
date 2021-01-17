import http from '../config/http'

export default async (req, res) => {
  const { since } = req.query || 0

  const { data } = await http.get(`/users?per_page=10&since=${since}`)

  const lastUser = data[data.length-1]
  const nextPageLink = `https://${req.get('host')}/api/users?since=${lastUser.id}`

  res.json({
    users: data,
    nextPage: nextPageLink
  })
}
