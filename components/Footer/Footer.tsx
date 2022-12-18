import React from 'react';
import { GLOBAL_CONSTANT } from 'static/constants/GlobalConstant';

type FooterProps = {};

export const Footer = ({}: FooterProps) => (
  <footer className='text-center'>
    <span>Developed By - {GLOBAL_CONSTANT.USER}</span>
  </footer>
);
