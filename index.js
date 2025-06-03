require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 5001

const github = {
  "login": "Sumit-rana13",
  "id": 118682671,
  "node_id": "U_kgDOBxL0Lw",
  "avatar_url": "https://avatars.githubusercontent.com/u/118682671?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sumit-rana13",
  "html_url": "https://github.com/Sumit-rana13",
  "followers_url": "https://api.github.com/users/Sumit-rana13/followers",
  "following_url": "https://api.github.com/users/Sumit-rana13/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sumit-rana13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sumit-rana13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sumit-rana13/subscriptions",
  "organizations_url": "https://api.github.com/users/Sumit-rana13/orgs",
  "repos_url": "https://api.github.com/users/Sumit-rana13/repos",
  "events_url": "https://api.github.com/users/Sumit-rana13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sumit-rana13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sumit Rana",
  "company": null,
  "blog": "",
  "location": "Dehradun , Uttarakhand",
  "email": null,
  "hireable": null,
  "bio": "Learning Something new everyday ",
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-11-20T17:05:58Z",
  "updated_at": "2025-05-16T17:55:17Z"
}

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/login', (req,res)=>{
    res.send('Login page')
})

app.get('/github', (req,res)=>{
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
