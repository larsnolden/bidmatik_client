import React, { useState } from 'react';
import styled from '@emotion/styled';
import GearIconPath from '../../assets/icons/gear.svg';
import Hint from 'components/Hint';
import Input from 'components/Input';
import Toggle from 'components/Toggle';

const SettingsButton = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #186faf;
  cursor: pointer;
`;
const GearIcon = styled.img``;

const Modal = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -%50%);
  display: flex;
  flex-direction: column;
`;

const Close = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #186faf;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid rgba(188, 204, 220, 0.5);
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
  margin: 13px 0 13px 0;
  width: 100%;
  justify-content: space-between;
`;

const Setters = styled.div`
  width: 100px;
  padding-left: 20px;
  // border: 1px solid rgba(188, 204, 220, 0.5);
`;

const Setter = styled.div`
  padding: 9px 0 9px 0;
  max-width: 90px;
`;

const AttributeHint = styled(Hint)``;

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <SettingsButton onClick={() => setIsModalOpen(true)}>
        Settings
        <GearIcon src={GearIconPath} />
      </SettingsButton>
      {isModalOpen && (
        <Modal>
          <Close>close</Close>
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
                <Input sign="$" />
              </Setter>
              <Setter>
                <Toggle />
              </Setter>
              <Setter>
                <Input sign="%" />
              </Setter>
              <Setter>
                <Toggle />
              </Setter>
              <Setter>
                <Toggle />
              </Setter>
            </Setters>
          </SettingsContainer>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Settings;
