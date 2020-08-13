import Cookies from 'universal-cookie';

export default async function shows(req, res) {

    const cookies = new Cookies(req.headers.cookie);
    
    const auth = cookies.get('auth')
    console.log(cookies.get('auth'));
    res.status(200).json({auth})
  
 }