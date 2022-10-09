import { Button, Form, Input, Radio, Upload } from 'antd';
import React, { useState } from 'react';
import './UploadForm.css'
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;


const UploadForm = () => {
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
            span: 8,
            
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 6,
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
      onValuesChange={onFormLayoutChange}
    >

    
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Upload>
       <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default UploadForm;
/*import React from "react";

function AddAvatarForm({handleChange, handleSubmit}) {
  
 
    
  return (
        <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" >
          <input type="text" name="name" placeholder="name" onBlur ={handleChange}/>
          <input type="text" name="description" placeholder="description" onBlur ={handleChange}/>
          <input type="text" name="url" placeholder="url" onBlur = {handleChange}/>
          <input type="file"name="image" onChange={handleChange}/>
        </div>
        <button onClick = {handleSubmit}>
          Upload
        </button>
      </form>
    </div>
    );
}
export default AddAvatarForm
*/