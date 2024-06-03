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
 * Create a new card
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
 * Update a card
 */
router.put('/:id', async (req, res) => {
  try {
    let item = await Item.findByPk(req.params.id)
    if (!card) return res.sendStatus(404)
    item = await item.update({ ...card, ...req.body })
    res.send(card)
  } catch (err) {
    res.sendStatus(500)
    console.error(err)
  }
})

/**
 * Delete a card
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