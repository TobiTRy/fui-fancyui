import { useState } from 'react';
import './App.css';

import FancyButton from './Components/UI/Molecules/FancyButton/FancyButton';
import FancyInput from './Components/UI/Molecules/FancyInput/FancyInputOld';
import EditBarIconButton from './Components/UI/Atoms/EditBarIcon/EditBarIcon';
import SpeedDialButton from './Components/UI/Molecules/SpeedDailButton/SpeedDail';
import EditBarModule from './Components/UI/Organisms/EditBarModule/EditBarModule';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ColorPicker from './Components/UI/Organisms/ColorPicker/ColorPicker';

import ToastMessage from './Components/UI/Organisms/ToastMessage/ToastMessage';
import { useModalModuleStore } from './Components/UI/Organisms/ModalModule/ModalModule.state';
import { useToastMessageStore } from './Components/UI/Organisms/ToastMessage/ToastMessage.state';
import ModalModule from './Components/UI/Organisms/ModalModule/ModalModule';
import FancyXButton from './Components/UI/Atoms/FancyXButton';
import styled from 'styled-components';
import FancyA from './Components/UI/Molecules/FancyA/FancyA';
import DropDownMenueModule from './Components/UI/Organisms/DropDownMenueModule/DropDownMenueModule';
import { useDropDownMenueModuleStore } from './Components/UI/Organisms/DropDownMenueModule/DropDownMenueModule.state';
import FancyHR from './Components/UI/Atoms/FancyHR';
import FancySwipeUpModal from './Components/UI/Molecules/SwipeUpModal/SwipeUpModal';
import { useFancySwipeUpModalStore } from './Components/UI/Organisms/FancySwipeUpModal/FancySwipeUpModal.state';
import SwipeUpModal from './Routes/SwipeUpModal/SwipeUpModal';
import SingleNumberInputRoute from './Routes/SingleNumberInputRoute/SingleNumberInputRoute';
import DatePickerRoute from './Routes/DatePickerRoute/DatePickerRoute';
import InputsRoute from './Routes/InputsRoute/InputsRoute';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
  </svg>
);

const switchValues = [
  {
    label: 'Test1',
    key: '1',
    icon: Icon,
  },
  {
    label: 'test2',
    key: '2',
    icon: Icon,
  },
  {
    label: 'test3',
    key: '3',
    icon: Icon,
  },
];

const menuItems = [
  {
    label: 'Item 1',
    value: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
      </svg>
    ),
  },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
];

const array = [
  {
    title: 'Submit',
    onClick: () => {
      useModalModuleStore
        .getState()
        .openModal({ headline: { title: 'test', subTitle: 'test' }, content: <div>hi</div>, bottomLine: { buttons: array } });
    },
    secondaryButton: true,
    disabled: false,
  },
  {
    title: 'discard',
    onClick: () => {
      console.log('discard');
    },
    secondaryButton: false,
    disabled: false,
  },
  {
    title: 'cancel',
    onClick: () => {
      console.log('cancel');
    },
    secondaryButton: false,
    disabled: false,
  },
];

const dropDownArray = [
  <FancyA icon={svg} label="Test" design="transparent" hoverColor={'primary'} />,
  <FancyHR />,
  <FancyA icon={svg} label="Test" design="transparent" hoverColor={'primary'} />,
  <FancyA icon={svg} label="Test" design="transparent" hoverColor={'primary'} />,
  <FancyA
    icon={svg}
    label="Test"
    design="transparent"
    hoverColor={'primary'}
    onClick={() => useDropDownMenueModuleStore.getState().close()}
  />,
  <FancyHR />,
];

const StyledTestDiv = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
`;

function App() {
  const addToast = useToastMessageStore((state) => state.addToast);
  const createModal = useModalModuleStore((state) => state.openModal);
  const closeModal = useModalModuleStore((state) => state.closeModal);
  const toggleDropDown = useDropDownMenueModuleStore((state) => state.toggle);

  const [activated, setActivated] = useState(false);

  const handleClick = () => {
    addToast({
      title: 'My Title of the titel ',
      message:
        'This is my toast message hjsadhjgdshjagkkk kklasdjkljsklajklds kklajklasd jsakld klnsjklkljdsa jkljsa lkaklkls klaklkls klaklsk alkasl klkklskda kllkas.',
      time: 50500,
      type: 'success',
    });
  };

  const handleModalCreation = () => {
    createModal(
      {
        headline: { title: 'test', subTitle: 'test' },
        content: <StyledTestDiv>hi</StyledTestDiv>,
        bottomLine: {
          buttons: [
            {
              title: 'submit me',
              onClick: () => {
                closeModal('test111');
              },
              secondaryButton: false,
            },
          ],
        },
      },
      'test111'
    );
  };

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul style={{display: 'flex', listStyle:'none', gap: '12px'}}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/swipeupmodal">SwipeUpModal</Link>
              </li>
              <li>
                <Link to="/singleNumberInput">SingleNumberInput</Link>
              </li>
              <li>
                <Link to="/datePicker">datePicker</Link>
              </li>
              <li>
                <Link to="/inputsRoute">Inputs</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/swipeupmodal" element={<SwipeUpModal />} />
            <Route path="/singleNumberInput" element={<SingleNumberInputRoute />} />
            <Route path="/datePicker" element={<DatePickerRoute />} />
            <Route path="/inputsRoute" element={<InputsRoute />} />
            <Route path="/" element={<SwipeUpModal />} />
          </Routes>
        </div>
      </Router>
    </div>
    // <>
    //   <div className="App">
    //     <FancySwipeUpModal />
    //     <section>
    //     </section>
    //     <section>
    //       <DropDownMenueModule items={dropDownArray}/>
    //     </section>
    //     <FancyA icon={Icon}/>
    //     <FancyA icon={Icon} label='Open SwipeUp'/>
    //     <FancyXButton design="accent" onClick={() => toggleDropDown()} />
    //     <ModalModule />
    //     <ToastMessage />
    //     <section>
    //       <FancyButton icon={svg} label='Open SwipeUp' onClick={() => openModal(true)}/>
    //      </section>
    //     <section>
    //       <FancyButton size="small" wide={true} design="accent" outlined={true} onClick={() => handleModalCreation()} label="Modal"></FancyButton>
    //     </section>
    //     <section>
    //       <FancyButton size="small" wide={true} design="accent" onClick={handleClick} label="Toaster"></FancyButton>
    //     </section>
    //     <section>
    //       <EditBarIconButton label="Test" icon={svg} active={activated} handler={() => setActivated(!activated)} />
    //     </section>
    //     <section>
    //       <FancyRangeSlider displayNumber={true} labelAlign={'left'} icon={svg} maxValue={50} minValue={-50} label={'Im tobi tester'} />
    //     </section>
    //     <section>
    //       <FancyInput label="Username" value={'tes'} icon={svg} align={'left'} />
    //     </section>
    //     <section>
    //       <FancyInput value={'tes'} icon={svg} align={'left'} />
    //     </section>
    //     <section>
    //       <FancyDropDownSelect
    //         icon={svg}
    //         label="Test Done Other"
    //         options={['Test', 'Test2', 'Test3', 'Test3', 'Test3', 'Test3']}
    //         labelAlign="left"
    //         inputTextAlign="left"
    //       />
    //     </section>
    //     <section>
    //       <SpeedDialButton items={menuItems} />
    //     </section>

    //     <EditBarModule active={activated} sectionType={'sectionBox'} />

    //     <section>
    //       <ColorPicker
    //         outputFormat={'rgba'}
    //         colorArea={true}
    //         hueSlider={true}
    //         opacitySlider={true}
    //         displayColor={true}
    //         colorOutput={true}
    //         handler={(color: any) => console.log(color)}
    //       />
    //     </section>
    //   </div>
    // </>
  );
}

export default App;
