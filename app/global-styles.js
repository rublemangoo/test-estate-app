import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
`;

export default GlobalStyle;