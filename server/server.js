const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const { Op } = require('sequelize');
const { Post } = require('./db/models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.post('/', async (req, res) => {
  const { input } = req.body;
  const foundPosts = await Post.findAll({
    where: {
      text: {
        [Op.substring]: input,
      },
    },
  });
  //   console.log(foundPosts);
  res.json(foundPosts);
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
