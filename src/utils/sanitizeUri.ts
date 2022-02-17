export const sanitizeUri = (uri: string) => {
    // return encodeURIComponent(uri).replace(/%20/g,"-").toLocaleLowerCase()
    return encodeURIComponent(uri)
}

export const removeAscii = (uri: string) => {
    return uri.replace(/[^a-zA-Z0-9-_]/g, ' ')
}