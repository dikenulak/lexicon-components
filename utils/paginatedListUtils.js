import React from 'react';
import { EVENT_OPERATION } from '../data/enums/EventOperation';
import { Icon } from '../components';

const tableData = (title, type, classNames) => (
  <th key={title} className={`${type && 'text-right'} ${ classNames && classNames}`}>
    {title}
  </th>
);

const rowActionHolders = (element = {}, onClickHandler = () => null, type = [], attribute = 'id') => (
  <td className="actions text-right" onClick={(e) => e.stopPropagation()}>
    {
      type.includes(EVENT_OPERATION.UPDATE) && (
      <span onClick={() => onClickHandler(EVENT_OPERATION.UPDATE, element, attribute)}>
        <Icon iconName="pencil" />
      </span>
      )
    }
    {
      type.includes(EVENT_OPERATION.DELETE) && (
      <span onClick={() => onClickHandler(EVENT_OPERATION.DELETE, element, attribute)}>
        <Icon iconName="trash" />
      </span>
      )
    }
  </td>
);

export { tableData, rowActionHolders };
