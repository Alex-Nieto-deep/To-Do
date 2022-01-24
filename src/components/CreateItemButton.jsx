import '../styles/CreateItemButton.css';

function CreateItemButton({ setAddItem, addItem }) {
  const onClickState = () => {
    setAddItem(!addItem);
  }
  return (
    <button
      className="CreateItemButton"
      onClick={onClickState}
    >
      +
    </button>
  );
}

export default CreateItemButton;
