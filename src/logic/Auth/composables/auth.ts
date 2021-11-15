import { UserCredentials } from '@supabase/supabase-js'
import { useSupabase } from '~/logic/Supabase/composables/supabase'

export function useAuth() {
  const { auth } = useSupabase()

  const currentUserAuth = auth.user()

  const signOut = () => auth.signOut()
  const signIn = (options: Pick<UserCredentials, 'email' | 'password'>) => auth.signIn(options)

  return {
    currentUserAuth,
    signIn,
    signOut,
  }
}
