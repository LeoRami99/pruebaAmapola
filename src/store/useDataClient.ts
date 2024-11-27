import { create } from "zustand";


interface Client {
    name: string,
    surname: string,
    phone: string,
    email: string,
    numberId: string,
    company: number,
    contry: string,
    pat_tipobase: string,
    created: string,
    meetings: [],
}


interface DataClientState {
    client: Client | null;
    isClient: boolean;
    setClient: (client: Client) => void;
    setIsClient: (isClient: boolean) => void;
}


const useDataClient = create<DataClientState>((set) => ({
    client: null,
    isClient: false,
    setClient: (client) => set({ client }),
    setIsClient: (isClient) => set({ isClient }),
}));

export default useDataClient;
