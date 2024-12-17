import { FancyButton } from '@/components/organisms/FancyButton';
import { TLayer } from '@/types';
import themeStore from '../../design/theme/themeStore/themeStore';

export default function ColorGeneratorRoute() {
  const theme = themeStore((state) => state.theme);
  const switchTheme = themeStore((state) => state.switchTheme);
  //get keys of primary
  const primaryKeys = Object?.keys(theme.color.primary).map((key) => parseInt(key));
  const accentKeys = Object?.keys(theme.color.accent).map((key) => parseInt(key));
  const secondaryKeys = Object?.keys(theme.color.secondary).map((key) => parseInt(key));
  const infoKeys = Object?.keys(theme.color.info).map((key) => parseInt(key));
  const warningKeys = Object?.keys(theme.color.warning).map((key) => parseInt(key));
  const errorKeys = Object?.keys(theme.color.error).map((key) => parseInt(key));
  const successKeys = Object?.keys(theme.color.success).map((key) => parseInt(key));

  return (
    <>
      <div style={{ display: 'flex' }}>
        <FancyButton label="Switch Theme" onClick={() => switchTheme()} />

        <div>
          {primaryKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.primary[color as TLayer] }}
              ></div>
            );
          })}
        </div>

        <div>
          {secondaryKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.secondary[color as TLayer] }}
              ></div>
            );
          })}
        </div>
        <div>
          {accentKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.accent[color as TLayer] }}
              ></div>
            );
          })}
        </div>
        <div>
          {infoKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.info[color as TLayer] }}
              ></div>
            );
          })}
        </div>

        <div>
          {warningKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.warning[color as TLayer] }}
              ></div>
            );
          })}
        </div>
        <div>
          {errorKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.error[color as TLayer] }}
              ></div>
            );
          })}
        </div>
        <div>
          {successKeys?.map((color, index) => {
            return (
              <div
                key={index}
                style={{ width: '100px', height: '100px', backgroundColor: theme.color.success[color as TLayer] }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
