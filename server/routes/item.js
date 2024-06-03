const express = require('express')
const { Item } = require('../models')

const router = express.Router()

/**
 * Get an item by its id
 */
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id)
    if (!item) return res.sendStatus(404)
    res.send(item)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Get all items
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Create a new item
 */
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).send(item)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Update an item
 */
router.put('/:id', async (req, res) => {
  try {
    let item = await Item.findByPk(req.params.id)
    if (!card) return res.sendStatus(404)
    item = await item.update({ ...item, ...req.body })
    res.send(card)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Delete an item
 */
router.delete('/:id', async (req, res) => {
  try {
    let item = await Item.findByPk(req.params.id)
    if (!item) return res.sendStatus(404)
    item = await item.destroy()
    res.send(item)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

module.exports = { router }