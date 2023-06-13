import React from 'react'
import { SybType } from '../right-panel-star/right-panel-star.types'
import { motion } from 'framer-motion'
import styles from './details.module.scss'

const fieldsMap: Record<string, string> = {
  name: 'Name:',
  mass: 'Mass:',
  gender: 'Gender:',
  eye_color: 'Eye color:',
  gravity: 'Gravity:',
  orbital_period: 'Orbital period:',
  terrain: 'Terrain:',
  passengers: 'Passengers:',
  starship_class: 'Starship class:',
  max_atmosphering_speed: 'Max atmosphering speed:',
  empty_info: 'Информация отсутствует'
}

type Props = {
  details: SybType | null
}

const propsAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
}

export const Details = ({ details }: Props) => {
  return (
    <>
      {details ? (
        details.name ? (
          <section className={styles.main}>
            {Object.keys(details as SybType).map((key: string) => {
              return (
                <React.Fragment key={key}>
                  {fieldsMap[key] ? (
                    <>
                      <p className={styles.text}>
                        <span className={styles.bold}>
                          {fieldsMap[key]}
                        </span>{' '}
                        <motion.span {...propsAnimation}>
                          {details
                            ? details[key as keyof SybType]
                            : null}
                        </motion.span>
                      </p>
                    </>
                  ) : null}
                </React.Fragment>
              )
            })}
          </section>
        ) : (
          <section className={styles.main}>
            <motion.p
              className={styles.text}
              {...propsAnimation}
            >
              Информация отсутствует
            </motion.p>
          </section>
        )
      ) : null}
    </>
  )
}
