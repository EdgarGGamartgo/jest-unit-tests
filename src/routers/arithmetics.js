import express from 'express'
import cors from 'cors'

const router = new express.Router()

router.post('/calculator', cors(), async (req, res) => {
    try {
        if (req.body.opetator === '-') {
            const result = req.body.val1 - req.body.val2  
            res.status(201).send({ result })
        }  
        
        if (req.body.opetator === '+') {
            const result = req.body.val1 + req.body.val2  
            res.status(201).send({ result })
        }
        
        if (req.body.opetator === '*') {
            const result = req.body.val1 * req.body.val2  
            res.status(201).send({ result })
         }
    
        if (req.body.opetator === '/') {
            const result = req.body.val1 / req.body.val2  
            res.status(201).send({ result })
        } 
    
        if (req.body.opetator === '%') {
            const result = req.body.val1 % req.body.val2  
            res.status(201).send({ result })
        }
    } catch (e) {
        res.status(400).send(e)
    } 
})



export { router as default }
