import React from 'react';
import styled from '@emotion/styled'

import Cannon from './Cannon'

import codeIllustration from './svg/CodeIllustration.svg'
import * as ds from './design'

function App() {
  return (
    <Page>
      <Cannon />
      <img src={codeIllustration} alt="Code" />
      <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </Svg>
    </Page>
  );
}

const Page = styled.div({
  ...ds.flexCol,
  padding: 16,

  img: {
    width: 350
  }
})

const Svg = styled.svg({
  color: ds.colors.yellow,
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

export default App;
