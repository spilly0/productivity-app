import React from 'react'
import db from '../firebase'
import { doc, deleteDoc, where, query, collection, getDocs } from "firebase/firestore";
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ProjectItem = (props) => {
  const { project } = props

  async function handleClick() {
    await deleteDoc(doc(db, 'projects', props.project.id))
    const q = query(collection(db, 'tasks'), where('projectName', '==', props.project.project))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docx) => {
      await deleteDoc(doc(db, 'tasks', docx.id))
    })
  }

  return (
    <ListGroup.Item as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <Badge bg="primary">{project.numOfTasks}</Badge>
      <div className="ms-2 me-auto">
        {project.project}
      </div>

      <Button onClick={() => handleClick()} >
        <FontAwesomeIcon icon={faTrash} />
        <span className="visually-hidden">unread messages</span>
      </Button>
    </ListGroup.Item >
  )
}

export default ProjectItem
