import { useRouter } from 'next/router'

export default function ApplyPage() {
  const router = useRouter()
  const { token } = router.query

  return (
    <div>
      <h1>應徵者登入頁面</h1>
      <p>你目前的 Token 是：{token}</p>
    </div>
  )
}
