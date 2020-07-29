import React, { useState, useEffect } from 'react'
import {db} from '../firebase'

import LinkForm from './LinkForm'

function Links () {

    const [links, setLinks] = useState([])
    
    const addLink = async (linkInfo) => {
        await db
        .collection('links')
        .doc()
        .set(linkInfo)
    }

    const getLinks = () => {
        db
        .collection('links')
        .orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) =>{
                docs.push({...doc.data(), id:doc.id})
                
            })
            setLinks(docs)
        })
    }

    useEffect(()=>{
        getLinks()
    }, [])


    return(
        <>
            <h4 className="indigo-text text-lighten-2">Important videos</h4>
            <h4 className="red-text">♡</h4>
            <LinkForm addLink={addLink}/> 
            <div> 
                {links.map(link => {
                   return (
                    <div className="row">
                    <div className="col s12 m6">
                      <div className="card indigo lighten-3">
                        <div className="card-content white-text">
                          <span className="card-title">{link.name}</span>
                          <p>{link.description}</p>
                        </div>
                        <div className="card-action">
                          <a className="indigo-text text-darken-4" href={link.url} target="_blank">Go to website</a>
                        </div> 
                      </div>
                    </div>
                  </div>
                   )
                })}
            </div>
        </>
    )
}

export default Links

