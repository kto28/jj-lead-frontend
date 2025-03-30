// pages/apply/[token].tsx
import { useRouter } from 'next/router'

export default function ApplyPage() {
  const router = useRouter()
  const { token } = router.query

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎉 應徵者歡迎頁</h1>
      <p>你目前的 Token 是：</p>
      <p style={{ fontSize: '1.5rem', color: 'green' }}>{token}</p>
    </div>
  )
}
