import React from 'react';
import { action } from '@storybook/addon-actions';
import Table from '../src/components/Table/Table';

export default {
  title: 'Table',
};


export const requirements = () => <ul>
<li>As a user I want to make a column expandable</li>

<li>As a user I want some way to specify the rows children rows</li>

<li>As a user I want to specify if the row has a view link, and if so what it is</li>

<li>As a user I want custom cell rendering with multiple values</li>

<li>As a user I want to easily switch the row and cell design</li>

<li>As a user I want pagination events</li>

<li>As a user I want sorting events</li>

<li>As a user I want to specify filter options for each column
(data type,sortable)</li>
</ul> 

const columns = [
  {
    key: 'acos',
    head: 'Acos',
    render: (acos) => <td>this is {acos}</td>
  }
];

const data = [
  {
    acos: 13.4
  },
  {
    acos: 22.4
  }
]

export const table = () => <Table columns={columns} data={data}/>;
