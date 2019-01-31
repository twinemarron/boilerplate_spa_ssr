import { Mode, Size } from '../enums'
import { ThemeInfoState } from '../reducers/themeInfoReducer'

const DB_NAME = 'twine_db'
const STORE_NAME = 'themeInfo'
const KEY_PATH = 'appSetting'
const VERSION = 1

export type AppSetting = {
  appSetting: String
  themeInfoState: ThemeInfoState
}

const getOpenDBRequest = (): IDBOpenDBRequest | null => {
  try {
    const request =
      typeof window !== 'undefined' && window && window.indexedDB
        ? window.indexedDB.open(DB_NAME, VERSION)
        : null
    return request
  } catch (err) {
    return null
  }
}

export const putData = (data: AppSetting): void => {
  let db, objectStore
  const openDBRequest = getOpenDBRequest()
  if (!openDBRequest) return
  openDBRequest.onsuccess = event => {
    if (!event || !event.target) return
    const db = (event.target as IDBOpenDBRequest).result
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const objectStore = transaction.objectStore(STORE_NAME)
    const request = objectStore.put(data)
    request.onsuccess = () => {
      console.log('putData データの挿入に成功')
    }
    transaction.oncomplete = () => {
      console.log('putData トランザクション完了')
    }
  }
  openDBRequest.onupgradeneeded = (event): void => {
    console.log('putData onupgradeneeded event: ', event)
    if (!event || !event.target) return
    const db = (event.target as IDBOpenDBRequest).result
    const objectStore = db.createObjectStore(STORE_NAME, { keyPath: KEY_PATH })
  }
  openDBRequest.onerror = (event): void => {
    console.log('putData onerror event: ', event)
  }
}

export const getData = (): Promise<AppSetting> => {
  let db, objectStore
  const openDBRequest = getOpenDBRequest()
  return new Promise((resolve, reject) => {
    if (!openDBRequest) {
      reject()
      return
    }
    openDBRequest.onsuccess = (event): void => {
      if (!event || !event.target) return
      console.log('getData onsuccess event: ', event)
      const db = (event.target as IDBOpenDBRequest).result
      const transaction = db.transaction([STORE_NAME], 'readonly')
      const objectStore = transaction.objectStore(STORE_NAME)
      const request = objectStore.get(KEY_PATH)
      request.onsuccess = event => {
        console.log('getData データの取得に成功 event: ', event)
        resolve(request.result)
      }
      transaction.oncomplete = () => {
        console.log('getData transaction.oncomplete トランザクション完了')
      }
    }
    openDBRequest.onerror = event => {
      console.log('getData onerror event: ', event)
      reject()
    }
  })
}
