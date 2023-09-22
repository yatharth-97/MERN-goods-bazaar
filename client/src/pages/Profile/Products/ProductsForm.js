import { Form, Input, Modal, Tabs } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

function ProductsForm({ showProductForm, setShowProductForm }) {
  return (
    <Modal
      title=''
      open={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
      width={1000}
    >
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='General' key='1'>
          <Form layout='vertical'>
            <Form.Item label='Name' name='name'>
              <Input type='text' />
            </Form.Item>
            <Form.Item label='Description' name='name'>
              <TextArea type='text' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Images' key='2'>
          <h1>Images</h1>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

export default ProductsForm;
