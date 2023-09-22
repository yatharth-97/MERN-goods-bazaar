import { Modal, Tabs } from 'antd';
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
          <h1>General</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Images' key='2'>
          <h1>Images</h1>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

export default ProductsForm;
