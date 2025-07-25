import React, { useState } from 'react';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancySwitch from '../../components/organisms/FancySwitch/FancySwitch';
import Switch from '../../components/molecules/Switch/Switch';
import { Card } from '@/components/molecules/Card';
import { SVGCheckMark, SVGXlg } from '@/components/icons';

export default function FancySwitchRoute() {
  const [basicSwitch, setBasicSwitch] = useState(false);
  const [labelSwitch, setLabelSwitch] = useState(true);
  const [disabledSwitch, setDisabledSwitch] = useState(false);
  const [iconSwitch, setIconSwitch] = useState(false);
  const [descriptionSwitch, setDescriptionSwitch] = useState(false);

  const [testSwitch, setTestSwitch] = useState(false);

  return (
    <>
      <button onClick={() => setTestSwitch(!testSwitch)}>Toggle</button>
      <Card>
        <DesignWrapper>
          <DesignArea title="Basic Switch (Molecule)" style={{ alignItems: 'flex-start' }}>
            <Switch checked={basicSwitch} onChange={setBasicSwitch} sizeC="sm" themeType="primary" />
            <Switch checked={basicSwitch} onChange={setBasicSwitch} sizeC="md" themeType="secondary" />
            <Switch checked={basicSwitch} onChange={setBasicSwitch} sizeC="lg" themeType="success" />
            <Switch checked={true} disabled sizeC="md" themeType="primary" />
          </DesignArea>

          <DesignArea title="FancySwitch with Labels" style={{ alignItems: 'flex-start' }}>
            <FancySwitch label="Enable notifications" checked={testSwitch} onChange={setLabelSwitch} sizeC="md" />

            <FancySwitch
              label="Dark mode"
              description="Toggle between light and dark theme"
              checked={labelSwitch}
              onChange={setLabelSwitch}
              sizeC="md"
            />

            <FancySwitch
              label="Auto-save"
              alignSwitch="right"
              checked={labelSwitch}
              onChange={setLabelSwitch}
              sizeC="lg"
              themeType="success"
            />
          </DesignArea>

          <DesignArea title="Different Sizes" style={{ alignItems: 'flex-start' }}>
            <FancySwitch label="Extra Small" checked={labelSwitch} onChange={setLabelSwitch} sizeC="xs" />
            <FancySwitch label="Small" checked={labelSwitch} onChange={setLabelSwitch} sizeC="sm" themeType="primary" />
            <FancySwitch label="Medium" checked={labelSwitch} onChange={setLabelSwitch} sizeC="md" />
            <FancySwitch label="Large" checked={labelSwitch} onChange={setLabelSwitch} sizeC="lg" themeType="primary" />
            <FancySwitch label="Extra Large" checked={labelSwitch} onChange={setLabelSwitch} sizeC="xl" />
          </DesignArea>

          <DesignArea title="Different Themes" style={{ alignItems: 'flex-start' }}>
            <FancySwitch label="Primary" checked={true} onChange={setLabelSwitch} sizeC="md" themeType="primary" />
            <FancySwitch label="Secondary" checked={true} onChange={setLabelSwitch} sizeC="md" themeType="secondary" />
            <FancySwitch label="Success" checked={true} onChange={setLabelSwitch} sizeC="md" themeType="success" />
            <FancySwitch label="Warning" checked={true} onChange={setLabelSwitch} sizeC="md" themeType="warning" />
            <FancySwitch label="Error" checked={true} onChange={setLabelSwitch} sizeC="md" themeType="error" />
          </DesignArea>

          <DesignArea title="With Icons" style={{ alignItems: 'flex-start' }}>
            <FancySwitch
              label="Toggle with icons"
              checked={iconSwitch}
              onChange={setIconSwitch}
              icon={<SVGXlg />}
              checkedIcon={<SVGCheckMark />}
              sizeC="md"
              themeType="primary"
            />

            <Switch
              checked={iconSwitch}
              onChange={setIconSwitch}
              icon={<SVGXlg />}
              checkedIcon={<SVGCheckMark />}
              sizeC="lg"
              themeType="success"
            />
          </DesignArea>

          <DesignArea title="States & Alignment" style={{ alignItems: 'flex-start' }}>
            <FancySwitch label="Disabled Off" checked={false} disabled sizeC="md" themeType="primary" />

            <FancySwitch label="Disabled On" checked={true} disabled sizeC="md" themeType="primary" />

            <FancySwitch
              label="Left aligned"
              align="left"
              checked={descriptionSwitch}
              onChange={setDescriptionSwitch}
              sizeC="md"
              themeType="primary"
            />

            <FancySwitch
              label="Center aligned"
              align="center"
              checked={descriptionSwitch}
              onChange={setDescriptionSwitch}
              sizeC="md"
              themeType="primary"
            />

            <FancySwitch
              label="Right aligned"
              align="right"
              checked={descriptionSwitch}
              onChange={setDescriptionSwitch}
              sizeC="md"
              themeType="primary"
            />
          </DesignArea>

          <DesignArea title="With Descriptions" style={{ alignItems: 'flex-start' }}>
            <FancySwitch
              label="Email notifications"
              description="Receive email updates about your account activity and important changes"
              checked={descriptionSwitch}
              onChange={setDescriptionSwitch}
              sizeC="md"
              themeType="primary"
            />

            <FancySwitch
              label="Two-factor authentication"
              description="Add an extra layer of security to your account"
              alignSwitch="right"
              checked={descriptionSwitch}
              onChange={setDescriptionSwitch}
              sizeC="md"
              themeType="success"
            />
          </DesignArea>
        </DesignWrapper>
      </Card>
    </>
  );
}
