import { useState } from react

export default function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch(/api/accounts/login/, {
      method: POST,
      headers: { Content-Type: application/json },
      body: JSON.stringify({ username, password })
    })
    if (res.ok) setMessage(Login

