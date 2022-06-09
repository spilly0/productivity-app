import React from 'react'
import { ListGroup } from 'react-bootstrap';


class SelectTaskItem extends React.Component {

  render() {
    const { task } = this.props

    return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{task.task}</div>
          {task.projectName}
          <div className="dropdown">
            {/* {task.projectName ? null : <Button onClick={handleSubmit}>Submit</Button>} */}
          </div>
        </div>

        {/* <Button onClick={(task) => handleClick()} >
        <FontAwesomeIcon icon={faTrash} />
        <span className="visually-hidden">unread messages</span>
      </Button> */}
      </ListGroup.Item >
    )
  }
}

export default SelectTaskItem
