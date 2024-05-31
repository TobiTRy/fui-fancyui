import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { PasswordStrengthMeter } from '@/components/atoms/PasswordStrengthMeter';
import { useState } from 'react';

export default function PasswordStrengthMeterRoute() {
  const [password, setPassword] = useState('');
  const [compareWith, setCompareWith] = useState('');

  return (
    <DesignArea title="PasswordStrengthMete">
      <DesignWrapper>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" value={compareWith} onChange={(e) => setCompareWith(e.target.value)} />
        <PasswordStrengthMeter password={password} compareWith={[...compareWith]} />
      </DesignWrapper>
    </DesignArea>
  );
}
