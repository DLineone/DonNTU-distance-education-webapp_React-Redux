import React from 'react';
import "./style.css";
import Select from 'react-select';

function Filter(props) {
    const styles = {
        menu: ({ width, ...css }) => ({
            ...css,
            width: "max-content",
            minWidth: "100%",
            fontSize: '20px'
        }),
        control: css => ({
            ...css,
            width: 300,
            fontSize: '20px'
        }),            
      };

    return (  
        <div className='filter'>
            <div className="filter-name">
                {props.name}
            </div>
            <div className='options'>
                <Select 
                    styles={styles} 
                    defaultValue={props.options[0]} 
                    options={props.options} 
                    getOptionValue={(option) => option.value}
                    isOptionDisabled={(option) => option.disabled}
                    />
            </div>
        </div>
    );
}

export default Filter;