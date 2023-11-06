import React from 'react';
import { FilterWrap } from './Filter.styled';

export default function Filter({ onFilter }) {
  return (
    <FilterWrap>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={evt => onFilter(evt.target.value)}
      />
    </FilterWrap>
  );
}
