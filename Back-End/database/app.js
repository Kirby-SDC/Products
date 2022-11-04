const express = require('express')
const {client} = require('./connectDB.js')
require('dotenv').config();

const app = express();
app.use(express.json());
app.listen(process.env.PORT, ()=> {
  console.log(`server listening on port ${process.env.PORT}`)
});

app.get('/products', (req, res) => {
  var limit = req.query.count || 5
  var offset = ((req.query.page - 1) * limit) || 0;
  client
  .query(`SELECT * FROM products OFFSET $1 LIMIT $2`, [offset, limit])
  .then (result=> {
    res.send(result.rows)
  })
  .catch(err => {
    if(err) {
      console.log('err@ GET /products');
    }
  })
})

app.get('/products/:prodID', (req, res)=> {
  var product_id = req.params.prodID;
  client
  .query('SELECT * FROM products WHERE id=$1', [product_id])
  .then (result => {
    var product = result.rows[0];
    client
    .query('SELECT feature, value FROM features WHERE product_id=$1', [product_id])
    .then((result)=> {
      product.features=result.rows;
      res.send(product);
    })
  })
  .catch(err => {
    if(err) {
      console.log('err@ GET /products/prodID')
    }
  })
})

app.get('/products/:prodID/styles', (req, res) => {
  var product_id = req.params.prodID;
  var queryStr = `SELECT json_build_object
  (
      'product_id', ${product_id},
      'results',
    (SELECT json_agg
      (json_build_object
        (
        'style_id', id,
        'name', name,
        'original_price', original_price,
        'sale_price', sale_price,
        'default?', default_style,
        'photos',(SELECT json_agg(json_build_object(
              'thumbnail_url', thumbnail_url,
              'url', url)) FROM photos where photos.styleId = styles.id),
        'skus',(SELECT json_object_agg(
              id, (
                SELECT json_build_object(
                'quantity', quantity,
                'size', size)
                )
            ) FROM skus WHERE skus.styleId=styles.id
             )
        )
      ) from styles where productId = ${product_id} limit 5
    )
  ) as t`

  client
  .query(queryStr, [])
  .then(result => {
    res.send(result.rows[0].t)
  })


  // `SELECT row_to_json(t) as styles
  // FROM (SELECT id as "style_id", name, sale_price, original_price, default_style,
  //     (SELECT json_agg(row_to_json(photos)) FROM (SELECT url, thumbnail_url FROM photos where styleId=styles.id) as photos) AS photos,

  //     (SELECT json_agg(row_to_json(skus)) FROM (
  //       SELECT id, quantity, size FROM skus where styleid=styles.id) as skus
  //       )
  //     AS skus
  //     FROM styles WHERE productId=$1) as t`


  // .query('SELECT * FROM styles WHERE productId=$1', [product_id])
  // .then(result => {
  //   var photosPromise = [], skusPromise=[];
  //   var styles = result.rows;
  //   styles.forEach(style => {
  //     var styleId=style.id;
  //     //photos
  //     photosPromise.push(
  //       client
  //       .query('SELECT url, thumbnail_url FROM photos WHERE styleId=$1', [styleId])
  //       .then(result => {
  //         style.photos = result.rows;
  //         return style;
  //       })
  //       )
  //     skusPromise.push(
  //       client
  //       .query('SELECT size, quantity FROM skus WHERE styleId=$1', [styleId])
  //       .then(result => {
  //         style.skus = result.rows;
  //         return style;
  //       })
  //     )
  //   })
  //   Promise.all(photosPromise)
  //   .then(result => {
  //     Promise.all(skusPromise)
  //     .then(result => {
  //       res.send(result)
  //     })
  //   })
  //   })
  })



