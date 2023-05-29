export const useNextHash = defineStore('next-hash', () => {
  const nextHash = ref('')
  const setNextHash = (hash: string) => {
    nextHash.value = hash
  }

  return { nextHash, setNextHash }
})
