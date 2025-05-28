import fs from 'fs'
import {millesimes as millesimesPci} from '../lib/pci.mjs'
import {millesimes as millesimesCadastreEtalab} from '../lib/cadastre-etalab.mjs'

const dataPci = JSON.stringify(millesimesPci, null, ' ')
const dataCadastreEtalab = JSON.stringify(millesimesCadastreEtalab, null, ' ')

fs.writeFileSync('./public/static/pci.json', dataPci)
fs.writeFileSync('./public/static/cadastre-etalab.json', dataCadastreEtalab)
