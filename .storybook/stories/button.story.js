import "../../node_modules/bootstrap/scss/bootstrap.scss";
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../final/app/common/button/button';
import SuccessButton from '../../final/app/common/button/success-button/success-button.jsx';

storiesOf('Button', module)
  .add('with text', () => (
    <Button message={'Hello World'} handleClick={() => { console.log('clicked') }} />
  ));

storiesOf('SuccessButton', module)
  .add('with text', () => (
    <SuccessButton message={'Hello World'} />
  ));
