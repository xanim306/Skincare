
import React from 'react'
import Select from 'react-select'


function Careers() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const customStyles = {
        control: (provided) => ({
          ...provided,
          border: '2px solid #f6f7fb',
          borderRadius: '32px',
          width: '328px',
          paddingTop:`16px`,
          paddingLeft:`24px`,
          paddingBottom:`16px`,
          paddingRight:`24px`,
        }),
      };
  return (
    <>
    <div className="careers">
        <div className="container">
            <div className="careers_inner">
            <span>Home Page <i class="fa-solid fa-chevron-right"></i>Navigation <i class="fa-solid fa-chevron-right"></i> Careers</span>
            <p className="subtitle">- Join our Team</p>
            <p className="title">Explore the Careers</p>
            <div className="career_main">
            <div className="career-left">
                <p>Filter By</p>
                <label htmlFor="">Job Title</label>
                <div className="input"><input type="text" placeholder="Executive" /></div>

<label htmlFor="">Location</label>


                <Select 
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        name="color"
        options={options}
        styles={customStyles}
      />

      <label htmlFor="">Department</label>

      <Select 
        className="basic-single "
        classNamePrefix="select"
        defaultValue={options[0]}
        name="color"
        options={options}
        styles={customStyles}
      />
               
              <div className="buttons">
              <a href="" className="app_filter btn">Apply Filters</a>
                <a href="" className="clear btn" >Clear All</a>
              </div>
               
            </div>
            <div className="career-right">
                <div className="single_card">
                    <p>Sr. Sales Manager</p>
                    <p>Sales & Marketing  -  San Francisco, California  -  $125k+</p>
                    <a href="" className="btn">Apply</a>
                </div>
                <div className="single_card">
                    <p>Sr. Sales Manager</p>
                    <p>Sales & Marketing  -  San Francisco, California  -  $125k+</p>
                    <a href="" className="btn">Apply</a>
                </div>
                <div className="single_card">
                    <p>Sr. Sales Manager</p>
                    <p>Sales & Marketing  -  San Francisco, California  -  $125k+</p>
                    <a href="" className="btn">Apply</a>
                </div>
                <div className="single_card">
                    <p>Sr. Sales Manager</p>
                    <p>Sales & Marketing  -  San Francisco, California  -  $125k+</p>
                    <a href="" className="btn">Apply</a>
                </div>
                <div className="single_card">
                    <p>Sr. Sales Manager</p>
                    <p>Sales & Marketing  -  San Francisco, California  -  $125k+</p>
                    <a href="" className="btn">Apply</a>
                </div>
                
            </div>
            </div>
          
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Careers
