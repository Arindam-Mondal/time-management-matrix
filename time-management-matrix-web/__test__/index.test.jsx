import { getAllByAltText, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders all images', () => {
    const {getAllByAltText} = render(<Home />)

    const headerTagLine = getAllByAltText("header-tag-line");
    const mainPage = getAllByAltText("main-page")
    const manageTask = getAllByAltText("manage-task")

    expect(headerTagLine.length).toEqual(1)
    expect(mainPage.length).toEqual(1)
    expect(manageTask.length).toEqual(1)
  })
})