import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  console.log("Home route hit")
  res.json({
    message: "welcome to the code world"
  })
})

export default router
