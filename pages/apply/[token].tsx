// 動態頁面初始內容
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ApplyPage() {
  const router = useRouter()
  const { token } = router.query
  const [msg, setMsg] = useState("載入中...")

  useEffect(() => {
    if (token) {
      setMsg(`你好，歡迎使用邀請連結：${token}`)
    }
  }, [token])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>履歷上傳 / 面試邀請</h2>
      <p>{msg}</p>
    </div>
  )
}
