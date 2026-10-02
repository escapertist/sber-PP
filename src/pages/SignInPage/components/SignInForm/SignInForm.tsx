import { useState, type FormEvent } from 'react'
import arrowRightIcon from '../../../../assets/icons/arrow-right.svg'
import lockIcon from '../../../../assets/icons/lock-keyhole.svg'
import mailIcon from '../../../../assets/icons/mail.svg'
import { Button, Checkbox, Input, SegmentedControl } from '../../../../components/ui'
import {
  demoCredentials,
  mockSignIn,
  roleOptions,
  type AuthMode,
  type UserRole,
} from '../../../../mocks/auth'
import { RoleCard } from '../RoleCard/RoleCard'
import styles from './SignInForm.module.scss'

const modeOptions = [
  { value: 'signIn', label: 'Вход' },
  { value: 'signUp', label: 'Регистрация' },
] as const satisfies ReadonlyArray<{ value: AuthMode; label: string }>

export function SignInForm() {
  const [mode, setMode] = useState<AuthMode>('signIn')
  const [email, setEmail] = useState(demoCredentials.email)
  const [password, setPassword] = useState(demoCredentials.password)
  const [remember, setRemember] = useState(demoCredentials.remember)
  const [role, setRole] = useState<UserRole>('speaker')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isSignIn = mode === 'signIn'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    try {
      await mockSignIn({ email, password, remember })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.root}>
      <header className={styles.heading}>
        <h1 className={styles.title}>Добро пожаловать в клуб</h1>
        <p className={styles.description}>
          Войдите, чтобы продолжить, или создайте аккаунт и выберите, как будете пользоваться пространством.
        </p>
      </header>

      <SegmentedControl
        aria-label="Режим входа"
        options={modeOptions}
        value={mode}
        onChange={setMode}
      />

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Почта"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="E-mail"
          required
          icon={<img src={mailIcon} width={16} height={16} alt="" />}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Пароль"
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete={isSignIn ? 'current-password' : 'new-password'}
          required
          icon={<img src={lockIcon} width={16} height={16} alt="" />}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {isSignIn && (
          <div className={styles.options}>
            <Checkbox
              label="Запомнить меня"
              name="remember"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <a href="#forgot-password" className={styles.link}>
              Забыли пароль?
            </a>
          </div>
        )}

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            iconLeft={<img src={arrowRightIcon} width={15} height={15} alt="" />}
          >
            {isSignIn ? 'Войти в пространство' : 'Создать аккаунт'}
          </Button>
        </div>
      </form>

      <fieldset className={styles.roles}>
        <legend className={styles.rolesPrompt}>Впервые здесь? Выберите свою роль</legend>
        <div className={styles.roleChoices}>
          {roleOptions.map((option) => (
            <RoleCard
              key={option.id}
              {...option}
              name="role"
              checked={role === option.id}
              onSelect={setRole}
            />
          ))}
        </div>
      </fieldset>

      {/*<p className={styles.terms}>*/}
      {/*  Продолжая, вы соглашаетесь с Условиями использования и Правилами сообщества.*/}
      {/*</p>*/}
    </div>
  )
}
