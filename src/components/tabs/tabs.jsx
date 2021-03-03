import React, {createContext, useState} from 'react';

import style from './style.module.scss';

const TabIndex = createContext()

const Tabs = ({children}) => {

    const [idx, setIdx] = useState(0)
    const tabs = []
    const panel = []

    children.forEach(item => {
        return item.type.name === 'Tab' ? tabs.push(item) : panel.push(item)
    })

    if (tabs.length !== panel.length)
        console.warn('Warning!!! The number of tabs is less than the controls')

    const changeIdx = (idx) => () => {
        setIdx(idx)
    }
    const panelItem = panel.map((item, idx) => {
        return React.cloneElement(
            item,
            {
                changeIdx,
                idx,
                key: idx
            }
        )
    })

    return (
        <TabIndex.Provider value={idx}>
            <div className={style.tabs}>
                <div>
                    {tabs[idx]}
                </div>
                <div className={style.panel}>
                    {panelItem}
                </div>
            </div>
        </TabIndex.Provider>
    );
}

export default Tabs;