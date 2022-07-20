export const loginValidation = (values,setError) =>{
    const error = []
    const patternEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./g
    error.email = patternEmail.test(values.email) ? '' : 'email invalid'
    error.password = values.password.length >= 8 ? '' : 'password must be at least 8 character'
    setError({...error})
}

export const registerValidation = (values,setError) =>{
    const error = []
    const patternEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./g
    error.name = values.name.length !== 0 ? '' : 'name cannot be null'
    error.email = patternEmail.test(values.email) ? '' : 'email invalid'
    error.password = values.password.length >= 8 ? '' : 'password must be at least 8 character'
    setError({...error})
} 

export const formUserValidation = (data,files,fileRejections, setError) =>{
    const error = []
    error.name = data.nama.length !== 0 ? '' : 'name cannot be null'
    error.address = data.alamat.length !== 0 ? '' : 'address cannot be null'
    error.phone = data.nohp.length !== 0 ? '' : 'number phone cannot be null'
    error.photo = fileRejections.length > 4 ? 'image cannot more than 4 files' : files.length === 0 ? 'image cannot be null' : ''
    setError({...error})
}

export const formProductValidation = (data,files,fileRejections, setError) =>{
    const error = []
    error.name = data.nama.length !== 0 ? '' : 'name cannot be null'
    error.price = data.harga !== 0 ? '' : 'price cannot be null'
    error.description = data.deskripsi.length !== 0 ? '' : 'description cannot be null'
    error.photo = fileRejections.length > 4 ? 'image cannot more than 4 files' : files.length === 0 ? 'image cannot be null' : ''
    setError({...error})
}