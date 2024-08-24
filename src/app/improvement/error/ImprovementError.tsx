import { Fallback } from '@/component/Fallback'
import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

/**
 * Reactはレンダリングエラーが発生すると、全体がアンアンマウントされてしまう(画面が真っ白になる)
 * Reactの公式はErrorBoundaryを使ってエラーをキャッチすることを推奨している
 * Next.jsの場合は、ErrorBoundaryクラスを作成するか、エラーページを作成してルーティングする
 * このコンポーネントはルートに近いところで使うことを推奨する
 * またエラー監視システムとも連携することができる(datadogLogs、Sentry、ReactQueryなど)
 */
export const ImprovementError = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    fallbackRender={Fallback}
    onError={(error, info) => console.error(error)}
  >
    {children}
  </ErrorBoundary>
)
