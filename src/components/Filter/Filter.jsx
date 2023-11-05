import React from 'react';
import { FilterWrap } from './Filter.styled';
import { getFilter, setFilter } from 'redux/filterReducer';
import { useDispatch, useSelector } from 'react-redux';

// export default function Filter({ onFilter }) {
//   return (
//     <FilterWrap>
//       Find contact by name
//       <input
//         type="text"
//         name="filter"
//         onChange={({ target: { value } }) =>
//             dispatch(setFilter(value))
//           }
//           value={filter}
        
//       />
//     </FilterWrap>
//   );
// }

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterWrap>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={({ target: { value } }) =>
            dispatch(setFilter(value))
          }
          value={filter}
        
      />
    </FilterWrap>
    
  );
};

export default Filter;
