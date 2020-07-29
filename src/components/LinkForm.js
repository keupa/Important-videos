import React, { useState } from 'react'

function LinkForm ({addLink}) {

    const initialValues = {
        url: '',
        name: '',
        description:''
      }

    const [ values, setValues ] = useState(initialValues)

    const handleSubmit = (e) => {
      e.preventDefault()  
      addLink(values)
      setValues({...initialValues})
    }

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]: value} )
    }

    return(
        <>
        <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
            <div className="col s12">
                <div className="input-field col s6">
                    <i className="material-icons prefix">insert_link</i>
                    <input 
                        name="url" 
                        value={values.url}
                        type="text" 
                        className="validate" 
                        onChange={handleInputChange} 
                    />
                    <label htmlFor="url">https//:your-fav-url.com</label>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col s12">
            <div form className="input-field col s6">
                    <i className="material-icons prefix">title</i>
                    <input 
                        name="name"
                        value={values.name}
                        type="text" 
                        className="validate" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="website-name">Website name</label>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col s12">
            <div form className="input-field col s6">
                    <i className="material-icons prefix">view_headline</i>
                    <input 
                        name="description" 
                        value={values.description}
                        type="text" 
                        className="materialize-textarea" 
                        data-length="120" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="description">Brief description </label>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
            </div>
        </div>
        </form>
        </div>

        
        </>
    )
}

export default LinkForm

