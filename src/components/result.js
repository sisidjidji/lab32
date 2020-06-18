import React from 'react'
import JSONPretty from 'react-json-pretty';


var JSONPrettyMon = require('react-json-pretty/dist/acai');

export default  function Result (prop)
{
return(
    <>
    <span>
<JSONPretty id="json-pretty" data={prop.body} theme={JSONPrettyMon} />
   </span>
   </>
)
}

 