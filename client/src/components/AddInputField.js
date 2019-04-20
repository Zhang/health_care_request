import React, { Component } from 'react';

const styles = {
  position: 'fixed',
  zIndex: '1',
  height: '110px'
}

const positionProperties = ['id', 'top', 'left', 'height', 'width'];

class AddInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '180px',
      left: '989px',
      height: '30px',
      width: '180px',
      id: 'input_3',
      showModal: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showAddInputFieldModal = this.showAddInputFieldModal.bind(this);
  }

  handleClick(e) {
    this.props.addInputField(this.state.id, this.state)
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  showAddInputFieldModal() {
    this.setState({ showModal: !this.state.showModal})
  }

  render() {
    const { showModal, top } = this.state;

    return (
      <>
        <button
          onClick={this.showAddInputFieldModal}
        >
          Add Input Field
        </button>
        {
          showModal
          && positionProperties.map((position) => (
            <label key={position}>
              {position}
              <input type="text"
                name={position}
                value={this.state[position]}
                onChange={this.handleChange}
              />
            </label>
          ))
        }
        {
          showModal
          && <button
            onClick={this.handleClick}
          > Add
          </button>
        }
      </>
    );
  }
}

export default AddInputField;
