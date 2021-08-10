import React, { useState } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import ShowBtn from './components/UI/Buttons/ShowBtn';


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

  return (
    <div className="App">
      <ShowBtn onClickBtn={purchaseHandler}/>
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
    </div>
  );
}

export default App;
