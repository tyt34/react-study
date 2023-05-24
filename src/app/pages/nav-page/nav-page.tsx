import React from 'react'
import { useNavigate } from 'react-router-dom'
import './nav-page.scss'
import { navigateConfig } from './config.nav-page'

export const NavPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="navigation">
        <h1>Pages:</h1>
        <nav className="navigation__list">
          {navigateConfig.map((page) => (
            <a
              className="navigation__link"
              href={page.href}
              onClick={() => {
                navigate(page.navigate)
              }}
            >
              {page.title}
            </a>
          ))}
        </nav>
      </section>
    </>
  )
}
