import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4 thq-heading-2">
                        Unisciti a noi nella conservazione della pietra
                      </span>
                    </Fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <Fragment>
                      <p className="cta26-text5 thq-body-large">
                        Scopri come puoi contribuire alla nostra missione e
                        diventare parte della nostra comunità di scalpellini.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text6">Iscriviti ora</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
