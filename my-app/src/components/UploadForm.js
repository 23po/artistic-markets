import { Button, Form, Input, Radio, Upload } from 'antd';
import React, { useState } from 'react';
import './UploadForm.css'
import { UploadOutlined } from '@ant-design/icons';


function UploadForm({handleChange, handleSubmit}) {
  const [formData, setFormData] = useState([])
  
  
  function handleChange (e) {
     e.preventDefault()
    console.log("changing")
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    },
    console.log(formData)
    )
}    

//converting file object to url and updating to form data 
function specialHandler (e) {
  const loc = URL.createObjectURL(e.target.files[0])
  setFormData({
    ...formData,
    loc
  })
}

//making a post request
function handleSubmit (e) {
    e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/pictures`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }, ProgressEvent => {
            console.log('Upload Progress:' + Math.round(ProgressEvent.loaded/ProgressEvent.total * 100) + '%' )
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" >
          <input type="text" name="name" placeholder="name" onBlur ={handleChange}/>
          <input type="text" name="desc" placeholder="description" onBlur ={handleChange}/>
          <input type="file"name="loc" accept=".jpg, .png, .gif" onBlur={specialHandler}/>
        </div>
        <button onClick = {handleSubmit}>
          Upload
        </button>
      </form>
    </div>
    );
}
export default UploadForm

//for future reference
/*const { TextArea } = Input;


function UploadForm ({handleChange, handleSubmit}) {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
            
          },
          wrapperCol: {
            span: 11.5,
            
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 11.2,
            offset: 2,
          },
        }
      : null;
  return (
    <Form
      //className='input-container'
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      //onValuesChange={onFormLayoutChange}
    >

    
      <Form.Item label="Name">
        <Input placeholder="give your pic a name" onBlur ={handleChange}/>
      </Form.Item>
      <Form.Item label="Short Description" >
          <TextArea rows={2}  onBlur ={handleChange}/>
        </Form.Item>
        <Form.Item> 
        <Upload>
       <Button icon={<UploadOutlined />} onChange={handleChange}>Click to Upload</Button>
      </Upload>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick = {handleSubmit}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default UploadForm;*/