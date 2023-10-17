import { useParams } from 'react-router-dom'

export const registerFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })

  console.log('register geht')
  if (response) {
    const dataJson = response.json()
    const data = JSON.parse(await dataJson)
    navigate(`/register/${data.id}`)
  }
}

export const createUser = async (event, params) => {
  const form = new FormData(event.target)
  form.set('id', params.id)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/createprofile`, {
    credentials: 'include',
    method: 'PUT',
    body: form,
  })
}
