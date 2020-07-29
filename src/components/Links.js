import React from 'react'
import {db} from '../firebase'

import LinkForm from './LinkForm'

function Links () {
    
    const addLink = async (linkInfo) => {
        await db
        .collection('links')
        .doc()
        .set(linkInfo)
        alert('nice')
    }

    return(
        <>
            <LinkForm addLink={addLink}/> 
        </>
    )
}

export default Links

