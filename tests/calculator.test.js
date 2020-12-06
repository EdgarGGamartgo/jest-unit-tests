import request from 'supertest'
import app from '../src/app'


test('Module must be 2', async () => {
     const response = await request(app).post('/calculator').send({
        val1: 5,
        val2: 3,
        opetator: "%"
     }).expect(201)

    expect(response.body).toMatchObject({
        result: 2
    })
})

test('Sum must be 8', async () => {
    const response = await request(app).post('/calculator').send({
       val1: 5,
       val2: 3,
       opetator: "+"
    }).expect(201)

   expect(response.body).toMatchObject({
       result: 8
   })
})

test('Substraction must be 2', async () => {
    const response = await request(app).post('/calculator').send({
       val1: 5,
       val2: 3,
       opetator: "-"
    }).expect(201)

   expect(response.body).toMatchObject({
       result: 2
   })
})

test('Multiplication must be 15', async () => {
    const response = await request(app).post('/calculator').send({
       val1: 5,
       val2: 3,
       opetator: "*"
    }).expect(201)

   expect(response.body).toMatchObject({
       result: 15
   })
})

test('Division must be 1.6666666666666667', async () => {
    const response = await request(app).post('/calculator').send({
       val1: 5,
       val2: 3,
       opetator: "/"
    }).expect(201)

   expect(response.body).toMatchObject({
       result: 1.6666666666666667
   })
})
