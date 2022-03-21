import React, { useState } from 'react';


export const FolderTree = (props) => {

    const [isOpen, setIsOpen] = useState(true);

    return <div style={{ marginLeft: "10px" }}>
        {
            props.treeDirectory.map((item, index) => {
                if (item.isFolder) {
                    return <div key={index} style={{ marginLeft: "10px" }} >
                        <div style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>- {item.name}</div>
                        {isOpen && <FolderTree key={index} treeDirectory={item.childFiles} />}
                    </div>
                }
                return <div key={index} style={{ marginLeft: "10px" }}>- {item.name}</div>

            })
        }
    </div >
}

