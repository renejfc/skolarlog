import { User } from '@supabase/supabase-js'

export interface _StoreAuth {
  userAuth: User | null
}

export const store = reactive<_StoreAuth>({
  userAuth: null,
})
