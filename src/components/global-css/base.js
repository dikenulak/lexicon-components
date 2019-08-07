import { css } from 'styled-components';
import { PRIMARY } from '../../data/enums/GeneralConstants';
import Colors from '../../utils/theme/color';

// TODO handle global concerns
const base = css`
  //Base Styles Here
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .scrollable-body {
    max-height: calc(100vh - 200px);
    overflow: scroll;
  }
  .collapsible-body-tr td.collapsible-body-td{
    padding: 0px;
  }
  .accent-font {
    color: ${Colors.grey.G1100};
  }
  .disabled {
	  pointer-events: none !important;
	  cursor: default;
  }
  .status-label {
    border: 1px solid transparent;
    display: inline-block;
    font-size: 10px;
    border-radius: 2px;
    padding: 3px;
    
    &.active {
      border-color: #47c464;
      color: #287d3c;
    }
    
    &.passive {
    border-color: #ff8f39;
      color: #b95000;
    }
  }
`;

export default base;
