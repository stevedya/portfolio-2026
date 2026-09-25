export type GridPosition = {
  row: number
  column: number
  normalizedX: number
  normalizedY: number
}

export type GridCell = Pick<GridPosition, 'row' | 'column'>

export function clamp01(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0.5
}

export function normalizePointerAroundPortrait(
  pointerX: number,
  pointerY: number,
  portrait: { left: number; top: number; width: number; height: number },
  viewportWidth: number,
  viewportHeight: number,
): { x: number; y: number } {
  const axis = (position: number, center: number, extent: number) => {
    if (!Number.isFinite(extent) || extent <= 0) return 0.5
    const anchor = clamp01(center / extent) * extent
    if (position <= anchor) return anchor > 0 ? 0.5 * clamp01(position / anchor) : 0.5
    return anchor < extent ? 0.5 + 0.5 * clamp01((position - anchor) / (extent - anchor)) : 0.5
  }

  return {
    x: axis(pointerX, portrait.left + portrait.width / 2, viewportWidth),
    y: axis(pointerY, portrait.top + portrait.height / 2, viewportHeight),
  }
}

export function normalizedToCell(x: number, y: number, rows: number, columns: number): GridCell {
  if (!Number.isInteger(rows) || rows < 1 || !Number.isInteger(columns) || columns < 1) {
    throw new Error('Grid dimensions must be positive integers.')
  }

  return {
    row: Math.round(clamp01(y) * (rows - 1)),
    column: Math.round(clamp01(x) * (columns - 1)),
  }
}

export function getSpriteSource(cell: GridCell & { frameWidth: number; frameHeight: number }) {
  return { sourceX: cell.column * cell.frameWidth, sourceY: cell.row * cell.frameHeight }
}
