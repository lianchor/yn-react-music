import  { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './style';

import React, { memo } from 'react'

export default memo(function YNAppHeader() {
  return (
    <HeaderWrapper>
     <div className="content wrap-v1"></div>
     <div className="divider"></div>
    </HeaderWrapper>
  )
})
