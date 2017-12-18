import PropTypes from 'prop-types'

import theme from '../styles/theme'

import Container from './container'

const Section = ({title, subtitle, children, background}) => {
  const backgroundColor = background ? '-' + background : ''
  return (
    <section className={`section${backgroundColor}`}>
      <Container>
        {title && <h2 className='section__title'>{title}</h2>}
        {subtitle && <p className='section__subtitle'>{subtitle}</p>}

        {children}
      </Container>
      <style jsx>{`
        section {
          padding: 5em 0;
          background-color: ${theme.backgroundWhite};
          color: ${theme.colors.black};
        }

        .section-grey {
          background-color: ${theme.backgroundGrey};
          color: ${theme.colors.black};
        }

        .section-dark {
          background-color: ${theme.backgroundDark};
          color: ${theme.colors.white};
        }

        .section-primary {
          background-color: ${theme.backgroundColor};
          color: ${theme.colors.white};
        }

        .section__subtitle {
          margin: 0 auto 2em;
          max-width: 640px;
          font-size: 1.3em;
          font-style: italic;
          text-align: center;
          margin-bottom: 0;
        }

        .section__subtitle:not(:last-child) {
          margin-bottom: 3em;
        }

        .section__title + .section__subtitle {
          margin-top: -3em;
        }

        .section__title {
          margin: 0 0 3em;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.oneOf([
    'white',
    'grey',
    'dark',
    'color'
  ])
}

Section.defaultProps = {
  title: null,
  subtitle: null,
  children: null,
  background: null
}

export default Section
