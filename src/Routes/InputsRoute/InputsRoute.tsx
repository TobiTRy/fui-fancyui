import React, { ChangeEvent, useState } from 'react';
import { css } from 'styled-components';

import FancyPasswordInput from '../../components/organisms/FancyPasswordInput/FancyPasswordInput';
import FancyTextInput from '../../components/organisms/FancyTextInput/FancyTextInput';
import FancyNumberInput from '../../components/organisms/FancyNumberInput/FancyNumberInput';
import FancyDropDownSelect from '../../components/organisms/FancyDropDownSelect/FancyDropDownSelect';
import FancyDateInput from '../../components/organisms/FancyDateInput/FancyDateInput';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import FancyDateDropDown from '../../components/templates/FancyDateDropDown/FancyDateDropDown';
import { Card } from '@/components/molecules/Card';
import LabeledInput from '@/components/molecules/LabeledInput/LabeledInput';
import { TextInput } from '@/components/atoms/TextInput';
import FancyRange from '@/components/organisms/FancyRangeSlider/FancyRangeSlider';

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
  </svg>
);

export default function InputsRoute() {
  const [text, setText] = useState<string>('');
  const [test, setTest] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [dropDown, setDropDown] = useState<string>('');
  const [dropDown2, setDropDown2] = useState<string>('test');
  const [password, setPassword] = useState<string>('');
  const [newInput, setNewInput] = useState<string>('');

  const newInputHandler = (value: ChangeEvent<HTMLInputElement>) => {
    setNewInput(value.target.value);
  };

  const testHandler5 = (value: ChangeEvent<HTMLInputElement>) => {
    setPassword(value.target.value);
  };

  const testHandler2 = (value: ChangeEvent<HTMLInputElement>) => {
    console.log('e', value.target.value, 'sate', test);
    console.log(Number(value.target.value));
    setTest(value.target.value);
  };

  const testHandler = (value: ChangeEvent<HTMLInputElement>) => {
    setText(value.target.value);
  };

  const testHandler3 = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setDropDown(value);
    console.log(value, 'main');
  };

  const testHandler33 = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setDropDown2(value);
    console.log(value, 'main');
  };

  const testHandler4 = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
  };
  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const row = css`
    flex-direction: row;
  `;

  return (
    <Card>
      <DesignWrapper>
        <FancyRange
          id="hi"
          layer={2}
          label="HIii"
          min={10}
          max={100}
          onChange={testHandler4}
          displayNumberInput
          align="left"
        />
        <DesignArea title="Password Input">
          <LabeledInput
            label="Password"
            inputElement={<TextInput id="Hi" onChange={newInputHandler} value={newInput} />}
          />
        </DesignArea>

        <DesignArea title="Password Input">
          <FancyNumberInput
            decimalPlaces={4}
            layer={1}
            step={0.001}
            label="Text"
            onChange={testHandler2}
            value={test}
            systemMessage={{ type: 'error', message: 'This is an error message' }}
          />
          <FancyNumberInput
            decimalPlaces={4}
            step={0.001}
            label="Text"
            onChange={testHandler2}
            value={test}
            placeholder="test45454554"
            systemMessage={{ type: 'success', message: 'This is an error message' }}
          />
          <FancyNumberInput
            decimalPlaces={4}
            step={0.001}
            label="Text"
            onChange={testHandler2}
            value={test}
            placeholder="test45454554"
            systemMessage={{ type: 'info', message: 'This is an error message' }}
          />
        </DesignArea>
        <DesignArea title="Password Input111">
          <FancyPasswordInput label="Password" value={password} onChange={testHandler5} align="left" />
          <FancyPasswordInput icon={svg} align={'center'} label="Password" value={password} onChange={testHandler5} />
        </DesignArea>
        <DesignArea title="Text Input">
          <FancyTextInput label="Text" value={text} onChange={testHandler} />
          <FancyTextInput
            icon={svg}
            label="Text"
            value={text}
            onChange={testHandler}
            align="center"
            placeholder="test45454554"
          />
          <FancyTextInput
            placeholder="Hiiii"
            systemMessage={{ type: 'success', message: 'moooiin' }}
            value={text}
            onChange={testHandler}
          />
        </DesignArea>
        <DesignArea title="Number Input">
          <FancyNumberInput icon={svg} label="Text" onChange={testHandler2} value={test} step={0.1} min={0} max={100} />
          <FancyNumberInput
            icon={svg}
            label="Text"
            onChange={testHandler2}
            value={test}
            align="center"
            disabled={true}
            placeholder="Hiii"
          />
        </DesignArea>
        <DesignArea title="Number Input AutoWidth" style={row}>
          <FancyNumberInput label="Test" min={10} max={100} onChange={testHandler2} value={test} autoWidth={true} />
          <FancyNumberInput
            icon={svg}
            label="Test"
            onChange={testHandler2}
            align="center"
            value={test}
            autoWidth={true}
          />
        </DesignArea>
        <DesignArea title="DropDown Input">
          <FancyDropDownSelect
            label="DropDown"
            onChange={testHandler3}
            value={dropDown}
            values={['Test', 'Test2', 'Test3', 'Test3', 'Test3', 'Test3']}
          />
          <FancyDropDownSelect icon={svg} label="DropDown" value={dropDown2} onChange={testHandler33} align="center">
            <option value="test">Test</option>
            <option value="test2">Test2</option>
            <option value="test3">Test3</option>
            <option value="test4">Test4</option>
            <optgroup label="test">
              <option value="test5">Test5</option>
              <option value="test6">Test6</option>
              <option value="test7">Test7</option>
              <option value="test8">Test8</option>
            </optgroup>
          </FancyDropDownSelect>
        </DesignArea>
        <DesignArea title="Date Input">
          <FancyDateInput value={date} label="Date" onChange={dateHandler} />
          <FancyDateInput value={date} icon={svg} label="Date" onChange={dateHandler} />
        </DesignArea>
        <DesignArea title="DateDropDown Input">
          <FancyDateDropDown type="day" label="Day" onChange={testHandler3} />
          <FancyDateDropDown type="month" label="Month" onChange={testHandler3} />
          <FancyDateDropDown type="year" label="Year" onChange={testHandler3} />
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
