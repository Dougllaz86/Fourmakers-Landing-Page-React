import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text31 thq-body-small">
                  Desenvolva talentos por meio de desafios estratégicos
                </span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats2-text30 thq-heading-2">
                  Estatísticas do Fourmakers
                </h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats2-text23 thq-body-large">
                  Engaje, reconheça e valorize os colaboradores
                </p>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats2-text21 thq-heading-2">
                      Conexões significativas
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text25 thq-body-small">
                      Promoção de conexões significativas
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats2-text22 thq-heading-2">
                      Desafios estratégicos
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text26 thq-body-small">
                      Desenvolvimento de talentos
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats2-text27 thq-heading-2">
                      Impacto no mercado global
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text28 thq-body-small">
                      Geração de impacto no mercado global
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats2-text24 thq-heading-2">
                      Inovação e crescimento contínuo
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text29 thq-body-small">
                      Promoção da inovação e crescimento dos profissionais
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  image1Alt: 'Imagem representativa de conexões significativas',
  stat2: undefined,
  content2: undefined,
  stat4: undefined,
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  stat1Description: undefined,
  stat2Description: undefined,
  stat3: undefined,
  stat3Description: undefined,
  stat4Description: undefined,
  heading1: undefined,
  content1: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2: PropTypes.element,
  content2: PropTypes.element,
  stat4: PropTypes.element,
  image1Src: PropTypes.string,
  stat1Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat4Description: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Stats2
