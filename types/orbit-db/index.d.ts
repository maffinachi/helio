// types/orbit-db/index.d.ts
declare module 'orbit-db' {
  interface OrbitDBOptions {
    directory?: string
    peerId?: any
    identity?: any
  }

  interface CreateOptions {
    accessController?: {
      write?: string[]
    }
    [key: string]: any
  }

  class OrbitDB {
    static createInstance(ipfs: any, options?: OrbitDBOptions): Promise<OrbitDB>

    create(name: string, type: 'eventlog' | 'keyvalue' | 'feed' | 'docstore', options?: CreateOptions): Promise<any>
    log(name: string): Promise<any>
    disconnect(): Promise<void>
  }

  export default OrbitDB
}
