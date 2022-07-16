const Product = require('../models/productModel')


module.exports = {
  async all(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
    
      res.status(400).send(error);
    }
  },
   async one(req, res) {
    try {
     const id = req.params.id

      const product= await Product.findOne({where: {id}})

        if(!product){
            return res.status(400).json('produto não encontrado')
        }

        res.status(200).json(product);
    } catch (error) {
      
      res.status(400).send(error);
    }
  },
  async create(req, res){
    try {
        await Product.create(req.body)
        res.status(200).send('produto adicionado com sucesso!')
        
    } catch (error) {
        res.status(400).send(error);
        
    }
  },
  async update(req, res){
    try {
        const {description} = req.body
        const {done} = req.body
        const id = req.params.id

        const product= await Product.findOne({where: {id}})



        if(!product){
            return res.status(400).json('produto não encontrado')
        }
        product.description= description
        product.done= done

        await product.save()

        res.status(201).json('produto editado com sucesso!')
        
    } catch (error) {
        res.status(400).send(error);
    }
  },
  async delete(req, res) {
    try {
     const id = req.params.id

      const product= await Product.destroy({where: {id}})

        if(!product){
            return res.status(400).json('produto não encontrado')
        }

        res.status(200).json('produto excluido com sucesso!');
    } catch (error) {
      
      res.status(400).send(error);
    }
  }
}