import React, { useState } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import ShowBtn from './components/UI/Buttons/ShowBtn';
import Alert from './components/UI/Alert/Alert';


function App() {
  const [purchasing, setPurchasing] = useState(false);

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const continuePurchaseHandler = () => {
    alert('pressed continue');
  };

  const dismiss = () => {
   alert('awe')
  }

  return (
    <div className="App">
      <ShowBtn onClickBtn={purchaseHandler} />
      <Modal
        show={purchasing}
        title={"Modal title"}
        text={"Modal content"}
        close={cancelPurchaseHandler}
        onCancel={cancelPurchaseHandler}
        onContinue={continuePurchaseHandler}
        config={[
          { type: 'Success', label: 'Continue', clicked: continuePurchaseHandler },
          { type: 'Danger', label: 'Close', clicked: cancelPurchaseHandler }
        ]}
      >
      </Modal>
      <Alert
        show={purchasing}
        type='warning'
        dismiss={dismiss}
        close={cancelPurchaseHandler}
      />
    </div>
  );
}

export default App;
