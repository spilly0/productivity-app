import { useState, useEffect } from 'react'
import db from '../firebase'
import { collection, onSnapshot, query } from "firebase/firestore";

export function useTasks() {
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const q = query(collection(db, 'tasks'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setTasks(data)
    })
    return () => unsubscribe()
  }, [])
  return tasks
}

export function useProjects(tasks) {
  const [projects, setProjects] = useState([])

  function NumTodos(projectName, tasks) {
    const len = tasks.filter(task => task.projectName === projectName)
    return len.length
  }


  useEffect(() => {
    const q = query(collection(db, 'projects'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => {
        const projectName = doc.data().project
        const num = NumTodos(projectName, tasks)
        return {
          id: doc.id,
          numOfTasks: num,
          ...doc.data()
        }
      })
      setProjects(data)
    })
    return () => unsubscribe()
  }, [])
  return projects
}

