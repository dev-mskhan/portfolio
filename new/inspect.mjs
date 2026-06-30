import mammoth from 'mammoth'
const { value } = await mammoth.extractRawText({ path: 'data/cv-14fbda.docx' })
console.log(value)
