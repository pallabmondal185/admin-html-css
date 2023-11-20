import React, { useState } from 'react';
import './sidebar.css'
import { LeftArrow, RightArrow } from '../../CustomComponents/Icons';

const sidebarItems = [
    {
        title: "Category",
        innetTitle: [
            {
                name: 'Add Category'
            },
            {
                name: 'Manage Category'
            }
        ]
    },
    {
        title: "Sub-Category",
        innetTitle: [
            {
                name: 'Add Sub-Category'
            },
            {
                name: 'Manage Sub-Category'
            }
        ]
    },
    {
        title: "Product",
        innetTitle: [
            {
                name: 'Add Product'
            },
            {
                name: 'Manage Product'
            }
        ]
    },
    {
        title: "Services",
        innetTitle: [
            {
                name: 'Add Services'
            },
            {
                name: 'Manage Services'
            }
        ]
    }
]

const Sidebar = ({ isCloseSidebar }) => {
    // const [isActive, setIsactive] = useState("");
    const [isActive, setIsactive] = useState({});
    const [isInnerActive, setIsInnerActive] = useState('');
    const [isInnerMainInd, setIsInnerMainInd] = useState("");

    console.log("isActive", isActive, isInnerActive)




    return (
        <div>
            <div class="sidebar" style={{ display: `${isCloseSidebar ? 'block' : 'none'}` }}>
                {sidebarItems?.map((item, i) =>
                    <div key={i}>

                        {/* main items */}
                        <a
                            className={`${isActive[i] && 'active'}`}
                            onClick={() => {
                                // setIsactive(prev => prev === i ? '' : i);
                                if (isActive[i]) {
                                    const obj = isActive;
                                    // console.log("inside:IF", obj)
                                    delete obj[i];
                                    setIsactive({ ...obj });
                                } else {
                                    setIsactive(prev => ({ ...prev, [i]: i + 1 }))
                                    // console.log("inside:else")
                                }
                                setIsInnerActive('')
                            }}
                        >
                            {item.title}
                            <span style={{ float: "right" }}>
                                {isActive[i] ? <LeftArrow /> : <RightArrow />}
                            </span>
                        </a>

                        {/* inner items/ for add and manage */}
                        {/* <div className='inner-items' style={{ display: `${isActive === i ? 'block' : 'none'}` }}> */}
                        <div className='inner-items' style={{ display: `${isActive[i] ? 'block' : 'none'}` }}>
                            {
                                item?.innetTitle?.map((ele, ind) => {
                                    console.log("dfg", isActive[i], isInnerActive + 1)
                                    return (
                                        <p
                                            key={ind}
                                            className={`${(isActive[i] === isInnerMainInd + 1 && isInnerActive === ind) && 'active'}`}
                                            onClick={() => {
                                                setIsInnerActive(ind);
                                                setIsInnerMainInd(i)
                                            }}
                                        >
                                            {ele?.name}
                                        </p>
                                    )
                                }
                                )
                            }
                        </div>

                    </div>
                )}
            </div>

            <div class="content">
                <h2>Responsive Sidebar Example</h2>
                <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                <h3>Resize the browser window to see the effect.</h3>
            </div>
        </div>
    )
}

export default Sidebar
