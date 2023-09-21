import { Modal } from 'antd';
import React from 'react';

function ProductsForm({ showProductsForm, setShowProductsForm }) {
  return (
    <Modal
      title=''
      open={showProductsForm}
      onCancel={() => setShowProductsForm(false)}
    >
      <h1>Products Form</h1>
    </Modal>
  );
}

export default ProductsForm;
