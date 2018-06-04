# PADAWAN
## Description

This repository is a Application software with Nodejs, Express, MongoDB and Ajax, this application contains an API created with Express and an authentication by means of tokens.

## Installation
Using Nodejs v10.3, Express, Mongoose, JWT, Crypto, Moment etc preferably.

## DataBase
Using MongoDB preferably.

## Apps
Using Postman or RestEasy to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/Padawan.git [NAME APP] 

$ npm install

$ npm start
```
Follow the following steps and you're good to go! Important:


![alt text](https://camo.githubusercontent.com/a0bfb0b779d1b5403270806adfac6b31c647c168/68747470733a2f2f6f6f6f2e306f302e6f6f6f2f323031352f31322f32302f353637373638663430616339312e676966)


## Coding

### Urls

```javascript
...
const auth = require('../middlewares/auth')

const api = express.Router()

api.get('/product',productCtrl.getProducts)

api.get('/product/:productId',productCtrl.getProduct)

api.post('/product', auth, productCtrl.saveProduct)

api.put('/product/:productId', auth, productCtrl.updateProduct)

api.delete('/product/:productId', auth, productCtrl.deleteProduct)

...
```

### Controllers


```javascript
...
 function saveProduct(req,res){
     //console.log(req.body)
    //res.status(200).send({message: 'Product saved successfully!'})

    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.picture = req.body.picture
    product.description = req.body.description

    product.save((err, productStored)=>{
        if(err) return res.status(500).send({
            message: `ERROR when trying to save the product: ${err}`
        })
        res.status(200).send({
            product: productStored
        })
    })
} 
...

```

### Views

```javascript
...
    fetch('/api/product', {
        method: 'GET',
        headers: myHeaders
    })
    .then(res=>res.json())
    //.then(data=>console.log(data))

    .then(data=>{
        data.products.map(product=>{
            let text = document.createTextNode(product.name)
            
            let elem = document.createElement("li")
            
            elem.appendChild(text)            

            productList.appendChild(elem)            
        })

        document.body.appendChild(productList)
    })
...
```

### Model

```javascript
...
const ProductSchema = Schema({
    name: String,
    price: {type: Number, default: 0},
    category: {
        type: String, enum: ['computers','phones','accesories']
    },
    picture: String,
    description: String,
})
...
```

### Services

```javascript
...
function createToken(user){
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/Padawan. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
