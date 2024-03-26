import React from 'react';
import './SignInPopup.scss';
import SignInCnt from '@/View/components/Shared/SignInCnt/SignInCnt';

interface SignInPopupProps {
  isOpen: boolean; 
}

const SignInPopup: React.FC<SignInPopupProps> = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'signIn-popup open' : 'signIn-popup'}>
      <div className="signIn-content">
        {isOpen && <SignInCnt />}
      </div>
    </div>
  );
}

export default SignInPopup;
