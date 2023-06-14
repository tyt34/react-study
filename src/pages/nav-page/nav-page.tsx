import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigateConfig } from './config.nav-page'

import './nav-page.scss'

export const NavPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="navigation">
        <h1>Pages:</h1>
        <nav className="navigation__list">
          {navigateConfig.map((page) => (
            <a
              key={page.title}
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
