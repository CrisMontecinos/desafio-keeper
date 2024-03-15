import React from 'react';
import "./tabOptions.css";

const tabs=[
{
  id:1,
  name:"Delivery",
  active_img: 
    "https://i.pinimg.com/564x/2a/b0/95/2ab0950f6c6fa8ef1753145e8dd61864.jpg",
  backdrop:"FCEEC0",
  inactive_img:
    "https://i.pinimg.com/564x/ff/ec/d4/ffecd4576bbff10f63f96bb7024ad929.jpg",
},
{
  id:2,
  name:"Salir a cenar",
  active_img: 
    "https://i.pinimg.com/564x/04/12/5d/04125d03e38672c32ae47755e5b2aae1.jpg",
  backdrop:"FCEEC0",
  inactive_img:
    "https://i.pinimg.com/564x/68/7f/d5/687fd5af44f856332406445823288006.jpg",
},
{
  id:3,
  name:"Vida nocturna",
  active_img: 
    "https://i.pinimg.com/564x/ff/a8/24/ffa824e83da4abe3bf4df22bb36dda84.jpg",
  backdrop:"FCEEC0",
  inactive_img:
    "https://i.pinimg.com/564x/52/d2/db/52d2db56cf830aac6069bcf5ca3ffcf5.jpg",
},
];

function TabOptions({activeTab, setActiveTab}) {
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab)=>{
          return(
            <div onClick={()=>setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${
              activeTab===tab.name && "active-tab"
            }`}
            >
              <div className='tab-image-container absolute-center'
              style={{
                backgroundColor:`${
                  activeTab===tab.name?tab.backdrop:""
                  }`
                }}
              >
                <img 
                className='tab-image'
                alt={tab.name}
                src={
                  activeTab===tab.name ? tab.active_img:tab.inactive_img
                  } 
                />
              </div>
              <div className='tab-name'>{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabOptions