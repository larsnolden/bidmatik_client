import React from 'react';
import { action } from '@storybook/addon-actions';
import Table from '../src/components/Table/Table';
import { keywords } from './mockData/tableMock';
import Chevron from 'components/Chevron';
import styled from '@emotion/styled';

// export const requirements = () => (
//   <ul>
//     <li>As a user I want to make a column expandable</li>

//     <li>As a user I want some way to specify the rows children rows</li>

//     <li>As a user I want to specify if the row has a view link, and if so what it is</li>

//     <li>As a user I want custom cell rendering with multiple values</li>

//     <li>As a user I want to easily switch the row and cell design</li>

//     <li>As a user I want pagination events</li>

//     <li>As a user I want sorting events</li>

//     <li>As a user I want to specify filter options for each column (data type,sortable)</li>
//   </ul>
// );

const DemoClick = styled.div`
  background: #aaa;
  height: 10px;
  width: 10px;
`;

const columns = [
  {
    //   render has access to the rows data
    render: ({ id }) => <Chevron color="#aaa" width="40" height="40" onClick={() => show(id)} />,
    head: '',
    width: '50px'
  },
  {
    key: 'bid',
    head: 'Bid'
  },
  {
    key: 'term',
    head: 'Query'
  },
  {
    key: 'matchType',
    head: 'Match Type'
  }
];

export const table = () => <Table columns={columns} data={keywords} />;

export default {
  title: 'Table'
};
