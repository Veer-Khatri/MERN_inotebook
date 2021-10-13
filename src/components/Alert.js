import React from 'react'

function Alert(props) {
    return (
        //props.alert && means if props.alert is false then code after it will not evalute 
        <>

            {props.alert && <div id="alert_parent">
                <div id='alert' >
                    {show_alert_func}
                    <p ><strong>{props.alert.alert_type}</strong>:{props.alert.msg} </p>
                </div>

            </div>
            }

        </>
    )
}

function show_alert_func() {
    document.getElementById("alert_parent").style.display = "block"

}


export default Alert;