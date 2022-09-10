import { expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../pages'

it('should render home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  console.log(screen)
  expect(main.getByRole('heading', { level: 1, name: /progress/i })).toBeDefined()
})