import { SignInForm } from './components/SignInForm/SignInForm'
import { WelcomePanel } from './components/WelcomePanel/WelcomePanel'
import styles from './SignInPage.module.scss'

export function SignInPage() {
  return (
    <div className={styles.page}>
      <WelcomePanel />
      <main className={styles.main}>
        <div className={styles.content}>
          <SignInForm />
        </div>
      </main>
    </div>
  )
}
