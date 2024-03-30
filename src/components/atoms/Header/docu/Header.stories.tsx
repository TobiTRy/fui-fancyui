import type { Meta, StoryObj } from '@storybook/react';

import { css } from 'styled-components';
import Header from '../Header';
import { FancySearchBar } from '../../../organisms/FancySearchBar';
import { HeaderTitleWithLogo } from '../../../molecules/HeaderTitleWithLogo';
import { FancyMiniProfile } from '../../../molecules/FancyMiniProfile';
import templateThemeType from '../../../../stories/templateSettingsForStorys/templatesForThemeType';
import { FancyGrid } from '@/components/templates/FancyGrid';
import { SwitchList } from '@/components/molecules/SwitchList';
import { Typography } from '@/components/atoms/Typography';
import { FancyPopover } from '@/components/shared/FancyPopover';
import logo from '../../../../FancyUI.png';
import { RawA } from '@/components/atoms/RawA';
import { Menu } from '@/components/molecules/Menue';

const meta = {
  component: Header,
  title: 'components/atoms/Header',
  parameters: {
    docs: {
      description: {
        component:
          'The Header component is a versatile, fully customizable header that integrates seamlessly into web projects. It supports theming, layering, and outline customization. This component is designed to be flexible, allowing developers to include various elements such as navigation bars and logos, making it suitable for a wide range of applications from simple to complex web interfaces.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 1),
    outlined: {
      description: 'If true, the header will have an outline',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background when the header is outlined',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the header.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const headerStyle = css`
  position: fixed;
  top: 10px;
  width: 80%;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
`;

export const Primary: Story = {
  render: (args) => (
    <Header {...args} externalStyle={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
        <HeaderTitleWithLogo title="Let´sTryIt" />
      </div>
      <FancySearchBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
        <FancyMiniProfile
          alignImage="left"
          title="@TobiTRy"
          subTitle="Tobias TRy is cool"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </div>
    </Header>
  ),
  args: {
    themeType: 'primary',
    outlined: false,
    layer: 1,
    outlinedBackgroundStrength: 0.5,
  },
};

export const Advancedheader: Story = {
  render: (args) => (
    <Header {...args} externalStyle={{ height: '44px', padding: '0 12px' }}>
      <FancyGrid grid={8} gap="12px">
        <FancyGrid.Item gridSpace={2}>
          <FancyGrid.Item.FlexBox align="center" justify="flex-start" className={'mooiiin'}>
            <RawA style={{ height: '100%' }} href="https://fui.cool">
              <Header.Logo className="logo">
                <Header.Logo.Image externalStyle={{ height: '100%' }}>
                  <img src={logo} />
                </Header.Logo.Image>

                <Header.Logo.Title variant="bodytextMd">FUII</Header.Logo.Title>
              </Header.Logo>
            </RawA>
          </FancyGrid.Item.FlexBox>
        </FancyGrid.Item>

        <FancyGrid.Item gridSpace={4}>
          <FancyGrid.Item.FlexBox align="flex-end" justify="center" externalStyle={{ paddingBottom: '4px' }}>
            <Header.Nav externalStyle={{ height: '100%' }}>
              <SwitchList
                flexBoxProps={{ align: 'center', justify: 'center' }}
                externalStyle={{ paddingBottom: '4px' }}
              >
                <Typography variant="bodytextMd">mooin</Typography>
                <Typography variant="bodytextMd">mooin</Typography>
                <Typography variant="bodytextMd">mooin</Typography>
                <Typography variant="bodytextMd">mooin</Typography>
              </SwitchList>
            </Header.Nav>
          </FancyGrid.Item.FlexBox>
        </FancyGrid.Item>
        <FancyGrid.Item gridSpace={2}>
          <FancyGrid.Item.FlexBox align="center" justify="flex-end">
            <FancyPopover
              offsetY={5}
              contentComponent={
                <Menu>
                  <Menu.Item label="HIii"></Menu.Item>
                  <Menu.Item label="Hiii"></Menu.Item>
                </Menu>
              }
              refComponent={
                <FancyMiniProfile
                  sizeC={'sm'}
                  title="mooin"
                  src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
                />
              }
            ></FancyPopover>
          </FancyGrid.Item.FlexBox>
        </FancyGrid.Item>
      </FancyGrid>
    </Header>
  ),
  args: {
    themeType: 'primary',
    outlined: true,
    layer: 1,
    outlinedBackgroundStrength: 0.5,
  },
};
