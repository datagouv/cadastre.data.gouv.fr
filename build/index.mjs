import fs from 'fs'
// eslint-disable-next-line import/extensions
import {millesimes as millesimesPci} from '../lib/pci.mjs'
// eslint-disable-next-line import/extensions
import {millesimes as millesimesCadastreEtalab} from '../lib/cadastre-etalab.mjs'

const dataPci = JSON.stringify(millesimesPci, null, ' ')
const dataCadastreEtalab = JSON.stringify(millesimesCadastreEtalab, null, ' ')

fs.writeFileSync('./public/static/pci.json', dataPci)
fs.writeFileSync('./public/static/cadastre-etalab.json', dataCadastreEtalab)
