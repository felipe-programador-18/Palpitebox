import  { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'


const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

 const genCoupon = ()=>{
    const code = parseInt( moment().format(' YYMMDDHHmmssSSS')).toString(16).toLocaleUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4)  + '-' + code.substr(8,4)
 }


export default async ( req, res) => {

    try{
      await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL ,
        private_key:process.env.SHEET_PRIVATE_KEY
    })
        await doc.loadInfo()
        //Nome	Email	Whatsaap	Cupon	Promo
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        
        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')
       
        const SeeingPrincing = sheetConfig.getCell(2,0)
        const Textaffordable = sheetConfig.getCell(2,1)

        let Promo = ''
        let Cupom = ''
            
        if(SeeingPrincing.value === 'VERDADEIRO'){
          Cupom = genCoupon(),
          Promo = Textaffordable.value
        }


         await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt( data.Nota),
            'Data preenchimento': moment().format(' DD/MM/YYYY, HH:mm:ss'),
            Cupom,
            Promo
         })
          res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
          }))


          } catch (err) {
            console.log(err)
            res.end('error')       
        }
   }