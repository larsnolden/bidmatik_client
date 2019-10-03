import React, { useState, useReducer } from 'react';
import styled from '@emotion/styled';

import GearIconPath from '../../../assets/icons/gear.svg';
import Hint from 'components/Hint';
import Input from 'components/Input';
import Toggle from 'components/Toggle';
import Button from 'components/Button';

const SettingsButton = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #186faf;
  cursor: pointer;
`;
const GearIcon = styled.img`
  margin-left: 4px;
`;

const Modal = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 15px 30px 15px 30px;
  z-index: 5;
`;

const Close = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #186faf;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 15px;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
`;

const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  background: #f0f4f8;
  padding: 0 8px 0 17px;
  width: 200px;
`;

const Attribute = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 20px;
  color: #486581;
  justify-content: space-between;
  height: 20px;
  margin: 13px 0 13px 0;
`;

const Setters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  padding-left: 20px;
  border: 1px solid rgba(188, 204, 220, 0.5);
`;

const Setter = styled.div`
  height: 20px;
  margin: 13px 0 13px 0;
  max-width: 90px;
`;

const SaveButton = styled(Button)`
  align-self: flex-start;
  margin-top: 15px;
`;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
`;

const AttributeHint = styled(Hint)``;

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'setDailyBudget':
      return { ...state, dailyBudget: action.payload };
    case 'toggleOptimiseBids':
      return { ...state, optimiseBids: !state.optimiseBids };
    case 'setTargetAcos':
      return { ...state, targetAcos: action.payload };
    case 'toggleAddKeywords':
      return { ...state, addKeywords: !state.addKeywords };
    case 'toggleRemoveKeywords':
      return { ...state, removeKeywords: !state.removeKeywords };
    default:
      throw new Error();
  }
}

const Settings = ({ handleSave, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <SettingsButton className={className} onClick={() => setIsModalOpen(true)}>
        Settings
        <GearIcon src={GearIconPath} />
      </SettingsButton>
      {isModalOpen && (
        <React.Fragment>
          <Background />
          <Modal>
            <Close onClick={() => setIsModalOpen(false)}>close</Close>
            <SettingsContainer>
              <Attributes>
                <Attribute>
                  Daily Budget
                  <AttributeHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
                </Attribute>
                <Attribute>
                  Optimise Bids
                  <AttributeHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
                </Attribute>
                <Attribute>
                  Target ACOS
                  <AttributeHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
                </Attribute>
                <Attribute>
                  Add keywords
                  <AttributeHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
                </Attribute>
                <Attribute>
                  Remove keywords
                  <AttributeHint message="This HTML file is a template.If you open it directly in the browser, you will see an empty page.You can add webfonts, meta tags, or analytics to this file.The build step will place the bundled scripts into the <body> tag.To begin the development, run `npm start` or `yarn start`.To create a production bundle, use `npm run build` or `yarn build`." />
                </Attribute>
              </Attributes>
              <Setters>
                <Setter>
                  <Input
                    sign="$"
                    value={state.dailyBudget}
                    onChange={dailyBudget =>
                      dispatch({ type: 'setDailyBudget', payload: dailyBudget })
                    }
                  />
                </Setter>
                <Setter>
                  <Toggle
                    on={state.optimiseBids}
                    onClick={() => dispatch({ type: 'toggleOptimiseBids' })}
                  />
                </Setter>
                <Setter>
                  <Input
                    sign="%"
                    value={state.targetAcos}
                    onChange={targetAcos =>
                      dispatch({ type: 'setTargetAcos', payload: targetAcos })
                    }
                  />
                </Setter>
                <Setter>
                  <Toggle
                    on={state.addKeywords}
                    onClick={() => dispatch({ type: 'toggleAddKeywords' })}
                  />
                </Setter>
                <Setter>
                  <Toggle
                    on={state.removeKeywords}
                    onClick={() => dispatch({ type: 'toggleRemoveKeywords' })}
                  />
                </Setter>
              </Setters>
            </SettingsContainer>
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </Modal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Settings;
