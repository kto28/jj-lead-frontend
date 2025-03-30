// /pages/apply/[token].tsx
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ApplyPage() {
  const router = useRouter()
  const { token } = router.query
  const [msg, setMsg] = useState("載入中...")

  useEffect(() => {
    if (token) {
      setMsg(`你好，歡迎使用邀請連結：${token}`)
      // 可以在這裡加上 API 請求，例如載入該 token 對應的應徵者資料
    }
  }, [token])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>履歷上傳 / 面試邀請</h2>
      <p>{msg}</p>
      {/* 這裡可以加上履歷上傳表單 */}
    </div>
  )
}
