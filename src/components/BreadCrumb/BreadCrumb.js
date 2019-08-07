import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BreadCrumbUlStyled, BreadCrumbLiStyled} from './BreadCrumbStyledIndex';

const BreadCrumb = ({ list = [] }) => (
  <BreadCrumbUlStyled>
    {list.map(item => (
      <BreadCrumbLiStyled key={item.id} className={item.active ? 'active' : ''}>
        <Link to={item.path}>{item.title}</Link></BreadCrumbLiStyled>
    ))}
  </BreadCrumbUlStyled>
);

BreadCrumb.propTypes = {list: PropTypes.instanceOf(Array)};

BreadCrumb.defaultProps = {list: []};
export default BreadCrumb;
