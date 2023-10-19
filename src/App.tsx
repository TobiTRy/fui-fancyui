import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useFancyModalStore } from './Components/UI/Organisms/FancyModal/FancyModal.state';

import SwipeUpModal from './Routes/SwipeUpModal/SwipeUpModal';
import SingleNumberInputRoute from './Routes/SingleNumberInputRoute/SingleNumberInputRoute';
import DatePickerRoute from './Routes/DatePickerRoute/DatePickerRoute';
import InputsRoute from './Routes/InputsRoute/InputsRoute';
import CradRoute from './Routes/CardRoute/CradRoute';
import ModalRoute from './Routes/ModalRoute/ModalRoute';
import ColorPickerRoute from './Routes/ColorPickerRoute/ColorPickerRoute';
import HeaderRoute from './Routes/HeaderRoute/HeaderRoute';
import ToastMessageRoute from './Routes/ToastMessageRoute/ToastMessageRoute';
import Typogrphy from './Routes/Typography/Typogrphy';
import ButtonRoute from './Routes/BottonRoute/ButtonRoute';
import FancyDropDownMenueRoute from './Routes/FancyDropDownMenueRoute/FancyDropDownMenueRoute';
import EditBarRoute from './Routes/EditBarRoute/EditBarRoute';
import TabSwitchRoute from './Routes/TabSwitchRoute/TabSwitchRoute';
import SpeedDailRoute from './Routes/SpeedDailRoute/SpeedDailRoute';
import ExperimentalRoute from './Routes/ExperimentalRoute/ExperimentalRoute';
import NavBarHandy from './Routes/NavBarHandy/NavBarHandy';
import FancySearchBarRoute from './Routes/FancySearchBarRoute/FancySearchBarRoute';
import FancyImageRoute from './Routes/FancyImageRoute/FancyImageRoute';
import { styled } from 'styled-components';
import PageSwitchRoute from './Routes/PageSwitchRoute/PageSwitchRoute';
import LoadingSpinnerRoute from './Routes/LoadingSpinnerRoute/LoadingSpinnerRoute';
import FancyProfilePictureRoute from './Routes/FancyProfilePictureRoute/FancyProfilePictureRoute';
import FancyMiniProfile from './Components/UI/Molecules/FancyMiniProfile/FancyMiniProfile';
import MiniProfileroute from './Routes/MiniProfileRoute/MiniProfileroute';
import ChipsRoute from './Routes/ChipsRoute/ChipsRoute';
import CheckboxRoute from './Routes/CheckboxRoute/CheckboxRoute';
import ColorGeneratorRoute from './Routes/ColorGeneratorRoute/ColorGeneratorRoute';
import { TUiColorsType, updateThemeColors } from './Components/UI/Design/color/designColor';
import themeStore from './Components/UI/Design/color/themeStore';
import GlobalStyle from './GlobalStyle';
import { FancySwipeUpModal } from './lib';

// const Icon = (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
//   </svg>
// );

// const svg = (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
//     <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
//   </svg>
// );
const OwnUl = styled.ul<{theme: TUiColorsType}>`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px;
  padding: 0px;
  justify-content: center;

  li {
    a {
      color: ${({theme}) => theme.secondary[0]};
      text-decoration: none;
    }
  }
`;



function App() {
  const theme = themeStore((state) => state.theme);

  console.log(theme, 'app')

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <FancySwipeUpModal appendToDomID='modal'/>
        <div>
          <nav>
            <OwnUl>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/swipeupmodal">SwipeUpModal</Link>
              </li>
              <li>
                <Link to="/modal">Modal</Link>
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
              <li>
                <Link to="/card">Card</Link>
              </li>
              <li>
                <Link to="/colorPicker">colorPicker</Link>
              </li>
              <li>
                <Link to="/header">Header</Link>
              </li>
              <li>
                <Link to="/toastMessage">ToastMessage</Link>
              </li>
              <li>
                <Link to="/typography">Typography</Link>
              </li>
              <li>
                <Link to="/dropdownmenue">DropDownmenue</Link>
              </li>
              <li>
                <Link to="/button">button</Link>
              </li>
              <li>
                <Link to="/editbar">Editbar</Link>
              </li>
              <li>
                <Link to="/tabswitch">TabSwitch</Link>
              </li>
              <li>
                <Link to="/speedDail">Speeddail</Link>
              </li>
              <li>
                <Link to="/handyNav">NavBarHandy</Link>
              </li>
              <li>
                <Link to="/searchBar">Search Bar</Link>
              </li>
              <li>
                <Link to="/image">Image</Link>
              </li>
              <li>
                <Link to="/fancypagelist">FancyPageList</Link>
              </li>
              <li>
                <Link to="/LoadingSpinnerRoute">LoadingSpinnerRoute</Link>
              </li>
              <li>
                <Link to="/fancyProfilePicture">ProfilePicture</Link>
              </li>
              <li>
                <Link to="/miniProfile">MiniProfile</Link>
              </li>
              <li>
                <Link to="/chips">Chips</Link>
              </li>
              <li>
                <Link to="/checkbox">Checkbox</Link>
              </li>
              <li>
                <Link to="/colorGenerator">ColorGenerator</Link>
              </li>
              <li>
                <Link to="/experimental">Experimental</Link>
              </li>
            </OwnUl>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/swipeupmodal" element={<SwipeUpModal />} />
            <Route path="/modal" element={<ModalRoute />} />
            <Route path="/singleNumberInput" element={<SingleNumberInputRoute />} />
            <Route path="/datePicker" element={<DatePickerRoute />} />
            <Route path="/inputsRoute" element={<InputsRoute />} />
            <Route path="/card" element={<CradRoute />} />
            <Route path="/header" element={<HeaderRoute />} />
            <Route path="/colorPicker" element={<ColorPickerRoute />} />
            <Route path="/toastMessage" element={<ToastMessageRoute />} />
            <Route path="/typography" element={<Typogrphy />} />
            <Route path="/button" element={<ButtonRoute />} />
            <Route path="/dropdownmenue" element={<FancyDropDownMenueRoute />} />
            <Route path="/editbar" element={<EditBarRoute />} />
            <Route path="/tabswitch" element={<TabSwitchRoute />} />
            <Route path="/speeddail" element={<SpeedDailRoute />} />
            <Route path="/handyNav" element={<NavBarHandy />} />
            <Route path="/experimental" element={<ExperimentalRoute />} />
            <Route path="/searchBar" element={<FancySearchBarRoute />} />
            <Route path="/image" element={<FancyImageRoute />} />
            <Route path="/fancypagelist" element={<PageSwitchRoute />} />
            <Route path="/LoadingSpinnerRoute" element={<LoadingSpinnerRoute />} />
            <Route path="/fancyProfilePicture" element={<FancyProfilePictureRoute />} />
            <Route path="/miniProfile" element={<MiniProfileroute />} />
            <Route path="/chips" element={<ChipsRoute />} />
            <Route path="/checkbox" element={<CheckboxRoute />} />
            <Route path="/colorGenerator" element={<ColorGeneratorRoute />} />
            <Route path="/" element={<SwipeUpModal />} />
          </Routes>
        </div>
        </ThemeProvider>
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
    //       <FancyButton size="sm" wide={true} design="accent" outlined={true} onClick={() => handleModalCreation()} label="Modal"></FancyButton>
    //     </section>
    //     <section>
    //       <FancyButton size="sm" wide={true} design="accent" onClick={handleClick} label="Toaster"></FancyButton>
    //     </section>
    //     <section>
    //       <FancyBottomBarIcon label="Test" icon={svg} active={activated} handler={() => setActivated(!activated)} />
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
