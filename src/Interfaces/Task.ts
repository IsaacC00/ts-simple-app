export interface Task {
    id?: string,
    title : string,
    description: string,
    //? maneras en las que podemos tipar 
    //? para pode agregar una propiedad undefined
    //? o jno obligatoria 
    date?:string
}
