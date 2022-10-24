import React, {useState} from 'react';
import Otp from './Otp';
import Verify from './Verify';

export default MobileVerify = () => {
  const [config, setConfig] = useState(false);
  const [phone, setPhone] = useState('');

  if (config) return <Verify phone={phone}/>;
  return <Otp setConfig={setConfig} setPhone={setPhone} />;
};
