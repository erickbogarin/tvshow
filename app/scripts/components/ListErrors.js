import React from 'react';

const ListErrors = ({ errors }) => {  
  if (errors) {
    return (
      <ul className="text-danger">
        {
          Object.keys(errors).map(key => {
            return (
              <li key={key}>
                {errors[key]}
              </li>
            );
          })
        }
      </ul>
    );
  } else {
    return null;
  }  
}

export default ListErrors;
