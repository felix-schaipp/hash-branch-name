declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_HEAD_REF: string | undefined
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}
