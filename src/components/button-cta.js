import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './button-cta.css'

const ButtonCTA = (props) => {
  return (
    <div className={`button-ctacta ${props.rootClassName} `}>
      <span>
        {props.text ?? (
          <Fragment>
            <span className="button-cta-text2">
              <span>Solicite demonstração</span>
            </span>
          </Fragment>
        )}
      </span>
      <img
        alt={props.bsArrowRightShortAlt}
        src={props.bsArrowRightShortSrc}
        loading="lazy"
        className="button-cta-bs-arrow-right-short"
      />
    </div>
  )
}

ButtonCTA.defaultProps = {
  bsArrowRightShortAlt: 'BsArrowRightShortI111',
  bsArrowRightShortSrc: '/external/bsarrowrightshorti111-00m.svg',
  text: undefined,
  rootClassName: '',
}

ButtonCTA.propTypes = {
  bsArrowRightShortAlt: PropTypes.string,
  bsArrowRightShortSrc: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ButtonCTA
