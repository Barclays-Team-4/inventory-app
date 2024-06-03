const request = require("supertest")
const app = require("./server/app.js")
const { Item } = require("./server/routes/index.js")
const seed = require("./server/seed.js")
let restQuantity;

 

beforeAll(async () => {

    await seed()
    const items = await Item.findAll({})
    restQuantity = items.length

})

 

 

describe('route tests', () => {

   

    it("should have 200 status code", async () => {
        const response = await request(app).get("/items")
        expect(response.statusCode).toEqual(200)

    })

 

    it("should return array of items", async () => {
        const response = await request(app).get("/items")
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body[0]).toHaveProperty("price")  

    })

 

    it("should return the correct number of items", async () => {
        const response = await request(app).get("/items")
        expect(response.body.length).toEqual(restQuantity)

    })

 

    it("should return correct item data", async () => {
        const response = await request(app).get("/items")
        expect(response.body).toContainEqual(
            expect.objectContaining({
                name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

            }))

    })

 

    test("should return larger item array", async () => {

    const response = await request(app)
   .post("/items")
   .send({ name: "qwe", price: 100, description: "abc", category: "xyz", image: "xyz.jpg" })
   expect(response.body.length).toEqual(restQuantity +1)

    })

 

    test("should update the first item in the database", async () => {

    await request(app)
    .put("items/1")
    .send({ name: "qwe", price: 100, description: "abc", category: "xyz", image: "xyz.jpg" })
    const item = await Item.findByPk(1)
    expect(item.name).toEqual("qwe")

    })

 

    test("should delete db entry by id", async () => {

    await request(app).delete("/items/1")
    const items = await Item.findAll({})
    expect(items.length).toEqual(restQuantity)
    expect(items[0].id).not.toEqual(1)

    })

 

 

})