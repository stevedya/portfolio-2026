import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { normalizedToBilinearCells } from './grid.ts'

const weightsByCell = (result: ReturnType<typeof normalizedToBilinearCells>) =>
  new Map(result.cells.map((cell) => [`${cell.row},${cell.column}`, cell.weight]))

const assertInBounds = (result: ReturnType<typeof normalizedToBilinearCells>, rows: number, columns: number) => {
  for (const cell of result.cells) {
    assert.ok(cell.row >= 0 && cell.row < rows, `row ${cell.row} outside 0..${rows - 1}`)
    assert.ok(cell.column >= 0 && cell.column < columns, `column ${cell.column} outside 0..${columns - 1}`)
  }
}

describe('normalizedToBilinearCells', () => {
  it('returns one weighted cell for an exact grid position', () => {
    const result = normalizedToBilinearCells(2 / 6, 3 / 6, 7, 7)
    const weights = weightsByCell(result)

    assert.equal(result.x0, 2)
    assert.equal(result.x1, 3)
    assert.equal(result.y0, 3)
    assert.equal(result.y1, 4)
    assert.equal(result.tx, 0)
    assert.equal(result.ty, 0)
    assert.equal(weights.get('3,2'), 1)
    assertInBounds(result, 7, 7)
  })

  it('splits weight across horizontal midpoint cells', () => {
    const result = normalizedToBilinearCells(2.5 / 6, 3 / 6, 7, 7)
    const weights = weightsByCell(result)

    assert.equal(result.tx, 0.5)
    assert.equal(result.ty, 0)
    assert.equal(weights.get('3,2'), 0.5)
    assert.equal(weights.get('3,3'), 0.5)
    assertInBounds(result, 7, 7)
  })

  it('splits weight across vertical midpoint cells', () => {
    const result = normalizedToBilinearCells(2 / 6, 3.5 / 6, 7, 7)
    const weights = weightsByCell(result)

    assert.equal(result.tx, 0)
    assert.equal(result.ty, 0.5)
    assert.equal(weights.get('3,2'), 0.5)
    assert.equal(weights.get('4,2'), 0.5)
    assertInBounds(result, 7, 7)
  })

  it('splits midpoint weight evenly across four frames', () => {
    const result = normalizedToBilinearCells(2.5 / 6, 3.5 / 6, 7, 7)
    const weights = weightsByCell(result)

    assert.equal(weights.get('3,2'), 0.25)
    assert.equal(weights.get('3,3'), 0.25)
    assert.equal(weights.get('4,2'), 0.25)
    assert.equal(weights.get('4,3'), 0.25)
    assertInBounds(result, 7, 7)
  })

  it('handles the top-left boundary', () => {
    const result = normalizedToBilinearCells(0, 0, 7, 7)
    const weights = weightsByCell(result)

    assert.equal(result.x0, 0)
    assert.equal(result.y0, 0)
    assert.equal(weights.get('0,0'), 1)
    assertInBounds(result, 7, 7)
  })

  it('handles the bottom-right boundary', () => {
    const result = normalizedToBilinearCells(1, 1, 7, 7)

    assert.equal(result.x0, 6)
    assert.equal(result.x1, 6)
    assert.equal(result.y0, 6)
    assert.equal(result.y1, 6)
    assert.deepEqual(result.cells[0], { row: 6, column: 6, weight: 1 })
    assert.equal(result.cells.reduce((sum, cell) => sum + cell.weight, 0), 1)
    assertInBounds(result, 7, 7)
  })

  it('clamps normalized values', () => {
    const result = normalizedToBilinearCells(-10, 10, 7, 7)

    assert.equal(result.x0, 0)
    assert.equal(result.x1, 1)
    assert.equal(result.y0, 6)
    assert.equal(result.y1, 6)
    assertInBounds(result, 7, 7)
  })

  it('keeps 13 by 13 sprite cells in bounds', () => {
    const result = normalizedToBilinearCells(0.93, 0.91, 13, 13)

    assertInBounds(result, 13, 13)
    assert.equal(result.cells.reduce((sum, cell) => sum + cell.weight, 0), 1)
  })
})
