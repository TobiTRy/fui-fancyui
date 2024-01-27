import React from 'react';

import FancySingleInputs from '../../components/organisms/FancyCodeVerificationInput/FancyCodeVerificationInput';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { Card } from '@/components/molecules/Card';

// the home route for the single number Input
export default function SingleNumberInputRoute() {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false);
  const keyCode = '123456';

  const handler = (value: string) => {
    console.log(value);
    if (value === keyCode) {
      setIsSuccess(true);
      setErrorMessage('');
    } else {
      setIsSuccess(false);
      setErrorMessage('Wrong Code');
    }
  };

  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="Verification Input">
          <FancySingleInputs
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            automaticCase="upper"
            handler={handler}
          />
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
