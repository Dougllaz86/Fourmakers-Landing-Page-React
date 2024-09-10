import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact2.css'

const Contact2 = (props) => {
  return (
    <div className="contact2-contact20 thq-section-padding">
      <div className="contact2-max-width thq-section-max-width">
        <div className="contact2-section-title">
          <span>
            {props.content2 ?? (
              <Fragment>
                <span className="contact2-text21 thq-body-small">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact2-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact2-text26 thq-heading-2">
                    Entre em contato conosco
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact2-text23 thq-body-large">
                    <span>
                      Estamos aqui para ajudar. Entre em contato conosco para
                      saber mais sobre como o Fourmakers pode impulsionar o
                      desenvolvimento de talentos na sua organização.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="thq-img-ratio-16-9"
        />
        <div className="contact2-row">
          <div className="contact2-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact2-contact-info1">
              <div className="contact2-content3">
                <h3 className="contact2-text13 thq-heading-3">Email</h3>
                <p>
                  {props.content3 ?? (
                    <Fragment>
                      <p className="contact2-text28 thq-body-large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact2-text19 thq-body-small">
                      contato@fourmakers.com
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact2-contact-info2">
              <div className="contact2-content5">
                <h3 className="contact2-text15 thq-heading-3">Phone</h3>
                <p>
                  {props.content4 ?? (
                    <Fragment>
                      <p className="contact2-text22 thq-body-large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.phone1 ?? (
                  <Fragment>
                    <span className="contact2-text29 thq-body-small">
                      +55 11 1234-5678
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact2-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact2-contact-info3">
              <div className="contact2-content7">
                <h3 className="contact2-text17 thq-heading-3">Office</h3>
                <p>
                  {props.content5 ?? (
                    <Fragment>
                      <p className="contact2-text27 thq-body-large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in ero.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <span>
                {props.address1 ?? (
                  <Fragment>
                    <span className="contact2-text20 thq-body-small">
                      Av. Exemplo, 123 - São Paulo, Brasil
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

Contact2.defaultProps = {
  email1: undefined,
  address1: undefined,
  content2: undefined,
  imageAlt: 'image',
  content4: undefined,
  content1: undefined,
  heading1: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1607946037112-0bff3705ace7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDg5NDA0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content5: undefined,
  content3: undefined,
  phone1: undefined,
}

Contact2.propTypes = {
  email1: PropTypes.element,
  address1: PropTypes.element,
  content2: PropTypes.element,
  imageAlt: PropTypes.string,
  content4: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  imageSrc: PropTypes.string,
  content5: PropTypes.element,
  content3: PropTypes.element,
  phone1: PropTypes.element,
}

export default Contact2
