import React, { useState } from 'react';
import { createPerson as CreatePerson } from "../../graphql/mutations";
import { v4 as uuid } from 'uuid'
import {  API, graphqlOperation, Storage } from "aws-amplify";
import config from '../../aws-exports'
import Button from 'react-bootstrap/Button';

const {
    aws_user_files_s3_bucket: bucket
  } = config

  const customPrefix = {
    public: '',
    protected: 'myProtectedPrefix/',
    private: 'myPrivatePrefix/'
};

export default function Feed(){

    const [file, updateFile] = useState(null)
    const [personName, updatePersonName] = useState('')
    
  
    function handleChange(event) {
      const { target: { value, files } } = event
      const fileForUpload = files[0]
      updatePersonName(fileForUpload.name.split(".")[0])
      updateFile(fileForUpload || value)
    }



    
  
    // upload the image to S3 and then save it in the GraphQL API
    async function createPerson() {
      if (file) {
        const extension = file.name.split(".")[1]
        const { type: mimeType } = file
        const key = `${personName}.${extension}`      
        const url = `https://${bucket}.s3.amazonaws.com/${key}`
        const inputData = { name: personName , image: url }

        try {
          await Storage.put(key, file, {
            
            contentType: file.type,
            customPrefix: customPrefix,
            level: "public"
            
          })
          .then((result)=>{
            console.log(result)
          })
          
          await API.graphql(graphqlOperation(CreatePerson, { input: inputData }))

          
          
        } catch (err) {
          console.log('error: ', err)
        }
      }
    }
    
    return(
         <div className='upload'>
          <hr/>
       
        <input
                  type="file"
                  onChange={handleChange}
                  style={{margin: '10px 0px'}}
              />

              <Button 
              onClick={createPerson}>
                  Upload!

              </Button>    

            <hr/>

            <hr/>
       
       <input
                 type="file"
                 onChange={handleChange}
                 style={{margin: '10px 0px'}}
             />

             <Button 
             onClick={createPerson}>
                 Upload!

             </Button>    

           <hr/>

           <hr/>
       
       <input
                 type="file"
                 onChange={handleChange}
                 style={{margin: '10px 0px'}}
             />

             <Button 
             onClick={createPerson}>
                 Upload!

             </Button>    

           <hr/>

           <hr/>
       
       <input
                 type="file"
                 onChange={handleChange}
                 style={{margin: '10px 0px'}}
             />

             <Button 
             onClick={createPerson}>
                 Upload!

             </Button>    

           <hr/>

           <hr/>
       
       <input
                 type="file"
                 onChange={handleChange}
                 style={{margin: '10px 0px'}}
             />

             <Button 
             onClick={createPerson}>
                 Upload!

             </Button>    

           <hr/>

        </div>
        
      )
}