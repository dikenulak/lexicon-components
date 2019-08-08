import styled from 'styled-components';
import React, { Component, Fragment } from 'react';
import { getDisplayName } from './component';
import Alert from '../../components/Alert/Alert';
import { ALERT_TYPE } from '../../data/enums/AlertType';

const config = {
  [ALERT_TYPE.SUCCESS]: {
    timeout: 5000,
    title: 'Success',
    iconName: 'check-circle-full',
  },
  [ALERT_TYPE.DANGER]: {
    timeout: 5000,
    title: 'Danger',
    iconName: 'exclamation-full',
  },
  [ALERT_TYPE.INFO]: {
    timeout: 4000,
    title: 'Info',
    iconName: 'info-circle',
  },
  [ALERT_TYPE.WARNING]: {
    timeout: 2000,
    title: 'Warning',
    iconName: 'warning-full',
  },
};

export default function withAlert() {
  return (SourceComponent) => {
    class AlertBase extends Component {
      constructor(props) {
        super(props);
        this.state = {
          show: false,
          type: ALERT_TYPE.INFO,
          message: '',
        };
      }

      handleAlertChange = (type = ALERT_TYPE.INFO, message = 'This is a general information', callBack = () => null) => {
        this.setState({
          show: true,
          type,
          message,
        }, () => {
          setTimeout(() => {
            callBack();
          }, 1000);
          this.attachTimeOut();
        });
      };

      attachTimeOut = () => {
        const { type } = this.state;
        const self = this;
        setTimeout(() => {
          if (self.state.show) {
            this.resetAlert();
          }
        }, config[type].timeout);
      };

      resetAlert = () => {
        this.setState({
          show: false,
          type: ALERT_TYPE.INFO,
          message: '',
        });
      };

      render() {
        const {
          show,
          type,
          message,
        } = this.state;
        const { ...oldProps } = this.props;
        const newProps = { displayAlert: this.handleAlertChange };
        return (
          <Fragment>
            <SourceComponent
              {...oldProps}
              {...newProps}
            />
            <Fragment>
              {show && (
                <AlertPosition>
                  <Alert
                    type={type}
                    active={show}
                    onChange={this.resetAlert}
                    iconName={config[type].iconName}
                    title={config[type].title}
                  >
                    {message}
                  </Alert>
                </AlertPosition>
              )}
            </Fragment>
          </Fragment>
        );
      }
    }

    AlertBase.displayName = `withAlert(${getDisplayName(SourceComponent)})`;
    return AlertBase;
  };
}

const AlertPosition = styled.div`
  position: fixed;
  bottom: 24px;
`;
